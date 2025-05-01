import React, { useState } from 'react'
import AnimatedText from '../Comps/common/AnimatedText'

const Login = () => {

  const [loginValues, setLoginValues] = useState({
    username: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target

    setLoginValues((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (

    <>
        <h1 className='login-title'><AnimatedText text='Login'/></h1>
        <form id='loginForm'>
          <div className='username-wrapper'>
            <label htmlFor='username'>
              Username:
              <input type="text" id='username' name='username' onChange={handleChange} value={loginValues.username}/>
            </label>
          </div>
          <div className='password-wrapper'>
            <label htmlFor='password'>
              Password:
              <input type="password" id='password' name='password' onChange={handleChange} value={loginValues.password}/>
            </label>
          </div>
          <button className='login-button'>Login</button>
        </form>
    </>
  )
}

export default Login