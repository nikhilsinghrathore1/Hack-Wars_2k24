"use client"
import { db } from '@/utils/db'
import { UserAnswer } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import {
               Collapsible,
               CollapsibleContent,
               CollapsibleTrigger,
             } from "@/components/ui/collapsible"
             
import React, { useEffect, useState } from 'react'
import { ChevronDownSquareIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const Feedback = ({params}) => {
               const router = useRouter()
               const [feedlist, setfeedlist] = useState([])
               useEffect(() => {
                getfeedback()
               }, [])
               

               const getfeedback = async()=>{
                              const result = await db.select().from(UserAnswer).where(eq(UserAnswer.mockIdRef,params.interviewID)).orderBy(UserAnswer.id)
                              console.log(result)
                              setfeedlist(result)
               }

  return (
    <div className='p-5'>
               <h2 className='text-2xl font-bold text-green-500'>congratulation!</h2>
               <h2 className='font-bold text-2xl'>here is your interview feedback</h2>
               <h2 className='text-primary my-3 text-lg'>Your overall Test rating: <strong>7/10</strong></h2>
               <h2 className='text-sm text-gray-500'>find below Test question with correct answer, Your answer and feedback for improvement</h2>

               {feedlist && feedlist.map((item,index)=>(
                              <Collapsible key={index} className="mt-7">
                              <CollapsibleTrigger className='p-2 bg-secondary rounded-lg my-2 text-left'>
                                             {item.question}
                                             <ChevronDownSquareIcon/>
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <div className='flex flex-col gap-2'>
                                             <h2 className='text-red-500 p-2 border rounded-lg'><strong>Rating:</strong>{item.rating}</h2>
                                             <h2 className='text-red-500 p-2 bg-red-100 border rounded-lg'><strong>Your Answer:</strong>{item.userAns}</h2>
                                             <h2 className='text-green-500 p-2 border bg-green-100 rounded-lg'><strong>Correct Answer:</strong>{item.correctAns}</h2>
                                             <h2 className='p-2 border bg-secondary rounded-lg'><strong>FeedBack:</strong>{item.feedback}</h2>
                                </div>
                              </CollapsibleContent>
                            </Collapsible>
               ))}

               <Button onClick={()=>router.replace("/dashboard")}>Go Home</Button>
    </div>
  )
}

export default Feedback