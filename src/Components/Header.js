import React from 'react'

const Header = () => {
  return (
    <div className='absolute w-full z-50'>
      <div className='p-4 bg-black bg-opacity-50'>
        <img className='w-24 cursor-pointer' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt='Logo'/>
        {/* <div>
          <button className='p-4 bg-red-600 text-white'>Login</button>
        </div> */}
      </div>
    </div>
  )
}

export default Header
