"use client"
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { desc, eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import InterviewCard from './InterviewCard'

const InterviewList = () => {

               const {user} = useUser()
               const [interviewList, setinterviewList] = useState([])

               useEffect(() => {

                              user && getInterviewList()
                 
               }, [user])
               

               const getInterviewList = async()=>{
                              const result = await db.select().from(MockInterview).where(eq(MockInterview.createdBy,user?.primaryEmailAddress?.emailAddress)).orderBy(desc(MockInterview.id))
                              console.log(result)
                              setinterviewList(result)
               }

  return (
    <div>
               <h2 className='font-medium text-lg'>Previously Taken Test</h2>

               <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>{interviewList && interviewList.map((inter,index)=>(
                              <InterviewCard inter={inter} key={index}/>
               ))}</div>
    </div>
  )
}

export default InterviewList