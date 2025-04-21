import './App.css';
import Navbar from './sections/NavBar';
import HeroSection from './sections/HeroSection';
import BenefitsSection from './sections/BenefitsSection';
import ContactUsSection from './sections/ContactUs';
import PartnersSection from './sections/PartnersSection';
import InfoSection from './sections/InfoSection';
import { Toaster } from './components/ui/toaster';
import React, { useRef, useState, useEffect } from 'react';
import Footer from './sections/Footer';
import MapSection from './sections/MapSection';

export default function HomePage() {
  const reviewsSectionRef = useRef(null);
  const partnersSectionRef = useRef(null);
  const contactUsSectionRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='flex flex-col border-gray-200 bg-black '>
      <Navbar
        scrollToReviews={() => scrollToSection(reviewsSectionRef)}
        scrollToPartners={() => scrollToSection(partnersSectionRef)}
        scrollToContactUs={() => scrollToSection(contactUsSectionRef)}
      />

      <div  className= "w-full flex flex-col gap-60 lg:gap-80">
        <HeroSection scrollToContactUs={() => scrollToSection(contactUsSectionRef)} />
        <BenefitsSection />
        <MapSection />
        <PartnersSection ref={partnersSectionRef} />
        <InfoSection />
        <ContactUsSection ref={contactUsSectionRef} />
      </div>

      <Footer />
      <Toaster />
    </div>
  );
}