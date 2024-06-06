// PopUp.js
import React from 'react';
import './PopUp.css';

const PopUp = ({ visible, onClick }) => {
  return (
    visible && (
      <div className="popup" onClick={onClick}>
        <p>Check out our latest updates!</p>
      </div>
    )
  );
};

export default PopUp;
