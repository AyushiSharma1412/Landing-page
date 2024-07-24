import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import './VideoComponent.css';
import { trackEvent } from '../../../Ga'; // Import the trackEvent function

const VideoComponent = () => {
  const handleVideoPlay = () => {
    // Track event when the video is played
    trackEvent('VideoComponent', 'Video Play', 'Video Started');
  };

  const handleButtonClick = () => {
    // Track event when a button is clicked
    trackEvent('VideoComponent', 'Button Click', 'Learn More Button Clicked');
    // Add additional actions as needed
  };

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom sx={{ color: 'black' }}>
          You wanna know how we make a better customer experience?
        </Typography>
        <Box mt={4}>
          <div className='videobackground' style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden'}}>
            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID"
              frameBorder="0"
              allowFullScreen
              title="Video Player"
              onClick={handleVideoPlay} // Track video play event
              style={{
                position: 'absolute',
                borderRadius: '10px',
                width: '100%',
                height: '100%',
                background: `url(${'https://www.techsmith.com/blog/wp-content/uploads/2021/02/TSC-thumbnail-example-1024x576.png'}) no-repeat center center / cover`,
              }}
            />
          </div>
          <Typography variant="body1" align="center" marginTop='3rem' gutterBottom sx={{ color: '#666666' }}>
            Our AI-integrated CRM streamlines customer management by automating tasks, providing insights, enhancing interactions, and personalizing experiences. It boosts efficiency, sales, and relationships through machine learning and predictive analytics in a user-friendly platform.
          </Typography>
          <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleButtonClick} // Track button click event
              sx={{ borderRadius: '2rem', textTransform: 'none', background:'#6D31EDFF', backgroundColor:'#6D31EDFF' }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default VideoComponent;
