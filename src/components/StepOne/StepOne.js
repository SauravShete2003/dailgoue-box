import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StepOne.css";
import toast, { Toaster } from "react-hot-toast";

function StepOne() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  
  const handleNext = () => {
    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name.trim())) {
      toast.error("Please enter a valid name (letters only)");
      return;
    }

    localStorage.setItem("name", name);
    navigate("/step-second");
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Step 1: Enter your Name</h2>
      <input
        type="text"
        className="form-input"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <button className="form-button" onClick={handleNext}>
        Next
      </button>
      <Toaster />
    </div>
  );
}

export default StepOne;
