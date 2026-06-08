import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';

// Components
import Navbar from './components/Navbar';
import {Hero} from './components/Hero';
import {BrandStrip} from './components/BrandStrip';
import {Categories} from './components/Categories';
import {FeaturedProducts} from './components/FeaturedProducts';
import {ProductCard} from './components/ProductCard';
import {EditorialBanner} from './components/EditorialBanner';
import {Testimonials} from './components/Testimonials';
import {Footer} from './components/Footer';

// Pages
import Home from './pages/Home';
import {Shop} from './pages/Shop';
import {Collections} from './pages/Collections';
import {About} from './pages/About';

export default function App() {
  return (
      <>
        {/* Navbar is present on all pages */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/about" element={<About />} />
        </Routes>

        {/* Footer is present on all pages */}
        <Footer />
      </>
  );
}

// Exporting components for documentation purposes
export {
  Navbar,
  Hero,
  BrandStrip,
  Categories,
  FeaturedProducts,
  ProductCard,
  EditorialBanner,
  Testimonials,
  Footer,
};