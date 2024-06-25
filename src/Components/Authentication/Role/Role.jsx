import React, { useState } from 'react';
import './Role.css';
import roleImage from '../../../assets/roleImage.png';
import { Select, MenuItem, Button, Box, FormControl, InputLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../../FormContext';
import Navbar2 from '../../Navbar2/Navbar2';

function Role() {
  const [jobRole, setJobRole] = useState('');
  const [roleError, setRoleError] = useState(false);
  const { formData, setFormData } = useForm();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!jobRole) {
      setRoleError(true);
    } else {
      setRoleError(false);
      setFormData({ ...formData, jobRole });
      navigate('/strength');
    }
  };

  return (
    <div className="role-container">
      <Navbar2/>
      <div className="form-wrapper">
        <div className="form-container">
          <h2>What is your Role?</h2>
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
            <FormControl fullWidth margin="normal" error={roleError}>
              <InputLabel>Select the Job role</InputLabel>
              <Select
                value={jobRole}
                onChange={(e) => setJobRole(e.target.value)}
                displayEmpty
                sx={{ backgroundColor: '#fff', borderRadius: '30px' }}
              >
                {/* <MenuItem value="">Select the Job role</MenuItem> */}
                <MenuItem value="manager">Manager</MenuItem>
                <MenuItem value="developer">Developer</MenuItem>
                <MenuItem value="designer">Designer</MenuItem>
              </Select>
              {roleError && (
                <Box component="p" color="error.main" mt={1} textAlign="left">
                  Job role is required
                </Box>
              )}
            </FormControl>
            <div className="role-button-container">
              <Button
                type="button"
                variant="outlined"
                color="primary"
                style={{ borderRadius: '20px', marginTop: '1rem', marginRight: '1rem', width: '10rem', borderColor: 'black', color: 'black' }}
                onClick={() => navigate('/strength')}
              >
                Skip for now
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ marginTop: '1rem', width: '10rem', backgroundColor: '#6D31EDFF', borderRadius: '20px' }}
              >
                NEXT
              </Button>
            </div>
          </Box>
        </div>
      </div>
      <div className="illustration-container">
        <img src={roleImage} alt="Illustration" />
      </div>
    </div>
  );
}

export default Role;
