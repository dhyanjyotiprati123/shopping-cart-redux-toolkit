import React from 'react';
import "./style/main.css";
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div>
      <Navbar />
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </>
    </div>
  )
}

export default App
