import React from "react";
import Corridor from "./06_Corridor";

const Hall = () => {
  return (
    <div className="w-full h-full bg-green-400 items-center text-center pt-10 pb-0 px-10">
      <h1 className="text-white font-medium text-3xl ">Hall</h1>
      <Corridor />
    </div>
  );
};

export default Hall;
