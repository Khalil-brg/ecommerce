import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8001/login", { email, password })
      .then(result =>{
        console.log(result)
        if(result.data==="Succes"){
          navigate('/home')  
        }else if(result.data==="admin"){
          navigate('/dashboard')
        }
    })

    .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondar vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="Email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              value={email}
              placeholder="Enter email"
              className="form-control rounded-0"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
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
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <input
            type="submit"
            value="Login"
            className="btn btn-success w-100 rounded-0"
          />
        </form>
        <p>You don't have an accout ?</p>
        <Link
          to="/"
          className="btn btn-default order w-100 bg-light rounded-0 text-decoration-none"
        >
          Register
        </Link>
      </div>
    </div>
  );
}

export default Login;
