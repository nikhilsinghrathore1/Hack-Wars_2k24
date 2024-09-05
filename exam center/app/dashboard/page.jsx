import React from 'react'
import Addnew from './_components/Addnew'
import InterviewList from './_components/InterviewList'

const Dashboard = () => {
  return (
    <div className='px-20'>
               <h1 className='font-bold capitalize text-3xl'>Test Arena</h1>
               <h1 className='text-gray-500 text-lg '>Create and start your AI Powered Test</h1>
               
               <div className='mb-10'>


               <Addnew/>

               </div>

               <InterviewList/>
    </div>


  )
}

export default Dashboard