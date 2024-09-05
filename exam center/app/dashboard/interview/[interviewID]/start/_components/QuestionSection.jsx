import { Lightbulb, Volume2 } from 'lucide-react'
import React, { act } from 'react'

const QuestionSection = ({mockQuestion, actInd}) => {

               const textToSpeech = (text)=>{
                              if("speechSynthesis" in window){
                                             const speech = new SpeechSynthesisUtterance(text)
                                             window.speechSynthesis.speak(speech)
                              }
                              else{
                                             alert("sorry your browser does not support text to speech")
                              }
               }

  return  mockQuestion&&(
    <div className='p-5 rounded-lg border'>
               <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                              {mockQuestion&&mockQuestion.map((ques ,index)=>(
                                             <h2 className={`${actInd==index ? "bg-primary text-white":"bg-secondary"} p-2  rounded-full text-xs md:text-sm text-center cursor-pointer`}>question #{index+1}</h2>
                              ))}

               </div>
                              <h1 className='mt-14 font-semibold text-gray-700 leading-[25px] text-lg w-[80%]'>{mockQuestion[actInd]?.question}</h1>
                              <Volume2 className='mt-2' onClick={()=>textToSpeech(mockQuestion[actInd]?.question)}/>

                              <div className='border rounded-lg p-5  bg-blue-100 mt-16'>
                                             <h2 className='flex items-center gap-2 text-primary'>
                                                            <Lightbulb/>
                                                            <strong>NOTE:</strong>
                                             </h2>
                                             <h2 className='text-sm leading-5 w-[95%] pl-10 mt-2'>Click on Record Answer when you want to answer the question . At the end of interview we will give you the feedback along with correct answer for each of question and your answer to compare it.</h2>
                              </div>

    </div>
  )
}

export default QuestionSection