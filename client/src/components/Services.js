import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Services.css"; 
import serviceImage1 from "../assets/service1.jpg"; 
import serviceImage2 from "../assets/service2.jpg";
import serviceImage3 from "../assets/service3.jpg";

const Services = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const navigate = useNavigate(); 

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login"); 
  };

  return (
    <div className="services-container">
  
      <div className="hamburger-icon" onClick={toggleSidebar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div
        className={`sidebar ${isSidebarOpen ? "open" : ""}`}
        ref={sidebarRef}
      >
        <ul>
          <li onClick={() => navigate("/home")}>Home</li>
          <li onClick={() => navigate("/services")}>Services</li>
          <li onClick={() => navigate("/blog")}>Blog</li>
          <li onClick={() => navigate("/contact")}>Contact</li>
          <li onClick={handleLogout}>Logout</li> 
        </ul>
      </div>

      <header className="services-header">
        <h1 className="header-title">Our Services</h1>
        <p className="header-subtitle">
          At Busitron, we specialize in providing cutting-edge IT solutions tailored to your business needs.
        </p>
      </header>

      <section className="services-list">
        <div className="service-item fade-in">
          <img
            src={serviceImage1}
            alt="Mobile App Development"
            className="service-image"
          />
          <h2>Mobile App Development</h2>
          <p>Innovative and user-friendly mobile apps that keep you connected.</p>
        </div>
        <div className="service-item zoom-in">
          <img
            src={serviceImage2}
            alt="Web Development"
            className="service-image"
          />
          <h2>Web Development</h2>
          <p>Responsive and dynamic websites designed to make an impact.</p>
        </div>
        <div className="service-item slide-in">
          <img
            src={serviceImage3}
            alt="Cloud Solutions"
            className="service-image"
          />
          <h2>Cloud Solutions</h2>
          <p>Scalable cloud services to ensure your business is always online.</p>
        </div>
      </section>
    </div>
  );
};

export default Services;
