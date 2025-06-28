import React from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from "../pages/HomePage"
import About from "../pages/About"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Contact from '../pages/Contact'
import Bot from "../component/bot/Bot"

function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/bot' element={<Bot />} />
            
        </Routes>
    );
};

export default AppRoutes