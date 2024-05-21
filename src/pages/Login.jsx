import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form >
        <input type="text" placeholder='UserName'/>
        <input type="password" placeholder='Password'/>
        <button>Submit</button>
        <span>Don't you have an account?</span><Link to ="/register">Register</Link>
      </form>
    </div>
  )
}

export default Login