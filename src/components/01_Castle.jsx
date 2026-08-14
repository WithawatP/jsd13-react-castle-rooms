import React from 'react'
import Tower from "./02_Tower";

const Castle = ({question , answer, handleAnswer}) => {
  return (
    <div className='w-full h-full bg-red-500 items-center text-center pt-5 pb-0 px-10'>
        <h1 className='text-white font-medium text-3xl '>Castle</h1>
        <p className="text-white font-semibold">
          Massage For Secret Room :
          <span className="text-yellow-500"> 
            {question ? ` 👌🏻 ${question}` : " 🤲🏻 waiting for message.."}
          </span>
        </p>
        <p className="text-white font-semibold">
          Massage For Castle :
          <span className="text-yellow-500"> 
            {answer ? ` 👌🏻 ${answer}` : " 🤲🏻 waiting for message.."}
          </span>
        </p>
      <Tower question = {question} answer = {answer} handleAnswer = {handleAnswer} />
    </div>
  )
}

export default Castle