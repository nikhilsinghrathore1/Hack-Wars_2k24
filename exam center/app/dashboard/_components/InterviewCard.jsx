import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

const InterviewCard = ({inter}) => {

               const router = useRouter()

               const onStart = ()=>{
                              router.push("/dashboard/interview/"+inter?.mockId )
               }
               const onFeedBack = ()=>{
                              router.push("/dashboard/interview/"+inter?.mockId+"/feedback" )
               }

  return (
    <div className='py-3 px-10 w-[30vw] border shadow-sm rounded-lg'>

               <h2 className='font-bold text-primary text-xl'>{inter?.jobPosition}</h2>
               <h2 className=' text-gray-600 text-sm mt-3'>Days taken :{inter?.jobExp} </h2>
               <h2 className=' text-gray-500 text-sm mt-1'>Attempted on:{inter?.createdAt} </h2>

               <div className='flex gap-5 mt-4 justify-between'>
                              <Button onClick={onFeedBack} size="sm" variant="outline">Feedback</Button>
                              <Button  onClick={onStart}  size="sm">Start</Button>
               </div>

    </div>
  )
}

export default InterviewCard