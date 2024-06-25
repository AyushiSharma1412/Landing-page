import React, { useState } from 'react';
import './Strength.css';
import strengthImage from '../../../assets/strengthImage.png';
import { Button, ButtonGroup, TextField, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../../FormContext';
import Navbar2 from '../../Navbar2/Navbar2';

function Strength() {
  const [teamSize, setTeamSize] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [manualInput, setManualInput] = useState('');
  const [inputError, setInputError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { formData, setFormData } = useForm();
  const navigate = useNavigate();

  
  const handleTeamSizeChange = (size) => {
    setTeamSize(size);
    setShowInput(false);
    setManualInput('');
    setInputError(false);
    setErrorMessage('');
  };
  const handleManualInput = (e) => {
    setManualInput(e.target.value);
    setInputError(false);
    setErrorMessage('');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let strengthValue = teamSize;

    if (showInput) {
      if (!manualInput.trim()) {
        setInputError(true);
        setErrorMessage('Team strength is required');
        return;
      }
      if (isNaN(manualInput.trim())) {
        setInputError(true);
        setErrorMessage('Team strength must be a number');
        return;
      }
      strengthValue = manualInput.trim();
    }

    if (strengthValue) {
      setFormData({ ...formData, teamStrength: strengthValue });
      navigate('/hosted');
    } else {
      setInputError(true);
      setErrorMessage('Please enter team strength.');
    }
  };

  return (
    <div className="strength-container">
      <Navbar2/>
      <div className="form-wrapper">
        <div className="form-container">
          <h2>Your Team Strength?</h2>
          <p>Deserunt quis quisilabore labore laboremodiialiqua in minimculpairure dolore cupamollit verum edit consequat eua consequat volouptate?</p>
          <div className="team-size-buttons">
            <ButtonGroup variant="outlined" aria-label="outlined button group">
              <Button
                onClick={() => handleTeamSizeChange('1-2')}
                style={{
                  borderColor: teamSize === '1-2' ? '#6D31EDFF' : 'inherit',
                  borderRadius: '20px',
                  margin: '0 4px',
                  backgroundColor: teamSize === '1-2' ? '#e0e0e0' : 'inherit',
                }}
              >
                1-2
              </Button>
              <Button
                onClick={() => handleTeamSizeChange('3-5')}
                style={{
                  borderColor: teamSize === '3-5' ? '#6D31EDFF' : 'inherit',
                  borderRadius: '20px',
                  margin: '0 4px',
                  backgroundColor: teamSize === '3-5' ? '#e0e0e0' : 'inherit',
                }}
              >
                3-5
              </Button>
              <Button
                onClick={() => handleTeamSizeChange('7-15')}
                style={{
                  borderColor: teamSize === '7-15' ? '#6D31EDFF' : 'inherit',
                  borderRadius: '20px',
                  margin: '0 4px',
                  backgroundColor: teamSize === '7-15' ? '#e0e0e0' : 'inherit',
                }}
              >
                7-15
              </Button>
              <Button
                onClick={() => setShowInput(true)}
                style={{
                  borderColor: showInput ? '#6D31EDFF' : 'inherit',
                  borderRadius: '20px',
                  margin: '0 4px',
                  backgroundColor: showInput ? '#e0e0e0' : 'inherit',
                }}
              >
                Enter a number
              </Button>
            </ButtonGroup>
          </div>
          {showInput && (
            <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
              <TextField
                label="Enter Team Size"
                variant="standard"
                value={manualInput}
                onChange={handleManualInput}
                fullWidth
                margin="normal"
                error={inputError}
                helperText={inputError ? errorMessage : ''}
                sx={{ backgroundColor: '#fff' }}
              />
            </Box>
          )}
          <div className="strength-button-container">
            <Button
              type="button"
              variant="outlined"
              color="primary"
              style={{ marginTop: '1rem', marginRight: '1rem', width: '10rem', borderColor: 'black', color: 'black', borderRadius: '20px' }}
              onClick={() => navigate('/hosted')}
            >
              Skip for now
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginTop: '1rem', width: '10rem', backgroundColor: '#6D31EDFF', borderRadius: '20px' }}
              onClick={handleSubmit}
            >
              NEXT
            </Button>
          </div>
        </div>
      </div>
      <div className="illustration-container">
        <img src={strengthImage} alt="Illustration" />
      </div>
    </div>
  );
}

export default Strength;
