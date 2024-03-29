import React from 'react'
import './CSS/LoginSignUp.css'

export const LoginSignUp = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input placeholder='Enter Name' type='text'/>
          <input placeholder='Email Address' type='email'/>
          <input placeholder='Enter Password' type='password'/>
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already Have an Account? <span>Login here</span></p>
        <div className='loginsignup-agree'>
          <input type='checkbox' name='' id=''/>
          <p>By continuing, i agree to the terms of use and privacy policy.</p>
        </div>
      </div>
    </div>
  )
}
