import React from "react";
import { useNavigate } from "react-router-dom";
import {toast , Toaster} from 'react-hot-toast';
import "./Summary.css";

function Summary() {
  const navigate = useNavigate();
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const phone = localStorage.getItem("phone");

  const handleBack = () => {
    navigate("/step-second");
  };

  const handleSubmit = () => {
    toast.success("Form Submitted Successfully!")
    localStorage.clear();
  };

  return (
    <div className="summary-container">
    <h2 className="summary-title">Summary</h2>
    <div className="summary-details">
      <p>
        <strong>Name:</strong> <span>{name}</span>
      </p>
      <p>
        <strong>Email:</strong> <span>{email}</span>
      </p>
      <p>
        <strong>Phone:</strong> <span>{phone}</span>
      </p>
    </div>
    <div className="button-group">
      <button className="summary-button back-button" onClick={handleBack}>
        Back
      </button>
      <button className="summary-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
    <Toaster/>
  </div>

  );
}

export default Summary;
