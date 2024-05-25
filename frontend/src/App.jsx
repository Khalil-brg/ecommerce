import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './Login'
import Home from './Home'
import Shopping from './pages/Shopping'
import Cart from './pages/Cart'
import Dashboard from './pages/Dashboard'

function App() {
 
  

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/shopping' element={<Shopping/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
