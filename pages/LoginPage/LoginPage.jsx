import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Loginpage.css'

export default function LoginPage() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate =useNavigate()

  const LoginUser = async(e)=>{
    e.preventDefault()
    try{
      const response = await axios.post('http://localhost:3000/api/v1/user/login',{
        email : email,
        password:password
      })
      console.log(response.data.data)
      localStorage.setItem('userlogged',JSON.stringify(response.data.data))
      //Shows success message only if the login attempt is successful
      alert('Login successful!')
      navigate('/home') //homepage connect after sucessful login 
    }catch(error){
      //if the login fails,show an alert popup message for invalid email
      alert('Invalid email or Password... Please try again ...')
    }
  }
  return (
    <div>
      <form>
        <h3>Login</h3>
        <label>email:</label>
        <input type="email" name="email" placeholder="Enter your emial" 
        onChange={(e) => setEmail(e.target.value)} />
        <label>Password:</label>
        <input type="password" name="password" placeholder="Enter your password" 
        onChange={(e) => setPassword(e.target.value)} />
        <button onClick= {LoginUser} type="submit">Login</button>
        <div className='login-link'>
          Don't have an account? 
          <Link to="/">Register</Link>
        </div>
      </form>
    </div>
    
  )
}
