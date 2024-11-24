import React from 'react';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import ServicesSection from '../components/Services';
import Reviews from '../components/Reviews';
import ServiceArea from '../components/ServiceArea';

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <ServicesSection />
      <Reviews />
      <ServiceArea />
    </>
  );
}