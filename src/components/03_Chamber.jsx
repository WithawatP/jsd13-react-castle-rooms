import React from "react";
import Room from "./04_Room";

const Chamber = ({
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
    <div className="w-full h-full bg-yellow-500 items-center text-center pt-10 pb-0 px-10">
      <h1 className="text-white font-medium text-3xl ">Chamber</h1>
      <Room
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

export default Chamber;
