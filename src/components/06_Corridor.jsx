import React from 'react'
import Gallery from './07_Gallery'

const Corridor = ({question , answer, handleAnswer}) => {
  return (
    <div className='w-full h-full bg-blue-500 items-center text-center pt-10 pb-0 px-10'>
        <h1 className='text-white font-medium text-3xl '>Corridor</h1>
    <Gallery question = {question} answer = {answer} handleAnswer = {handleAnswer} />
    </div>
  )
}

export default Corridor