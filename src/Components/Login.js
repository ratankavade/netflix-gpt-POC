import React, { useRef, useState } from 'react'
import Header from './Header'
import {checkFormValidation} from '../Utils/Validation/Validation.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { auth } from "../Utils/firebase"
import { addUser } from '../Utils/Slice/userSlice.js';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const changeToSignUp = () => {
    setIsSignUp(!isSignUp);
  }

  const handleLogin = () => {
    const message = checkFormValidation(email.current.value, password.current.value);
    setErrorMessage(message);

    if(message === null){
      if(isSignUp){
        // console.log("Sign Up")
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            // Profile updated!
            const {uid, email, displayName, photoURL} = auth.currentUser;
            // console.log("auth", auth);
            dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message);
          });
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
      }else{
        // console.log("Sign In");
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });

      }
    }
  }

  return (
    <div>
      <Header />
      <img className='absolute z-10' src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="background" />
      <div className='absolute w-1/3 z-50 top-40 left-1/3'>
        <form className='text-white bg-black bg-opacity-80 p-5 rounded-lg' onSubmit={(e)=>{e.preventDefault()}}>
          <h1 className='text-lg py-6'>{isSignUp ? "Sign Up" : "Sign In"}</h1>
          {isSignUp && <input ref={name} className='p-4 bg-slate-500 w-full my-2' type='text' placeholder='Full Name'/>}
          <input ref={email} className='p-4 bg-slate-500 w-full my-2' type='text' placeholder='Email Address'/>
          <input ref={password} className='p-4 bg-slate-500 w-full my-2' type='password' placeholder='Password' />
          <p className='text-red-700'>{errorMessage}</p>
          <button onClick={handleLogin} className='bg-red-700 p-4 w-full my-2 rounded-lg'>{isSignUp ? "Sign Up" : "Sign In"}</button>
          <p className='text-center py-6'>{!isSignUp ? "New at Netflix?" : "Already User?"} <span className='text-red-700 cursor-pointer' onClick={changeToSignUp}>{!isSignUp ? "Sign Up" : "Sign In"}</span> now</p>
        </form>
      </div>
    </div>
  )
}

export default Login
