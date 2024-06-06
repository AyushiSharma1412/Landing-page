import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import { Twitter, Facebook, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#f5f5f5', py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Logo
            </Typography>
            <Typography variant="body1" gutterBottom>
              7777 West Street, Virginia Beach, VA <br />
              23451 <br />
              USA
            </Typography>
            <Box display="flex" alignItems="center">
              <Link href="#" color="inherit" sx={{ mr: 1 }}>
                <Twitter />
              </Link>
              <Link href="#" color="inherit" sx={{ mr: 1 }}>
                <Facebook />
              </Link>
              <Link href="#" color="inherit" sx={{ mr: 1 }}>
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
                <Link href="#" variant="body1" underline="none">
                  Features
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body1" underline="none">
                  Pricing
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body1" underline="none">
                  About Us
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body1" underline="none">
                  Contact
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body1" underline="none">
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
                <Link href="#" variant="body1" underline="none">
                  Blog
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body1" underline="none">
                  Customer Stories
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body1" underline="none">
                  Information
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body1" underline="none">
                  Legal
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body1" underline="none">
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
                <Link href="#" variant="body1" underline="none">
                  Jobs
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body1" underline="none">
                  Hiring
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body1" underline="none">
                  News
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body1" underline="none">
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
                <Link href="#" variant="body1" underline="none">
                  FAQ
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body1" underline="none">
                  Help Center
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body1" underline="none">
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