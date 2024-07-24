import React, { useState } from 'react';
import './Org.css';
import orgImage from '../../../assets/orgimage.png';
import { TextField, Select, MenuItem, Button, Box, FormControl, InputLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../../FormContext';
import Navbar2 from '../../Navbar2/Navbar2';
import { trackEvent } from '../../../Ga'; // Import the trackEvent function

function Org() {
  const [organizationName, setOrganizationName] = useState('');
  const [industryType, setIndustryType] = useState('');
  const [nameError, setNameError] = useState(false);
  const [industryError, setIndustryError] = useState(false);
  const { formData, setFormData } = useForm();
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();

    let valid = true;

    if (!organizationName) {
      setNameError(true);
      valid = false;
    } else {
      setNameError(false);
    }

    if (!industryType) {
      setIndustryError(true);
      valid = false;
    } else {
      setIndustryError(false);
    }

    if (valid) {
      setFormData({ ...formData, organizationName, industryType });
      navigate('/role');

      // Track form submission event
      trackEvent('OrgForm', 'Form Submit', 'Form Submitted Successfully');
    }
  };

  return (
    <div className="org-container">
      <Navbar2 />
      <div className="form-wrapper">
        <div className="form-container">
          <h2>Name of your Organisation and What Industry are you in</h2>
          <p>Deserunt quis quisisi labore labore aliqua in minim culpa irure dolore.</p>
          <Box
            component="form"
            onSubmit={handleNext}
            className="form-box"
            sx={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '8px',
              padding: '2rem',
            }}
          >
            <TextField
              label="Enter Your Organisation name"
              variant="standard"
              value={organizationName}
              onChange={(e) => setOrganizationName(e.target.value)}
              fullWidth
              margin="normal"
              error={nameError}
              helperText={nameError ? 'Organization name is required' : ''}
              FormHelperTextProps={{ style: { textAlign: 'left' } }}
            />
            <FormControl fullWidth margin="dense" error={industryError}>
              <InputLabel>Select Industry Type</InputLabel>
              <Select
                value={industryType}
                onChange={(e) => setIndustryType(e.target.value)}
                displayEmpty
                sx={{ backgroundColor: '#fff', borderRadius: '30px' }}
              >
                {/* <MenuItem value="">Select Industry Type</MenuItem> */}
                <MenuItem value="it">IT</MenuItem>
                <MenuItem value="finance">Finance</MenuItem>
                <MenuItem value="healthcare">Healthcare</MenuItem>
              </Select>
              {industryError && (
                <Box component="p" color="error.main" mt={1} textAlign="left">
                  Industry type is required
                </Box>
              )}
            </FormControl>
            <div className="org-button-container">
              <Button
                type="button"
                variant="outlined"
                color="primary"
                style={{ marginTop: '1rem', marginRight: '1rem', borderRadius: '20px', width: '10rem', borderColor: 'black', color: 'black' }}
                onClick={() => {
                  // Track 'Skip for Now' button click event
                  trackEvent('OrgForm', 'Skip Button Click', 'User Skipped for Now');
                  navigate('/role');
                }}
              >
                Skip for Now
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ marginTop: '1rem', width: '10rem', borderRadius: '20px', backgroundColor: '#6D31EDFF' }}
              >
                NEXT
              </Button>
            </div>
          </Box>
        </div>
      </div>
      <div className="illustration-container">
        <img src={orgImage} alt="Illustration" />
      </div>
    </div>
  );
}

export default Org;
