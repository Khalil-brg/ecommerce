import React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../Store/Store';


function Cartitem({product}) {
    let dispatch = useDispatch();
    let handleDelete=()=>{
        dispatch(actions.handleDelete(product.id));
    }
    

    return (
        <div>
            <img src={product.image} alt="" />
             <p>{product.pname}</p>
            <p>{product.price}</p>
            <input type="button" value="delete" onClick={()=>handleDelete()} />   
        </div>
    );
}

export default Cartitem;