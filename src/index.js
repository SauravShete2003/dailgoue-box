import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Home from './views/Home/Home';
import StepTwo from './components/StepSecond/StepSecond';
import Summary from './components/Summary/Summary';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path : '/step-second',
    element : <StepTwo/>
  },
  {
    path : '/summary',
    element : <Summary/>
  },
  {
    path : '*',
    element : <div>404 Not found </div>
  }
]);
root.render(<RouterProvider router={router}/>)
