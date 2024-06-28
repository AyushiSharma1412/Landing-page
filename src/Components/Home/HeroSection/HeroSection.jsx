import React from 'react';
import { Button, Grid, Typography, useMediaQuery } from '@mui/material';
import './HeroSection.css';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import adobe from '../../../assets/adobe.png';
import google from '../../../assets/google.png';
import canva from '../../../assets/canva.png';
import audi from '../../../assets/audi.png';
import dropbox from '../../../assets/dropbox.png';
import EastIcon from '@mui/icons-material/East';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AV1 from '../../../assets/AV1.png';
import AV2 from '../../../assets/AV2.png';
import AV3 from '../../../assets/AV3.png';
import ThreeModel from '../3DModel/ThreeModel';

const HeroSection = () => {
  const isSmallScreen = useMediaQuery('(max-width:900px)');

  const handleViewDemoClick = () => {
    const featuresSection = document.getElementById('features');
    featuresSection.scrollIntoView({ behavior: 'smooth' });
    // Track view demo button click event
    window.gtag('event', 'view_demo_clicked', {
      event_category: 'engagement',
      event_label: 'View Demo Button Clicked',
    });
  };
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: 'linear',
    autoplaySpeed: 0,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const logos = [
    { src: adobe, alt: 'Adobe' },
    { src: dropbox, alt: 'Dropbox' },
    { src: google, alt: 'Google' },
    { src: audi, alt: 'Audi' },
    { src: canva, alt: 'Canva' },
  ];

  const trackLogoCarouselClick = (index) => {
    // Track carousel logo click event
    window.gtag('event', 'carousel_logo_clicked', {
      event_category: 'engagement',
      event_label: `Logo ${index + 1} Clicked`,
    });
  };

  return (
    <div className="hero-section">
      <div className='hero-subsection'>
        <Grid container spacing={10} alignItems='center' justifyContent='center' sx={{ py: 1, height: '80vh'}}>
          <Grid item xs={12} md={6} textAlign={isSmallScreen ? 'center' : 'left'} className="text-animation-container">
            <Typography variant="h2" gutterBottom style={{ fontSize: '45px', fontWeight: '700' }}>
              Revolutionize Your Customer Relationships
            </Typography>
            <Typography variant="body1" gutterBottom style={{ width: isSmallScreen ? 'auto' : '30rem', marginTop: '2rem', marginBottom: '2rem' }}>
              Unlock the power of AI to boost productivity, automate processes, and deliver personalized experiences.
            </Typography>
            <Grid container spacing={2} justifyContent={isSmallScreen ? 'center' : 'flex-start'}>
              <Grid item>
                <Button
                  variant="contained"
                  sx={{ borderRadius: 10, backgroundColor: '#6D31ED' }}
                  startIcon={<EastIcon />}
                  onClick={() => {
                    // Track get started button click event
                    window.gtag('event', 'get_started_clicked', {
                      event_category: 'engagement',
                      event_label: 'Get Started Button Clicked',
                    });
                  }}
                >
                  Get started
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  sx={{ borderRadius: 10, color: '#6D31ED' }}
                  startIcon={<PlayCircleOutlineIcon />}
                  onClick={handleViewDemoClick}
                >
                  View demo
                </Button>
              </Grid>
            </Grid>
            <Typography variant="body2" color="text.secondary" marginTop={3} fontWeight={600} gutterBottom>
              <b style={{ fontSize: '25px', fontWeight: '1000', color: 'black' }}>
                <img src={AV1} alt="" />
                <img src={AV2} alt="" style={{ marginLeft: '-4px', marginRight: '-4px' }} />
                <img src={AV3} alt="" /> +10K
              </b>
              <br />
              Thousands of satisfied users
            </Typography>
          </Grid>
          {!isSmallScreen && (
            <Grid item xs={12} md={4} className="model-animation-container">
              <ThreeModel/>
            </Grid>
          )}
        </Grid>
      </div>
      <Typography variant="body2" color="text.secondary" align="center" marginBottom={3} fontWeight={600} gutterBottom>
        50+ Trusted International Companies
      </Typography>
      <div className="logo-container">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="logo-slide" onClick={() => trackLogoCarouselClick(index)}>
              <img src={logo.src} alt={logo.alt} className="logo" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroSection;
