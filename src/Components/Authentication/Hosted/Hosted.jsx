import React, { useState } from 'react';
import './Hosted.css';
import hostedImage from '../../../assets/hostedImage.png';
import { TextField, Select, MenuItem, Button, Box, FormControl, InputLabel } from '@mui/material';
import Navbar2 from '../../Navbar2/Navbar2';
import { useForm } from '../../../FormContext';

function Hosted() {
  const [location, setLocation] = useState('');
  const [manualInput, setManualInput] = useState('');
  const [locationError, setLocationError] = useState(false);
  const { formData, setFormData, saveFormDataToFirestore } = useForm();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let hostedLocation = location;

    if (location === 'others' && manualInput.trim() !== '') {
      hostedLocation = manualInput.trim();
    }

    if (hostedLocation) {
      const updatedFormData = { ...formData, hostedLocation };
      setFormData(updatedFormData);
      try {
        await saveFormDataToFirestore();
        // window.location.href = 'https://crm.nuren.ai/';
      } catch (error) {
        console.error('Error saving form data: ', error);
      }
    } else {
      setLocationError(true);
    }
  };

  return (
    <div className="hosted-container">
      <Navbar2 />
      <div className="form-wrapper">
        <div className="form-container">
          <h2>Where will the data be hosted?</h2>
          <p>Deserunt quis quisilabore labore laboremodiialiqua in minimculpairure dolore cupamollit verum edit consequat eua consequat volouptate?</p>
          <Box
            component="form"
            onSubmit={handleSubmit}
            className="form-box"
            sx={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '8px',
              padding: '2rem',
            }}
          >
            <FormControl fullWidth margin="normal" error={locationError}>
              <InputLabel>Where would you like to host?</InputLabel>
              <Select
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                  setLocationError(false);
                }}
                displayEmpty
                sx={{ backgroundColor: '#fff', borderRadius: '30px' }}
              >
                <MenuItem value="location1">Location 1</MenuItem>
                <MenuItem value="location2">Location 2</MenuItem>
                <MenuItem value="location3">Location 3</MenuItem>
                <MenuItem value="others">Others</MenuItem>
              </Select>
              {locationError && (
                <Box component="p" color="error.main" mt={1}>
                  Location is required
                </Box>
              )}
            </FormControl>
            {location === 'others' && (
              <TextField
                label="Enter manually"
                variant="standard"
                value={manualInput}
                onChange={(e) => {
                  setManualInput(e.target.value);
                  setLocationError(false);
                }}
                fullWidth
                margin="normal"
                sx={{ backgroundColor: '#fff' }}
                error={manualInput.trim() === ''}
                helperText={manualInput.trim() === '' ? 'Location is required' : ''}
              />
            )}
            <div className="hosted-button-container">
              <Button
                type="button"
                variant="outlined"
                color="primary"
                style={{ marginTop: '1rem', marginRight: '1rem', width: '10rem', borderColor: 'black', color: 'black', borderRadius: '20px' }}
                onClick={() => {
                  window.location.href = 'https://crm.nuren.ai/';
                }}
              >
                Skip for now
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ marginTop: '1rem', width: '10rem', backgroundColor: '#6D31EDFF', borderRadius: '20px' }}
              >
                Next & Finish
              </Button>
            </div>
          </Box>
        </div>
      </div>
      <div className="illustration-container">
        <img src={hostedImage} alt="Illustration" />
      </div>
    </div>
  );
}

export default Hosted;
