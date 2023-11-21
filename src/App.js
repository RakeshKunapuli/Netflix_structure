import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from './NetflixClone/Navbar/Navbar.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './NetflixClone/Loginpage/Login.js';
import Accounts from './NetflixClone/Accounts/Accounts.js';
import Home from './NetflixClone/Home/Home.js';
import { useState } from 'react';
import Video from './NetflixClone/Videos/Video.js';
import { useSelector } from 'react-redux';



function App() {

   const isLoggedInAut = useSelector((state) => state.isLoggedIn);
   let [isLoggedIn, setisLoggedIn] = useState(isLoggedInAut)

   // Update local storage whenever isLoggedIn changes
   React.useEffect(() => {
     localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedInAut));
   }, [isLoggedInAut]);

  return (
   <>
   <BrowserRouter>
   <Routes>
      <Route path='/' element={<Login isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}/>} />
      <Route path='/accounts' element={isLoggedIn === true ? <Accounts/> : <Navigate to={'/'}/> }/>
      <Route path='/home' element={isLoggedIn === true ? <Home setisLoggedIn={setisLoggedIn}/> : <Navigate to={'/'}/>}/>
      <Route path='/videos' element={isLoggedIn === true ? <Video/> : <Navigate to={'/'}/>}/>
      <Route path='*' element={<h1>404 page Not found</h1>}/>
</Routes>
</BrowserRouter>
   </>
  )
}

export default App;
