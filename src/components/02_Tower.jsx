import React from 'react'
import Chamber from './03_Chamber'

const Tower = ({question,
  answer,
  handleAnswer,
  isPodReady,
  isPodCalled,
  setIsPodCalled,
  isSeakingInPod,
  setIsSeakingInPod,
  isEscaped,
  handleTransportOutside
}) => {
  return (
    <div className='w-full h-full bg-orange-500 items-center text-center pt-10 pb-0 px-10'>
        <h1 className='text-white font-medium text-3xl '>Tower</h1>
    <Chamber question={question}
        answer={answer}
        handleAnswer={handleAnswer}
        isPodReady={isPodReady}
        isPodCalled={isPodCalled}
        setIsPodCalled={setIsPodCalled}
        isSeakingInPod={isSeakingInPod}
        setIsSeakingInPod={setIsSeakingInPod}
        isEscaped={isEscaped}
        handleTransportOutside={handleTransportOutside}/>
    </div>
  )
}

export default Tower