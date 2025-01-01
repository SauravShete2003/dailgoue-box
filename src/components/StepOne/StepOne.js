import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function StepOne() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    localStorage.setItem('name', name); // Store in localStorage
    navigate('/step-second'); // Go to the next step
  };

  return (
    <div>
      <h2>Step 1: Enter your Name</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default StepOne;
