import { configureStore, createSlice } from "@reduxjs/toolkit";
import Cart from "../pages/Cart";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


const addSlice = createSlice({
    name: "lister",
    initialState: {
      shoplister: [
        { id: 1, name: "PC", price: "200" },
        { id: 2, name: "Camera", price: "150" },
        { id: 3, name: "Microphone", price: "70" },
        { id: 4, name: "SoundSpeaker", price: "450" },
      ],
      cart: [],
    },
  
    reducers: {
      handleAdd(state, action) {
        let itemtoAdd = action.payload;
        state.cart.push({
          image:itemtoAdd.image.url,
          pname: itemtoAdd.pname,
          price: itemtoAdd.price
        });
      },
      handleDelete(state, action) {
        let id = action.payload;
        state.cart=state.cart.filter((item)=>item.id !==id);
      },
    },
    
  });
  export const actions = addSlice.actions;
  const store = configureStore({
    reducer: { lister: addSlice.reducer },
  });
  
  export default store;
  