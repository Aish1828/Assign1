import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';

import Navbar from './Components/Navbar';
import { Footer } from './Components/Footer';

import Home from './Pages/Home';
import { Shop } from './Pages/Shop';
import { Collections } from './Pages/Collections';
import { About } from './Pages/About';
import { AddProduct } from './Pages/AddProduct';
import Products from './Pages/Products';

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/about" element={<About />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/products" element={<Products />} />
      </Routes>

      <Footer />
    </>
  );
}
