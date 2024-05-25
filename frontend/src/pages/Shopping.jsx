import React, { useState , useEffect} from 'react';
import {useSelector } from 'react-redux';
import axios from 'axios';
import Product from '../components/Product';
import './Shopping.css'

function Shopping(props) {
    const [products,setProducts]=useState("");
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData=async()=>{
        try{
            const response=await 
            axios.get("http://localhost:8001/dash")
            setProducts(response.data);
        }catch(error){
            console.error('Error fetching data:',error);
        };
        console.log(products);  
    }
    return (
        <>
        <h1 className='title'>Products</h1>
        <div className='grid-container'>
             {products?products.map((products,index)=>(
                <Product key={index} products={products}/>
            )):""}
            
        </div>
        </>
    );
}

export default Shopping;