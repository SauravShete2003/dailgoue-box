import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function StepTwo() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    localStorage.setItem('email', email); // Store in localStorage
    localStorage.setItem('phone', phone); // Store in localStorage
    navigate('/summary'); // Go to the final step
  };

  const handleBack = () => {
    navigate('/'); // Go back to Step 1
  };

  return (
    <div>
      <h2>Step 2: Enter your Contact Details</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />
      <button onClick={handleBack}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default StepTwo;
