import React from 'react';
import {Hero} from '../components/Hero';
import {BrandStrip} from '../components/BrandStrip';
import {Categories} from '../components/Categories';
import {FeaturedProducts} from '../components/FeaturedProducts';
import {EditorialBanner} from '../components/EditorialBanner';
import {Testimonials} from '../components/Testimonials';

export default function Home() {
  return (
    <main>
      <Hero />
      <BrandStrip />
      <Categories />
      <FeaturedProducts />
      <EditorialBanner />
      <Testimonials />
    </main>
  );
}