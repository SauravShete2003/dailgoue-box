import React from 'react';
import { useNavigate } from 'react-router-dom';

function Summary() {
  const navigate = useNavigate();
  const name = localStorage.getItem('name');
  const email = localStorage.getItem('email');
  const phone = localStorage.getItem('phone');

  const handleBack = () => {
    navigate('/step-two'); // Go back to Step 2
  };

  const handleSubmit = () => {
    alert('Form Submitted Successfully!');
    localStorage.clear(); // Clear localStorage after submission
  };

  return (
    <div>
      <h2>Summary</h2>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Phone:</strong> {phone}
      </p>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Summary;
