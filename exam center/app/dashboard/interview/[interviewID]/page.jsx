"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { Lightbulb, WebcamIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'

const Interview = ({params}) => {

               const [intData, setintData] = useState()
               const [enablewebcam, setenablewebcam] = useState(false)
               useEffect(() => {
                 console.log(params.interviewID)
               getIntDets()
               console.log(intData);
                
               },[])

               const getIntDets = async()=>{
                              const result = await db.select().from(MockInterview).where(eq(MockInterview.mockId,params.interviewID)) 
                              setintData(result[0])
                              console.log(result[0])
               }

  return intData&&(
            
    <div className=''>
               <h2 className='font-bold text-2xl pl-2'>Let's Get Started</h2>

               <div className='grid grid-cols-1 gap-5  md:grid-cols-2 '>
            


               
               <div className='pt-7'>
                              <div className='p-5 rounded-lg border'>

                              <h2 className='text-sm mt-2'><strong>Subject: </strong>{intData.jobPosition}</h2>
                              <h2 className='text-sm mt-4'><strong>Test description: </strong>{intData.jobDesc}</h2>
                              <h2 className='text-sm mt-4'><strong>Days taken to learn: </strong>{intData.jobExp}</h2>
                              </div>

                              <div className='border-yellow border rounded-lg bg-yellow-100 p-3 mt-4 text-yellow-600'>
                                             <h2 className='flex gap-2 capitalize '><Lightbulb/><strong>information</strong></h2>
                                             <h2 className='leading-[20px] w-[85%] mt-2 pl-3 text-[14.5px]'>Enable Video Web Cam and Microphone to Start your AI Generated Mock Interview , It Has 5 question which you can answer and at the last you will get the report on the basis of your answer . NOTE: We never record your video , Web canm accesss you can disable at any time if you want </h2>
                              </div>
               </div>


               <div className='w-[90%]'>
                              {enablewebcam?
                              <Webcam
                              onUserMedia={()=>setenablewebcam(true)}
                              onUserMediaError={()=>setenablewebcam(false)}
                              mirrored={true}
                              style={{
                                             height:350,
                                             width:500
                              }}/>:
                              <>
                              <WebcamIcon className='h-56 w-full p-10 my-7 bg-secondary rounded-lg border  '/>
                              <Button variant="Ghost" className="w-[100%] hover:bg-secondary" onClick={()=>setenablewebcam(true)}>Enable webcam and Microphone</Button>
                              </>
               }
               </div>
               </div>

          <div className='w-full mt-5 flex justify-end'>
               <Link href={"/dashboard/interview/"+params.interviewID+"/start"}>
               <Button>Start Test</Button>
               </Link>
          </div>
    </div>
               
  )
}

export default Interview