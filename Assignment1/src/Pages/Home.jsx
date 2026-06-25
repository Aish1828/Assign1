import React from 'react';
import {Hero} from '../Components/Hero';
import {BrandStrip} from '../Components/BrandStrip';
import {Categories} from '../Components/Categories';
import {FeaturedProducts} from '../Components/Featuredproducts';
import {EditorialBanner} from '../Components/Editorialbanner';
import {Testimonials} from '../Components/Testimonials';

export default function Home() {
  return (
    <main>
      <Hero />
      <BrandStrip />
      <Categories />
      <Featuredproducts />
      <Editorialbanner />
      <Testimonials />
    </main>
  );
}
