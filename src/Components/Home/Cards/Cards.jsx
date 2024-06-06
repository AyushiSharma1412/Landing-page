import React from 'react';
import './Cards.css';
import { Typography } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import BookIcon from '@mui/icons-material/Book';
import AssessmentIcon from '@mui/icons-material/Assessment';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import PersonIcon from '@mui/icons-material/Person';

const Cards = () => {
  const cardData = [
    {
      title: 'Real-time Collaboration',
      description: 'Responso enables your team to share insights, solve problems together, and deliver unified support.',
      color: '#4CAF50', // Green
      icon: <GroupIcon style={{ marginRight: '10px' }} />
    },
    {
      title: 'Smart Ticketing System',
      description: 'No more manual sorting. We routes customer requests to the right agents based on their expertise.',
      color: '#E91E63', // Pink
      icon: <AssignmentTurnedInIcon style={{ marginRight: '10px' }} />
    },
    {
      title: 'Knowledge Base',
      description: 'Create a comprehensive knowledge base with FAQs, guides, and tutorials to reduce support volume.',
      color: '#2196F3', // Blue
      icon: <BookIcon style={{ marginRight: '10px' }} />
    },
    {
      title: 'Performance Analytics',
      description: 'Customize your own report from existing datasets. Measure only what matters.',
      color: '#FFC107', // Amber
      icon: <AssessmentIcon style={{ marginRight: '10px' }} />
    },
    {
      title: 'CRM Integrations',
      description: 'Responso ensures a consistent experience across every touchpoint with 30+ integrations.',
      color: '#9C27B0', // Purple
      icon: <IntegrationInstructionsIcon style={{ marginRight: '10px' }} />
    },
    {
      title: 'Personalized Interactions',
      description: 'Access historical interactions, preferences, and purchase history to tailor your responses.',
      color: '#F44336', // Red
      icon: <PersonIcon style={{ marginRight: '10px' }} />
    },
  ];

  return (
    <div className="cards-container">
      <Typography variant="h5" gutterBottom>
        OUR SOLUTION
      </Typography>
      <Typography variant="h3" marginTop='3rem' marginBottom='3rem' gutterBottom>
        Why Choose Our AI CRM
      </Typography>
      <div className="cards-grid">
        {cardData.map((card, index) => (
          <div key={index} className="card">
            <div className="card-top" style={{ backgroundColor: card.color }}></div>
            <div className="card-content">
              {card.icon}
              <Typography variant="h5" gutterBottom>
                {card.title}
              </Typography>
            </div>
            <Typography variant="body1" gutterBottom>
              {card.description}
            </Typography>
            <Typography variant="body2" color="primary">
              Learn more →
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
