import React, { useState } from 'react';
import './Pricing.css';
import { Button, Typography } from '@mui/material';
import { trackEvent } from '../../../Ga';

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(false);

  const handleToggleClick = (isMonthly) => {
    setIsMonthly(isMonthly);

    // Track toggle click event
    trackEvent('Pricing', 'Toggle Click', isMonthly ? 'Monthly' : 'Annual');
  };

  const handleGetStartedClick = (planName, planType) => {
    // Track get started button click event
    trackEvent('Pricing', 'Get Started Click', `${planName} (${planType})`);
    
    // Perform any other actions related to get started click
  };

  return (
    <div className="pricing-container">
      <Typography variant="h4" component="p" gutterBottom>
        PRICING
      </Typography>
      <Typography variant="h3" component="h1" gutterBottom>
        Choose a plan That Fits Your <br /> Needs <br /> Get it Today
      </Typography>
      <div className="pricing-actions">
        <Button
          variant="contained"
          className="free-trial-button"
          style={{
            borderRadius: '2rem',
            background: '#62CD14',
            marginRight: '1rem',
          }}
          onClick={() => handleGetStartedClick('Free Trial', '1-month')}
        >
          Get 1-month free trial
        </Button>
        <Button
          variant="outlined"
          className="talk-sales-button"
          style={{
            borderRadius: '2rem',
            borderColor: '#62CD14',
            color: '#62CD14',
          }}
          onClick={() => handleGetStartedClick('Talk to Sales', 'Contact')}
        >
          Talk to Sales
        </Button>
      </div>
      <div className="billing-toggle">
        <button
          className={`toggle-button tb1 ${isMonthly ? '' : 'active'}`}
          onClick={() => handleToggleClick(false)}
        >
          Annual
        </button>
        <button
          className={`toggle-button tb2 ${isMonthly ? 'active' : ''}`}
          onClick={() => handleToggleClick(true)}
        >
          Monthly
        </button>
      </div>
      <div className="plans">
        <div className="plan basic">
          <Typography variant="h5" component="h3">
            Basic Plan
          </Typography>
          <Typography variant="subtitle1">Best for personal business</Typography>
          <Typography variant="h6" component="p" className="price">
            ${isMonthly ? '19' : '228'}/{isMonthly ? 'month' : 'year'}{' '}
            <span className="discount-price">
              ${isMonthly ? '25' : '300'}/{isMonthly ? 'month' : 'year'}
            </span>
          </Typography>
          <ul>
            <li>Email Integration</li>
            <li>Contact Management</li>
            <li>Standard Support</li>
            <li>Lead Scoring</li>
          </ul>
          <Button
            variant="contained"
            className="get-started-button"
            style={{
              color: 'white',
              background: '#6D31ED',
              borderRadius: '2rem',
            }}
          >
            Get Started
          </Button>
        </div>
        <div className="plan pro">
          <Typography variant="h5" component="h3">
            Pro Plan
          </Typography>
          <Typography variant="subtitle1">Best for professional business</Typography>
          <Typography variant="h6" component="p" className="price">
            ${isMonthly ? '49' : '588'}/{isMonthly ? 'month' : 'year'}{' '}
            <span className="discount-price">
              ${isMonthly ? '64' : '768'}/{isMonthly ? 'month' : 'year'}
            </span>
          </Typography>
          <ul>
            <li>All Basic Plan Features</li>
            <li>Sales Forecasting</li>
            <li>Custom Reports</li>
            <li>Extended Support</li>
            <li>Data Export</li>
          </ul>
          <Button
            variant="contained"
            className="get-started-button"
            style={{
              color: '#6D31ED',
              background: 'white',
              borderRadius: '2rem',
            }}
          >
            Get Started
          </Button>
        </div>
        <div className="plan premium">
          <Typography variant="h5" component="h3">
            Premium Plan
          </Typography>
          <Typography variant="subtitle1">Best for top company</Typography>
          <Typography variant="h6" component="p" className="price">
            ${isMonthly ? '99' : '1188'}/{isMonthly ? 'month' : 'year'}{' '}
            <span className="discount-price">
              ${isMonthly ? '125' : '1500'}/{isMonthly ? 'month' : 'year'}
            </span>
          </Typography>
          <ul>
            <li>All Pro Plan Features</li>
            <li>Advanced Analytics</li>
            <li>Automation Workflows</li>
            <li>Priority Support</li>
            <li>Data Import</li>
          </ul>
          <Button
            variant="contained"
            className="get-started-button"
            style={{
              color: 'white',
              background: '#6D31ED',
              borderRadius: '2rem',
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;