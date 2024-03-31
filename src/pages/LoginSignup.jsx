import React from 'react'
import './css/loginSignup.css'

const LoginSignup = () => {
  return (
    <div className='login-signup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="login-input">
            <input type='name' placeholder='Your Name' />
            <input type='email' placeholder='Email Address' />
            <input type='password' placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">allready have an account? <span>Log In here</span></p>
        <div className="loginsignup-agree">
            <input type="checkbox" name='' id=''/>
            <p>by continuing, i agree to the terms of use and privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
