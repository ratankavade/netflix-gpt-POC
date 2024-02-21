import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../Utils/Slice/userSlice';
import { toggleSearchContainer } from '../Utils/Slice/gptSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showSearch = useSelector((store) => store.gpt.showSearchBox)

  const handleSignOut = () => {
    signOut(auth).then(() => {}).catch((error) => {
      navigate("/error");
    });
  }

  useEffect(() =>{
    const unsubscibe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName}));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe onAuthStateChanged when component unmount
    return () => unsubscibe();
  }, []);

  const handleSerchContainer = (e) => {
    dispatch(toggleSearchContainer());
  }

  return (
    <div className='absolute opacity-100 w-full z-50 bg-gradient-to-b from-black flex justify-between'>
      <div className='p-4 '>
        <img className='w-24 cursor-pointer' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt='Logo'/>
      </div>
      { user && <div className='flex'>
        <button onClick={handleSerchContainer} className='p-2 bg-purple-900 rounded-lg text-white mt-4 mr-4 mb-4 '>{showSearch ? "Back to Home" : "GPT Search"}</button>
        <p className='text-white mt-6 mr-3'>Welcome {user.displayName}</p>
        <button onClick={handleSignOut} className='p-2 bg-red-700 rounded-lg text-white mt-4 mr-4 mb-4 '>Sign Out</button>
      </div>}
    </div>
  )

  
}

export default Header
