import React from 'react'
import Room from './04_Room'

const Chamber = ({question , answer, handleAnswer}) => {
  return (
    <div className='w-full h-full bg-yellow-500 items-center text-center pt-10 pb-0 px-10'>
        <h1 className='text-white font-medium text-3xl '>Chamber</h1>
        <Room question = {question} answer = {answer} handleAnswer = {handleAnswer}/>
    </div>
  )
}

export default Chamber