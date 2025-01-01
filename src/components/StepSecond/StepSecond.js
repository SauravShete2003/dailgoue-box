import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StepSecond.css";

function StepTwo() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    // Check if email or phone is empty
    if (!email.trim() || !phone.trim()) {
      alert("Please fill in both email and phone fields.");
      return;
    }
  
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    // Validate phone number (only digits allowed)
    const phoneRegex = /^\d+$/;
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid phone number (digits only).");
      return;
    }
  
    // Save to localStorage if validation passes
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
  
    // Navigate to the summary page
    navigate("/summary");
  };
  
  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Step 2: Enter your Contact Details</h2>
      <input
        type="email"
        className="form-input"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="text"
        className="form-input"
        placeholder="Enter your phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />
      <div className="button-group">
        <button className="form-button back-button" onClick={handleBack}>
          Back
        </button>
        <button className="form-button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default StepTwo;
