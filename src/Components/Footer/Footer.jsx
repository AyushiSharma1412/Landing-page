import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import { Twitter, Facebook, LinkedIn } from '@mui/icons-material';
import nurenailogo from "../../assets/nurenailogo.png";
import { trackEvent } from '../../Ga'; // Import the trackEvent function

const Footer = () => {

  const handleLinkClick = (category, label) => {
    trackEvent('Footer', 'Link Click', `${category} - ${label}`);
  };

  return (
    <Box component="footer" sx={{ bgcolor: '#f5f5f5', py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              <img style={{height:'50%', width:'50%'}} src={nurenailogo} alt="" />
            </Typography>
            <Typography variant="body1" gutterBottom>
              3rd Floor, Property No. 44, Regal Building, Connaught Place <br />
              110001 <br />
              New Delhi, India
            </Typography>
            <Box display="flex" alignItems="center">
              <Link href="#" color="inherit" sx={{ mr: 1 }} onClick={() => handleLinkClick('Social', 'Twitter')}>
                <Twitter />
              </Link>
              <Link href="#" color="inherit" sx={{ mr: 1 }} onClick={() => handleLinkClick('Social', 'Facebook')}>
                <Facebook />
              </Link>
              <Link href="#" color="inherit" sx={{ mr: 1 }} onClick={() => handleLinkClick('Social', 'LinkedIn')}>
                <LinkedIn />
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <Link href="#" variant="body1" underline="none" onClick={() => handleLinkClick('Company', 'Features')}>
                  Features
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body1" underline="none" onClick={() => handleLinkClick('Company', 'Pricing')}>
                  Pricing
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body1" underline="none" onClick={() => handleLinkClick('Company', 'About Us')}>
                  About Us
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body1" underline="none" onClick={() => handleLinkClick('Company', 'Contact')}>
                  Contact
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body1" underline="none" onClick={() => handleLinkClick('Company', 'Pricing')}>
                  Pricing
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Resource
            </Typography>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <Link href="#" variant="body1" underline="none" onClick={() => handleLinkClick('Resource', 'Blog')}>
                  Blog
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body1" underline="none" onClick={() => handleLinkClick('Resource', 'Customer Stories')}>
                  Customer Stories
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body1" underline="none" onClick={() => handleLinkClick('Resource', 'Information')}>
                  Information
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body1" underline="none" onClick={() => handleLinkClick('Resource', 'Legal')}>
                  Legal
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body1" underline="none" onClick={() => handleLinkClick('Resource', 'Payments')}>
                  Payments
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Career
            </Typography>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <Link href="#" variant="body1" underline="none" onClick={() => handleLinkClick('Career', 'Jobs')}>
                  Jobs
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body1" underline="none" onClick={() => handleLinkClick('Career', 'Hiring')}>
                  Hiring
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body1" underline="none" onClick={() => handleLinkClick('Career', 'News')}>
                  News
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body1" underline="none" onClick={() => handleLinkClick('Career', 'Tips & Tricks')}>
                  Tips &amp; Tricks
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justifyContent="space-between" alignItems="center" sx={{ mt: 4 }}>
          <Grid item>
            <Typography variant="h6" gutterBottom>
              Help
            </Typography>
            <Grid container direction="row" spacing={2}>
              <Grid item>
                <Link href="#" variant="body1" underline="none" onClick={() => handleLinkClick('Help', 'FAQ')}>
                  FAQ
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body1" underline="none" onClick={() => handleLinkClick('Help', 'Help Center')}>
                  Help Center
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body1" underline="none" onClick={() => handleLinkClick('Help', 'Support')}>
                  Support
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="body1">2024 &copy; All Rights Reserved</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
