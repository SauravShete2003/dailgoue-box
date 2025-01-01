import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StepSecond.css";
import toast, { Toaster } from "react-hot-toast";

function StepTwo() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (!email.trim() || !phone.trim()) {
     toast.error("Please fill in both email and phone fields.");
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
     toast.error("Please enter a valid email address.");
      return;
    }
  
    const phoneRegex = /^\d+$/;
    if (!phoneRegex.test(phone)) {
     toast.error("Please enter a valid phone number (digits only).");
      return;
    }

    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
   
    setTimeout(()=>{
      navigate("/summary");
      }, 2000);
    }
    
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
      <Toaster/>
    </div>
  );
  };


export default StepTwo;
