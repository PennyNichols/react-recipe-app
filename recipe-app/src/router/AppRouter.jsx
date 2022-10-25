import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import About from '../pages/about/About'
import Details from '../pages/details/Details'



const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/details' element={<Details/>} />
    </Routes>
  )
}

export default AppRouter
