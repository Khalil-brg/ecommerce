import React, { useState } from "react";
import { useSelector } from "react-redux";
import { actions } from "../Store/Store";
import { useDispatch } from "react-redux";
import axios from "axios";
import Cartitem from "../components/Cartitem";
import './Cart.css';

function Cart() {
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const cart = useSelector((state) => state.lister.cart);
  let dispatch = useDispatch();
  let handleConfirm = () => {
    const order=JSON.stringify(cart)
    axios.post('http://localhost:8001/cart',{order,phone,city})
    .then(result=>console.log(result))
  };
  return (
    <div>
      <div className="grid">
        {cart
          ?cart.map((product, index) => (
              <Cartitem key={index} product={product} />
            ))
          : ""}
      </div>
      <div className="form">
        
      <label htmlFor="">Phone Number:</label>
      <input type="number" 
      name="phone number" 
      id=""
      onChange={(e)=>{setPhone(e.target.value)}} />
      <label htmlFor="">City:</label>
      <input 
      type="text" 
      name="city" 
      id=""
      onChange={(e)=>{setCity(e.target.value)}} />
      <input
        type="button"
        value="confirm order"
        onClick={(e) => handleConfirm()}
      /></div>
      </div>
    
  );
}

export default Cart;
