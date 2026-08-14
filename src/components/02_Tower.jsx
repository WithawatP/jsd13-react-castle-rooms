import React from 'react'
import Chamber from './03_Chamber'

const Tower = ({question , answer, handleAnswer}) => {
  return (
    <div className='w-full h-full bg-orange-500 items-center text-center pt-10 pb-0 px-10'>
        <h1 className='text-white font-medium text-3xl '>Tower</h1>
    <Chamber question = {question} answer = {answer} handleAnswer = {handleAnswer}/>
    </div>
  )
}

export default Tower