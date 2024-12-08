import React from 'react';
import { useNavigate } from 'react-router-dom';  
import './ThankYou.css';

const ThankYou = () => {
  const navigate = useNavigate();  


  const navigateToHome = () => {
    navigate('/home');  
  };

  return (
    <div className="thank-you-wrapper">
      <div className="thank-you-box">
        <h1>Thank You!</h1>
        <p>Your message has been successfully received. We'll get back to you shortly.</p>
        <img 
          src="https://img.freepik.com/free-photo/thank-you-delighted-young-woman-hold-hands-heart-chest-gazing-touched-flattered-heartwarming-gift-receive-compliment-gift-standing-against-white-background_176420-47588.jpg?t=st=1733676866~exp=1733680466~hmac=c1a3713b9309aaf000eb8c291fae54e34ef68d976b72ac33e3b9a4b15aedba22&w=1060" 
          alt="Thank You" 
          className="thank-you-img" 
        />
        <button className="home-btn" onClick={navigateToHome}>
          <span className="arrow-icon">→</span> Go to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
