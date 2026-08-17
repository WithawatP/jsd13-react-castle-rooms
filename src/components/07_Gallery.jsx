import React from "react";
import Nook from "./08_Nook";

const Gallery = ({
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
    <div className="w-full h-full bg-blue-600 items-center text-center pt-10 pb-0 px-10">
      <h1 className="text-white font-medium text-3xl ">Gallery</h1>
      <Nook
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

export default Gallery;
