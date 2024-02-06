import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const changeToSignUp = () => {
    setIsSignUp(!isSignUp);
  }
  return (
    <div>
      <Header />
      <img className='absolute z-10' src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="background" />
      <div className='absolute w-1/3 z-50 top-40 left-1/3'>
        <form className='text-white bg-black bg-opacity-80 p-5 rounded-lg'>
          <h1 className='text-lg py-6'>{isSignUp ? "Sign Up" : "Sign In"}</h1>
          {isSignUp && <input className='p-4 bg-slate-500 w-full my-2' type='text' placeholder='Full Name'/>}
          <input className='p-4 bg-slate-500 w-full my-2' type='text' placeholder='Email Address'/>
          <input className='p-4 bg-slate-500 w-full my-2' type='password' placeholder='Password' />
          <button className='bg-red-700 p-4 w-full my-2 rounded-lg'>{isSignUp ? "Sign Up" : "Sign In"}</button>
          <p className='text-center py-6'>{!isSignUp ? "New at Netflix?" : "Already User?"} <span className='text-red-700 cursor-pointer' onClick={changeToSignUp}>{!isSignUp ? "Sign Up" : "Sign In"}</span> now</p>
        </form>
      </div>
    </div>
  )
}

export default Login
