import React, {useState} from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

import signinImage from '../assets/signup.jpeg';

const Auth = () => {

    const [isSignup, setIsSignup] = useState(true);

    const handleChange = () => {};

    //changing the state of isSignup whether or not we're signing up
    // if we're signing up, we'll render the signup form
    // if we're not, we'll render the login form
    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
    }

  return (
    <div className='auth__form-container'>
        <div className='auth__form-container_fields'>
            <div className='auth__form-container_fields-content'>
                <p>
                     {/* if isSignup is true, display 'Sign Up' else display 'Sign In' */}
                    {isSignup ? 'Sign up' : 'Sign In'}
                </p>
                <form onSubmit={() => {}}>
                    {isSignup && (
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='fullName'> Full Name</label>
                            <input
                                name='fullName'
                                type='text'
                                placeholder='Full Name'
                                onChange={handleChange}
                                required
                            />
                        </div>
                    )}
                    <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='username'> Username</label>
                            <input
                                name='username'
                                type='text'
                                placeholder='Username'
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {isSignup && (
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='phoneNumber'> Phone Number</label>
                            <input
                                name='phoneNumber'
                                type='text'
                                placeholder='Phone Number'
                                onChange={handleChange}
                                required
                            />
                        </div>
                    )}    
                    {isSignup && (
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='avatarURL'> Avatar URL</label>
                            <input
                                name='avatarURL'
                                type='text'
                                placeholder='Avatar URL'
                                onChange={handleChange}
                                required
                            />
                        </div>
                    )}    
                    <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='Password'> Password</label>
                            <input
                                name='password'
                                type='password'
                                placeholder='Password'
                                onChange={handleChange}
                                required
                            />
                        </div>
                    {isSignup && (
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='confirmPassword'> Confirm Password</label>
                            <input
                                name='confirmPassword'
                                type='password'
                                placeholder='Confirm Password'
                                onChange={handleChange}
                                required
                            />
                        </div>
                    )}     
                </form>
                <div className='auth__form-container_fields-account'>
                    <p>
                        {isSignup 
                        ? 'Already have an account?'
                        : "Don't have an account?"
                        }
                        <span onClick={switchMode}>
                            {isSignup ? 'Sign In' : 'Sign Up'}
                        </span>
                    </p>
                </div>
            </div>
        </div>
        <div className='auth__form-container_image'>
            <img src={signinImage} alt='sign in' />
        </div>
    </div>
  )
}

export default Auth