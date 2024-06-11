import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Registerpage.css'


export default function RegisterPage() {
  const [username,setUsername]=useState("")
  //[username(variable),setUsername(function)]
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  //useState is the shorcut for the function
  const navigate = useNavigate("")
  
  const RegisterUser = async (e) =>{
    e.preventDefault()
    const response = await axios.post('http://localhost:3000/api/v1/user/',{
      email :email,
      password : password,
      username:username
    })
    console.log(response)
    navigate('/login')
  }

  return (
    <div>
       <form>
        <h3>Register</h3>
        <label>Username:</label>
        <input type="text" name="username" placeholder="Enter your name"  
        onChange={(e) => setUsername(e.target.value)} />
        <label>Email:</label>
        <input type="email" name="email" placeholder="Enter your email" 
         onChange={(e) => setEmail(e.target.value)}/>
        <label>Password:</label>
        <input type="password" name="password" placeholder="Enter your password" 
        onChange={(e) => setPassword(e.target.value)} />
        <button onClick={RegisterUser} type="submit">Register</button>

        <div className='login-link'>
          Already have an account? 
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  )
}
