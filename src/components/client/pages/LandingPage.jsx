import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import RolesSection from '../components/RolesSection';
import FeaturesTags from '../components/FeaturesTags';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="app-container">
      <Navbar />
      <HeroSection />
      <RolesSection />
      <FeaturesTags />
      <Footer />
    </div>
  );
};

export default LandingPage;
