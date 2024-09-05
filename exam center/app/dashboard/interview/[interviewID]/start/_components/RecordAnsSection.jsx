"use client"
import { Button } from '@/components/ui/button'
import { chatSession } from '@/utils/Aimodel';
import { db } from '@/utils/db';
import { UserAnswer } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { Mic } from 'lucide-react';
import moment from 'moment';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import useSpeechToText from 'react-hook-speech-to-text';
import Webcam from 'react-webcam'
import { toast } from 'sonner';

const RecordAnsSection = ({mockQuestion, actInd , intData}) => {

               const [userAnswer, setuserAnswer] = useState("") 
               const [loading, setloading] = useState(false)
               const {user} = useUser()

               const {
                              error,
                              interimResult,
                              isRecording,
                              results,
                              startSpeechToText,
                              setResults,
                              stopSpeechToText,
                            } = useSpeechToText({
                              continuous: true,
                              useLegacyResults: false
                            });
                          

                            useEffect(() => {

                              results.map((res)=>(
                                             setuserAnswer(prev=>prev+res?.transcript)
                              ))
                          
                            }, [results])

                            useEffect(() => {
                              
                              if(!isRecording && userAnswer.length>10){
                                             updateUser()
                                             setuserAnswer("")
                              }

                            }, [userAnswer])
                            


                            const saveAnswer = ()=>{
                              if(isRecording){
                                  
                                             stopSpeechToText()
                                          
                                            
                              }
                              else{
                                             startSpeechToText()
                              }
                            }

                            const updateUser = async()=>{

                              console.log(userAnswer)
                              setloading(true)
                              const feedbackPrompt = "Question"+mockQuestion[actInd]?.question+" User Answer:"+userAnswer+"Depends on the question and user answer for the given question please give us rating for answer and feedback as area of improvement in just 2-3 lines to improve it , in JSON format with rating field and feedback field"
                              const result = await chatSession.sendMessage(feedbackPrompt )

                              const mockresp = (result.response.text()).replace('```json','').replace('```', '')
                              const jsonFeedback = JSON.parse(mockresp)
                              // console.log(jsonFeedback)

                              const resp = await db.insert(UserAnswer).values({
                                             mockIdRef:intData?.mockId,
                                             question:mockQuestion[actInd]?.question,
                                             correctAns:mockQuestion[actInd]?.answer,
                                             userAns:userAnswer,
                                             feedback:jsonFeedback?.feedback,
                                             rating:jsonFeedback?.rating,
                                             userEmail:user?.primaryEmailAddress?.emailAddress,
                                             createdAt:moment().format("DD-MM-yyyy")
                              })

                              if(resp){
                                             toast("User Answer Recorded successfully")
                                             setuserAnswer('')
                                             setResults([])
                              }
                              setResults([])
                              setloading(false)
                            }
                            

  return (
               <div className='flex flex-col items-center justify-center'>

    <div className='flex flex-col justify-center items-center bg-secondary rounded-lg p-5 my-10'>
               <Image className='absolute' src={"/cam.png"} height={200} width={200}/>
               <Webcam
               mirrored={true}
               style={{
                              height:300,
                              width:"100%",
                              zIndex:10
               }}/>
    </div>

                              <Button disabled={loading} onClick={saveAnswer} variant="outline">
                                             {isRecording?<h2 className='text-red-500 flex gap-1 items-center'><Mic/> Stop Recording</h2>:
                                            " Record answer"
                              }
                                             </Button>


                              
        
               </div>
  )
}

export default RecordAnsSection