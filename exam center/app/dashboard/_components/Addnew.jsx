"use client"
import React, { useState } from 'react'
import {
               Dialog,
               DialogContent,
               DialogDescription,
               DialogHeader,
               DialogTitle,
               DialogTrigger,
             } from "@/components/ui/dialog"
             import { v4 as uuidv4 } from 'uuid';

             import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { chatSession } from '@/utils/Aimodel'
import { LoaderCircle } from 'lucide-react'
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema'
import { useUser } from '@clerk/nextjs';
import moment from 'moment';

             
const Addnew = () => {
               
               const {user} = useUser()
               const [jobpos, setjobpos] = useState()
               const [jobDesc, setjobDesc] = useState()
               const [jobExp, setjobExp] = useState()
               const [loading, setloading] = useState(false)
               const [josnResp, setjosnResp] = useState([])
               const router = useRouter()
               const onSubmit = async (e) => {
                              e.preventDefault();
                              setloading(true);
                            
                              const inputPrompt = `job position: ${jobpos}, job Description: ${jobDesc}, Years of Experience: ${jobExp}, depends on this information please give me 5 interview questions with Answers in JSON format, give question and answer as field in JSON and i dont want any important notes or any tip just the json data and nothing else`;
                            
                              try {
                                const result = await chatSession.sendMessage(inputPrompt);
                                let mockjsonResp = result.response.text().trim();
                                
                                // Remove markdown code fences if present
                                mockjsonResp = mockjsonResp.replace('```json','').replace('```', '').replace(`**Remember to tailor these questions and answers to your specific experiences and the details of the job you're interviewing for.** 

                                You can also ask about specific technologies or frameworks mentioned in the job description, and be prepared to discuss your experience with testing in React, accessibility, and any other relevant topics. 
                                
                                Good luck with your interview!`,"").replace("Remember to personalize these questions and answers based on your specific experiences and the requirements of the specific job. Good luck with your interview!","").replace("Remember to tailor these questions and answers to your specific experiences and the requirements of the specific job.  Be prepared to discuss additional details about projects where you've implemented these concepts and to answer follow-up questions. Good luck with your interview!","");
                                setjosnResp(mockjsonResp)
                              //   console.log(mockjsonResp)
                            
                                const jsonData = JSON.parse(mockjsonResp);
                                console.log(jsonData);

                              if(mockjsonResp){
                              console.log("inside")
                                             
                                             const resp = await db.insert(MockInterview).values({
                                                            mockId:uuidv4(),
                                                            jsonMockrResp:mockjsonResp,
                                                            jobDesc:jobDesc,
                                                            jobPosition:jobpos,
                                                            jobExp:jobExp,
                                                            createdBy:user?.primaryEmailAddress?.emailAddress,
                                                            createdAt:moment().format("DD-MM-yyyy")
                                             }).returning({mockId:MockInterview.mockId})
                                             
                                             console.log("inserted id: ", resp)
                                             if(resp){
                                                            router.push("/dashboard/interview/"+resp[0]?.mockId)
                                             }
                              }
                              else{
                                             console.log("something went wrong")
                              }
                              } catch (error) {
                                console.error('Error retrieving or parsing interview questions:', error);
                              } finally {
                                setloading(false);
                              }
                            };
  return (
    <div className='px-20 mt-3 py-10 w-fit bg-secondary hover:shadow-lg transition-all rounded-lg hover:scale-105'>
               <h2 className='font-bold'>+ Add New</h2>
               <Dialog>
  <DialogTrigger>__________</DialogTrigger>
  <DialogContent className="max-w-2xl">
    <DialogHeader>
      <DialogTitle className="text-2xl">Select the topic of test</DialogTitle>
      <DialogDescription>
               <form onSubmit={onSubmit}>
                             

         
               <div>
                              <h2>Add details the test you want to give</h2>
                              <div className='mt-7 my-3'>
                                             <label >Subject/chapter</label>
                                             <Input onChange={(event)=>setjobpos(event.target.value)}  placeholder="Ex. FullStack developer" required />
                              </div>
                              <div className='my-3'>
                                             <label >Test description (in short)</label>
                                             <Textarea onChange={(event)=>setjobDesc(event.target.value)} placeholder="Ex. React , Angular , Nodejs , Postgress etc" required/>
                              </div>
                              <div className=' my-3'>
                                             <label >days taken to complete the course</label>
                                             <Input onChange={(event)=>setjobExp(event.target.value)} placeholder="5" type="number" max="50" required/>
                              </div>
               </div>
        <div className='flex w-full justify-end  mt-3'>
               <div className='flex gap-5'>

               <Button type="button" variant="Ghost">Cancel</Button>
               <Button type="submit" disabled={loading}>
                              {loading?<>
                              <LoaderCircle className='animate-spin'/>"Generating from Ai"
                              </>:"Start Test"}
                              </Button>
               </div>
        </div>
        </form>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default Addnew