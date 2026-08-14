import React from 'react'
import Hall from './05_Hall'

const Room = ({question , answer, handleAnswer}) => {
  return (
    <div className='w-full h-full bg-green-500 items-center text-center pt-10 pb-0 px-10'>
        <h1 className='text-white font-medium text-3xl '>Room</h1>
        <Hall question = {question} answer = {answer} handleAnswer = {handleAnswer}/>
    </div>
  )
}

export default Room