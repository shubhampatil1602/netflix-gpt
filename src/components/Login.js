import React, { useRef, useState } from 'react';
import { ROOT_BACKGROUND } from '../utils/constants';
import Header from './Header';
import { checkValidData } from '../utils/validate';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Validate form data
    const message = checkValidData(
      name.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className='h-screen box-border'>
      <Header />
      <div className='absolute '>
        <img
          src={ROOT_BACKGROUND}
          alt='background'
          className='z-0 h-[1000px] w-full object-cover brightness-50'
        />
      </div>
      <div className='relative lg:top-16 flex flex-col w-5/6 lg:w-5/12 m-auto h-screen'>
        <form
          onSubmit={(e) => e.preventDefault()}
          className='m-auto rounded-lg bg-black bg-opacity-70 px-4 sm:px-8 py-10 sm:py-8 lg:py-20 lg:px-16 text-white z-10'
        >
          <div className='flex flex-col mb-4 sm:mb-8 h-full'>
            <h1 className='mb-4 sm:mb-6 font-medium text-2xl sm:text-2xl lg:text-3xl w-full'>
              {isSignInForm ? 'Sign In' : 'Sign Up'}
            </h1>
            {!isSignInForm && (
              <input
                type='text'
                placeholder='Full Name'
                className='py-2 sm:py-3 px-3 sm:px-5 w-full outline-none bg-[#333333] text-white rounded-sm mb-3 sm:mb-5'
                ref={name}
              />
            )}
            <input
              type='text'
              placeholder='Email'
              className='py-2 sm:py-3 px-3 sm:px-5 w-full outline-none bg-[#333333] text-white rounded-sm mb-3 sm:mb-5'
              ref={email}
            />
            <input
              type='password'
              placeholder='Password'
              className='py-2 sm:py-3 px-3 sm:px-5 w-full outline-none bg-[#333333] text-white rounded-sm mb-2 sm:mb-4'
              ref={password}
            />
            <span className='text-[#e87c03] text-xs sm:text-sm py-1 w-full sm:w-5/6'>
              {errorMessage}
            </span>
            <button
              className='rounded-sm font-bold p-2 sm:p-3 mt-3 sm:mt-5 text-white bg-[#E50815] mb-6 sm:mb-8'
              onClick={handleButtonClick}
            >
              {isSignInForm ? 'Sign In' : 'Sign Up'}
            </button>
            <p className='text-[#737373] text-xs sm:text-sm mb-1 w-full sm:w-[320px]'>
              {isSignInForm ? 'New to NetflixGpt? ' : 'Already registered? '}
              <span
                className='text-white text-xs sm:text-sm cursor-pointer'
                onClick={toggleSignInForm}
              >
                {isSignInForm ? 'Sign Up now' : 'Sign In'}
              </span>
              .
            </p>
            <p className='text-[#737373] text-xs sm:text-sm my-1 sm:my-2 w-full sm:w-[320px]'>
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
