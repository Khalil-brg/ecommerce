import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css'

function Dashboard() {
    const [pname,setPname]=useState("");
    const [price,setPrice]=useState("");
    const [photo,setPhoto]=useState("");
    const[order,setOrder]=useState("");
    const [image,setImage]=useState("");
    const [newpmode,setNewpmode]=useState(false);

    function previewfile(photo){
        const reader = new FileReader();
        reader.readAsDataURL(photo)

        reader.onloadend=()=>{
        setImage(reader.result);
        }
    }
    const handleChange=(e)=>{
        const photo = e.target.files[0];
        setPhoto(photo);
        previewfile(photo)
    }

    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData=async()=>{
        try{
            const response=await 
            axios.get("http://localhost:8001/cart")
            setOrder(response.data);
        }catch(error){
            console.error('Error fetching data:',error);
        };
        console.log(order);  
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8001/dash',{pname,price,image})
        .then(result=>console.log(result))
        alert("product uploaded succesfully")
        .catch(err=>console.log(err))
    }
    const handleAdd=()=>{
      setNewpmode(true);
    }

    return (
        <div className='main-container'>
          <h1>Welcome Admin</h1>
        <div className='orders'>
            <h1>Orders</h1>
            <ul class="item-list">
               {order?order.map((item,index)=>(
                <li key={index}><p>{item.order}</p><br />
                <p>phone number:{item.phone}</p><br />
                <p>city:{item.city}</p></li>
               )):""}
            </ul>  
        </div>
        
        {newpmode? <div className='new-item'>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <label htmlFor="Product-name">
              <strong>Product name</strong>
            </label>
            <input type="text" 
             value={pname}
            placeholder="Enter name"
            className="form-control rounded-0"
            onChange={(e)=>{setPname(e.target.value)}}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Price">
              <strong>Price</strong>
            </label>
            <input type="Number" 
             value={price}
            placeholder="Enter price"
            className="form-control rounded-0"
            onChange={(e)=>{setPrice(e.target.value)}}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="photo">
              <strong>Photo</strong>
            </label>
            <input type="file" 
            placeholder="upload photo"
            className="form-control rounded-0"
            onChange={(e)=>handleChange(e)}
            />
          </div>
          <input type="submit" value="ADD NEW PRODUCT"
            className="btn btn-success w-100 rounded-0" />
            </form>
        </div>:<input type="button" value="Add Product?" onClick={handleAdd} />}

       
        </div>
    );
}

export default Dashboard;