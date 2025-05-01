import React, { useState } from 'react'

const Login = () => {
  return (
    <>
        <h1 className='login-title'>Login</h1>
        <form id='loginForm'>
          <div className='username-wrapper'>
            <label htmlFor='username'>
              Username:
              <input type="text" id='username' name='username'/>
            </label>
          </div>
          <div className='password-wrapper'>
            <label htmlFor='password'>
              Password:
              <input type="password" id='password' name='password'/>
            </label>
          </div>
          <button className='login-button'>Login</button>
        </form>
    </>
  )
}

export default Login