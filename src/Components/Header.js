import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/error");
    });
  }

  return (
    <div className='absolute w-full z-50 bg-gradient-to-b from-slate-700 to-slate-300 flex justify-between'>
      <div className='p-4 '>
        <img className='w-24 cursor-pointer' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt='Logo'/>
        {/* <div>
          <button className='p-4 bg-red-600 text-white'>Login</button>
        </div> */}
      </div>
      { user && <div>
        <button onClick={handleSignOut} className='p-2 bg-red-700 rounded-lg text-white mt-4 mr-4'>Sign Out</button>
      </div>}
    </div>
  )

  
}

export default Header
