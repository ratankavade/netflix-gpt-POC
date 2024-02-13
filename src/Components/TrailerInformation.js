import React from 'react'

const TrailerInformation = ({title, overview}) => {
  return (
    <div className='w-1/3 mt-52 px-14 py-3 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-2xl mb-4'>{title}</h1>
      <p>{overview}</p>
      <div className='flex mt-3'>
        <button className='bg-white text-black px-5 py-2 rounded-sm flex mr-4 hover:bg-opacity-50'> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
        </svg>
        Play
        </button>
        <button className='bg-white text-black px-5 py-2 rounded-sm hover:bg-opacity-50'>More Info</button>
      </div>
    </div>
  )
}

export default TrailerInformation
