import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Containers/Home/Home'
import Login from "../Containers/Login/Login"
import Register from '../Containers/Register/Register'
import LostPassword from '../Containers/LostPassword/LostPassword'

const Routes1 = () => {
 
    return (
    <Routes>
     <Route  path="/" element={<Home />}/>
     <Route  path="/login" element={<Login />}/>
     <Route  path="/register" element={<Register />}/>
     <Route  path="/lostpassword" element={<LostPassword />}/>
    </Routes>
    
  )
}

export default Routes1