import React from 'react'
import SecretRoom from './09_SecretRoom'

const Nook = () => {
  return (
    <div className='w-full h-full bg-purple-600 items-center text-center pt-10 pb-0 px-10'>
        <h1 className='text-white font-medium text-3xl '>Nook</h1>
        <SecretRoom />
    </div>
  )
}

export default Nook