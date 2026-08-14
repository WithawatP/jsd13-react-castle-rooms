import React from 'react'
import Tower from "./02_Tower";

const Castle = () => {
  return (
    <div className='w-full h-full bg-red-500 items-center text-center pt-5 pb-0 px-10'>
        <h1 className='text-white font-medium text-3xl '>Castle</h1>
        <span className='text-purple-300'>Massage from the outside :</span>
      <Tower />
    </div>
  )
}

export default Castle