import React, { useState } from 'react';
import { ROOT_BACKGROUND } from '../utils/constants';
import Header from './Header';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className='h-[100vh] box-border'>
      <Header />
      <div className='absolute'>
        <img
          src={ROOT_BACKGROUND}
          alt='background'
          className='brightness-50 z-0'
        />
      </div>
      <div className='relative top-20 flex flex-col w-5/12 m-auto h-[100vh]'>
        <form className=' m-auto rounded-lg bg-black bg-opacity-70 px-16 py-20 text-white'>
          <div className='flex flex-col mb-8 h-5/6'>
            <h1 className='mb-7 font-medium text-3xl'>
              {isSignInForm ? 'Sign In' : 'Sign Up'}
            </h1>
            {!isSignInForm && (
              <input
                type='text'
                placeholder='Full Name'
                className='py-3 px-5 w-80 outline-none bg-[#333333] text-white rounded-sm mb-5'
              /> // if no signin form and no fullname then render this. [1 : 1 => true] [1 : 0 => false]
            )}
            <input
              type='text'
              placeholder='Email'
              className='py-3 px-5 w-80 outline-none bg-[#333333] text-white rounded-sm mb-5'
            />
            <input
              type='password'
              placeholder='Password'
              className='py-3 px-5 w-80 outline-none bg-[#333333] text-white rounded-sm mb-4'
            />
            <button className='rounded-sm font-bold p-3 mt-6 text-white bg-[#E50815] mb-14'>
              {isSignInForm ? 'Sign In' : 'Sign Up'}
            </button>
            <p className='text-[#737373] text-[16px] mb-1'>
              {isSignInForm ? 'New to NetflixGpt? ' : 'Already registered? '}
              <span
                className='text-white text-[16px] cursor-pointer'
                onClick={toggleSignInForm}
              >
                {isSignInForm ? 'Sign Up now' : 'Sign In'}
              </span>
              .
            </p>
            <p className='text-[#737373] text-[13px] my-3 w-[320px]'>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{' '}
              <span className='cursor-pointer text-[#0084ff]'>Learn more.</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
