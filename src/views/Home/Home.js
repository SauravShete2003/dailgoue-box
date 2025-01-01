import React from 'react';
import { Route, Routes } from 'react-router-dom';
import StepOne from './../../components/StepOne/StepOne';
import StepSecond from './../../components/StepSecond/StepSecond';
import Summary from './../../components/Summary/Summary';

function Home() {
  return (
    <Routes>
      <Route path="/" element={<StepOne />} />
      <Route path="/step-second" element={<StepSecond />} />
      <Route path="/summary" element={<Summary />} />
    </Routes>
  );
}

export default Home;
