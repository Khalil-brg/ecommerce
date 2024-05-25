import React from 'react';
import { actions } from '../Store/Store';
import { useDispatch } from 'react-redux';
import './Product.css';


function Product({products}) {
    let dispatch = useDispatch();
    let handleAdd=()=>{
        dispatch(actions.handleAdd(products));
    }
    const imageUrl=products.image.url;
    return (
        <div className='produit'>
            <img className='img' src={imageUrl} alt="" />
            <div><p className='product-name'>{products.pname}</p>
            <p className='price'>{products.price}DZD</p></div>
             
            <input className='button' type="button" value="Add to cart" onClick={()=>handleAdd()} />
            
        </div>
    );
}

export default Product;