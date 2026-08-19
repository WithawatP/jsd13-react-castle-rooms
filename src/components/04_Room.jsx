import React from "react";
import Hall from "./05_Hall";

const Room = () => {
  return (
    <div className="w-full h-full bg-green-500 items-center text-center pt-10 pb-0 px-10">
      <h1 className="text-white font-medium text-3xl ">Room</h1>
      <Hall />
    </div>
  );
};

export default Room;
