import React, { useRef } from 'react';
import HeroSection from '../../Components/Home/HeroSection/HeroSection';
import VideoComponent from '../../Components/Home/VideoComp/VideoComponent';
import Cards from '../../Components/Home/Cards/Cards';
import Reviews from '../../Components/Home/Reviews/Reviews';
import CustomerReviews from '../../Components/Home/CustReview/CustomerReview';
import Pricing from '../../Components/Home/Pricing/Pricing';
import ContactUs from '../../Components/Home/Contact/ContactUs';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer'
import './Home.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="features">
        <VideoComponent />
      </div>
      <div id="solutions">
        <Cards />
      </div>
      <div id="reviews">
        <Reviews />
      </div>
      <div id="about-us">
        <CustomerReviews />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
