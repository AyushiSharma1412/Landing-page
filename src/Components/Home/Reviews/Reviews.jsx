import React from 'react';
import { Typography, Avatar, Rating, Card, Box, Chip } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';
import person from '../../../assets/person.png';
import { trackEvent } from '../../../Ga'; // Import the trackEvent function from your GA setup

const Reviews = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleReadReviewsClick = () => {
    // Track event when 'Read the full reviews' is clicked
    trackEvent('Reviews', 'Read Reviews Click');
    
    // Add your redirection logic here
    window.location.href = 'https://your-redirect-url.com'; // Replace with your actual URL
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold', color: 'text.secondary' }}>
        REVIEWS
      </Typography>
      <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
        10,000+ businesses from 120 <br /> countries choose Respondo for their <br /> practice
      </Typography>
      <Card
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          p: 2,
          mt: 4,
          maxWidth: 800,
          mx: 'auto',
          boxShadow: '0px 20px 50px -10px rgba(0, 0, 0, 0.2);',
        }}
      >
        <Avatar
          alt="Avatar"
          src={person}
          sx={{
            width: { xs: '100%', md: 330 },
            height: { xs: 'auto', md: 350 },
            borderRadius: '0%',
            marginRight: { md: 5 },
            marginBottom: { xs: 2, md: 0 },
          }}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, flexWrap: 'wrap' }}>
            <Chip
              label="Customer Service"
              sx={{
                backgroundColor: '#e6f4ea',
                color: '#137333',
                fontWeight: 'bold',
                mr: 1,
                mb: { xs: 1, md: 0 },
              }}
            />
            <Chip
              label="Sales"
              sx={{
                backgroundColor: '#e1f5fe',
                color: '#0654ba',
                fontWeight: 'bold',
                mr: 1,
                mb: { xs: 1, md: 0 },
              }}
            />
            <Chip
              label="Marketing"
              sx={{
                backgroundColor: '#feedf3',
                color: '#9b2976',
                fontWeight: 'bold',
                mb: { xs: 1, md: 0 },
              }}
            />
          </Box>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ fontStyle: 'italic', fontWeight: 'bold', mb: 2 }}
          >
            This CRM is a game-changer for our business. Intuitive interface, powerful automation, and top-notch support. Highly recommend.
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ fontStyle: 'italic', mb: 2 }}
          >
            "Within the first year, we witnessed a 30% reduction in support ticket volume as more customers utilized the knowledge base."
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{ fontWeight: 'bold', color: 'text.primary' }}
          >
            - Grace Nelson, COO at TravelWise
          </Typography>
          <Rating
            name="rating"
            value={5}
            precision={1}
            readOnly
            size="small"
            sx={{ mb: 2 }}
          />
          <Typography
            variant="body2"
            sx={{ fontWeight: 'bold', color: 'primary.main', cursor: 'pointer' }}
            onClick={handleReadReviewsClick}
          >
            Read the full reviews
          </Typography>
        </Box>
      </Card>
    </div>
  );
};

export default Reviews;
