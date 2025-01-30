import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Home.css";
import techImage from "../assets/techimage.jpg";

const Home = () => {
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
    localStorage.removeItem("token"); 
    navigate("/login"); 
  };

  return (
    <div className="home-container">
    
      <div className="hamburger-icon" onClick={toggleSidebar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

    
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`} ref={sidebarRef}>
        <ul>
          <li onClick={() => navigate("/home")}>Home</li>
          <li onClick={() => navigate("/services")}>Services</li>
          <li onClick={() => navigate("/blog")}>Blog</li>
          <li onClick={() => navigate("/contact")}>Contact</li>
          <li onClick={handleLogout}>Logout</li> 
        </ul>
      </div>

      <section className="intro">
        <h1 className="fade-in">Welcome to Busitron</h1>
        <p>Your trusted partner for innovative IT solutions</p>
        <img src={techImage} alt="Busitron" className="intro-image" />
      </section>

      <section className="about">
        <h2 className="fade-in">About Us</h2>
        <p>
          We are a forward-thinking IT company providing transformative digital
          solutions to businesses worldwide.
        </p>
      </section>

      <section className="services">
        <h2 className="fade-in">Our Services</h2>
        <ul>
          <li className="zoom-in">Mobile App Development</li>
          <li className="zoom-in">Web Development</li>
          <li className="zoom-in">Cloud Solutions</li>
          <li className="zoom-in">Enterprise Solutions</li>
          <li className="zoom-in">Consulting</li>
        </ul>
      </section>

      <section className="how-we-do-it">
        <h2 className="slide-in">How We Do It</h2>
        <p>
          We use the latest technologies and agile methodologies to deliver
          top-quality, scalable IT solutions that meet your business goals.
        </p>
        <img
          src={techImage}
          alt="How We Do It"
          className="how-we-do-it-image"
        />
      </section>

      <section className="clients">
        <h2 className="fade-in">Our Clients</h2>
        <div className="client-logos">
          <div className="client-logo">Client 1</div>
          <div className="client-logo">Client 2</div>
          <div className="client-logo">Client 3</div>
          <div className="client-logo">Client 4</div>
        </div>
      </section>

      <section className="testimonials">
        <h2 className="fade-in">Client Testimonials</h2>
        <div className="testimonial">
          <p>
            "Busitron transformed our business with their innovative IT
            solutions. They are true experts!"
          </p>
          <h4>- John Doe, CEO of Client 1</h4>
        </div>
        <div className="testimonial">
          <p>
            "The team at Busitron is professional and reliable. Highly recommend
            for tech consulting!"
          </p>
          <h4>- Jane Smith, CTO of Client 2</h4>
        </div>
      </section>
    </div>
  );
};

export default Home;
