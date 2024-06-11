import axios from 'axios';
import React, { useState } from 'react'
import './Contactpage.css'


export default function ContactPage() {
  const [formData,setFormData] = useState({
    name:'',
    email:'',
    feedback:''
  });

  const {name,email,feedback}=formData;

  const handleChange = (e) =>{
    setFormData({...formData,[e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      await axios.post('http://localhost:3000/api/v1/contact',formData);
      alert('Feedback submitted successfully');
      setFormData({
        name :'',
        email:'',
        feedback:''
      });
    }catch(error){
      console.error('Error submitting feedback:',error);
      alert('Error submitting feedback');
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
       <div>
         <h3>Contact Us</h3>
        <label>Name:</label>
        <input type="text"
          name="name" placeholder="Enter your name" onChange={handleChange} required />
        <label>Email:</label>
        <input type="email" name="email" placeholder="Enter your email" onChange={handleChange}  required/>
        </div>
        <label>Feedback:</label>
        <textarea name="feedback" placeholder="Enter your feedback" value={feedback} onChange={handleChange}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
