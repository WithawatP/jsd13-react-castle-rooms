import React from 'react'
import Nook from './08_Nook'

const Gallery = () => {
  return (
    <div className='w-full h-full bg-blue-600 items-center text-center pt-10 pb-0 px-10'>
        <h1 className='text-white font-medium text-3xl '>Gallery</h1>
        <Nook />
    </div>
  )
}

export default Gallery