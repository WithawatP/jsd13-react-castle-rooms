import React from "react";
import Tower from "./02_Tower";

const Castle = ({
  question,
  answer,
  handleAnswer,
  isPodReady,
  isPodCalled,
  setIsPodCalled,
  isSeakingInPod,
  setIsSeakingInPod,
  isEscaped,
  handleTransportOutside,
}) => {
  return (
    <div className="w-full h-full bg-red-500 items-center text-center pt-5 pb-0 px-10">
      <h1 className="text-white font-medium text-3xl ">Castle</h1>
      <Tower
        question={question}
        answer={answer}
        handleAnswer={handleAnswer}
        isPodReady={isPodReady}
        isPodCalled={isPodCalled}
        setIsPodCalled={setIsPodCalled}
        isSeakingInPod={isSeakingInPod}
        setIsSeakingInPod={setIsSeakingInPod}
        isEscaped={isEscaped}
        handleTransportOutside={handleTransportOutside}
      />
    </div>
  );
};

export default Castle;
