import React from 'react';
import { Box, Container, Typography } from '@mui/material';
// import videoThumbnail from './video-thumbnail.jpg'; // Replace with your actual image path
import './VideoComponent.css'

const VideoComponent = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom sx={{ color: 'black' }}>
        You wanna know how we makes  better customer experience ??
        </Typography>
        <Box mt={4}>
          <div className='videobackground' style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden'}}>
            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID"
              frameBorder="0"
              allowFullScreen
              style={{
                position: 'absolute',
                borderRadius:'10px',
                width: '100%',
                height: '100%',
                background: `url(${'https://www.techsmith.com/blog/wp-content/uploads/2021/02/TSC-thumbnail-example-1024x576.png'}) no-repeat center center / cover`,
              }}
            />
          </div>
          <Typography variant="body1" align="center" marginTop='3rem' gutterBottom sx={{ color: '#666666' }}>
          Our AI-integrated CRM streamlines customer management by automating tasks, providing insights, enhancing interactions, and personalizing experiences. It boosts efficiency, sales, and relationships through machine learning and predictive analytics in a user-friendly platform.
        </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default VideoComponent;