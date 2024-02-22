import React from 'react'
import { BG_URL } from '../Utils/Constants/constants'

const GptSearch = () => {
  return (
    <>
    <img className='absolute -z-10' src={BG_URL} alt="background" />
    <div className='flex justify-center z-50'>
        <div className='bg-black mt-[15%] p-3 w-1/2'>
        
            <input className='py-3 px-4 w-[80%]' type="text" placeholder='What would you like to watch today?'/>
            <button className='bg-red-700 py-3 px-4 w-[20%] text-white'>Search</button>
        </div>
    </div>
    </>
    
    
  )
}

export default GptSearch
