"use client"

import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import QuestionSection from './_components/QuestionSection'
import RecordAnsSection from './_components/RecordAnsSection'

const StartInterview = ({params}) => {
               
               const [activeIndex, setactiveIndex] = useState(0)

               const [intData, setintData] = useState()
               const [question, setquestion] = useState()

               useEffect(() => {
                 console.log(params.interviewId)
                 getIntDets()
               
               }, [])
               
               const getIntDets = async()=>{
                              const result = await db.select().from(MockInterview).where(eq(MockInterview.mockId,params.interviewID)) 
                              console.log(result[0])
                              setintData(result[0])
                              const jsonMockQuestion = JSON.parse(result[0].jsonMockrResp)
                              console.log(jsonMockQuestion)
                              setquestion(jsonMockQuestion)
               }
  return (
    <div>
               <div className='grid grid-cols-1 md:grid-cols-2 px-10'>

                              <QuestionSection mockQuestion = {question} actInd = {activeIndex}/>

                              <RecordAnsSection mockQuestion = {question} actInd = {activeIndex} intData={intData}/>


               </div>
                              <div className='flex mt-5  w-full justify-end gap-6'>
                                            {activeIndex>0&& <Button  onClick={()=>setactiveIndex(prev=>prev-1)}>Previous Question</Button>}
                                          {activeIndex!=question?.length-1 &&   <Button onClick={()=>setactiveIndex(prev=>prev+1)}>Next Question</Button>}
                                          {activeIndex==question?.length-1 &&   
                                          <Link href={"/dashboard/interview/"+intData?.mockId+"/feedback"}>
                                          <Button>End Test</Button>
                                          </Link>
                                          }
                              </div>
    </div>
  )
}

export default StartInterview