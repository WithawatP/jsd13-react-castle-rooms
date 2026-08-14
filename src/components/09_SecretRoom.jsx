import React from 'react'

const SecretRoom = ({question , answer, handleAnswer}) => {
  return (
    <div className='w-full h-full bg-purple-950 items-center text-center pt-10 pb-0 px-10'>
        <h1 className='text-white font-medium text-3xl'>SecretRoom</h1>
        <textarea 
        value={answer} 
        onChange={handleAnswer} 
        className="w-55 rounded bg-white text-black px-3 py-1 text-center items-center mt-5" 
        placeholder="Type Your masseage here..." 
        />
        <p className="text-white font-semibold">
          Massage For Secret Room :
          <br />
          <span className="text-yellow-500"> 
            {question ? ` 👌🏻 ${question}` : " 🤲🏻 waiting for message.."}
          </span>
        </p>
        <p className="text-white font-semibold">
          Massage For Castle :
          <br />
          <span className="text-yellow-500"> 
            {answer ? ` 👌🏻 ${answer}` : " 🤲🏻 waiting for message.."}
          </span>
        </p>
    </div>
  )
}

export default SecretRoom