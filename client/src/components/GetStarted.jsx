import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GetStarted.css';

const GetStarted = () => {
  const navigate = useNavigate();
  return (
    <div className="get-started">
      <div className="content">
        <h1 className="welcome-text">Welcome To Busitron</h1>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTIKq1aotPzhqy42XK-hEreJglynjBLKa5nA&s" 
          alt="Company Logo"
          className="company-logo"
        />
        <button
          onClick={() => navigate('/login')}
          className="btn get-started-btn"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
