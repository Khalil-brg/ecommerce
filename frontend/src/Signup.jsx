import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] =useState('');
  const [email, setEmail] =useState('');
  const [password, setPassword ]=useState('');
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:8001/register',{name,email,password})
    .then(result=>console.log(result))
    navigate('/home')
    .catch(err=>console.log(err))
  }
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondar vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="Email">
              <strong>Name</strong>
            </label>
            <input type="text" 
             value={name}
            placeholder="Enter name"
            className="form-control rounded-0"
            onChange={(e)=>{setName(e.target.value);}}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Email">
              <strong>Email</strong>
            </label>
            <input type="email" 
             value={email}
            placeholder="Enter email"className="form-control rounded-0"
            onChange={(e)=>{setEmail(e.target.value);}} />
          </div>
          <div className="mb-3">
            <label htmlFor="Email">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              value={password}
              placeholder="Enter password"
              className="form-control rounded-0"
              onChange={(e)=>{setPassword(e.target.value);}}
            />
          </div>
          <input type="submit" value="Register"
            className="btn btn-success w-100 rounded-0" />
        </form>
        <p>Alredy have an accout ?</p>
        <Link
          to="/login"
          className="btn btn-default order w-100 bg-light rounded-0 text-decoration-none"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Signup;
