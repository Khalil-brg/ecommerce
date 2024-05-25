import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Home.css';

function Home(props) {
  const navigate=useNavigate();
  let handleClick=()=>{
    navigate('/shopping')
  }

  return (
    <div className="main-grid">
      
      <div className="lower"><input type="button" value="Shop Now" onClick={()=>handleClick()}  /></div>
    </div>
  );
}

export default Home;
