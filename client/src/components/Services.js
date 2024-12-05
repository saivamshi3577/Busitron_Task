import React from "react";
import "./Services.css";
import servicesImage from "../assets/servicesimage.jpg"; 

const Services = () => {
  return (
    <div className="services-page-container">
      <section className="intro-services">
        <h1 className="fade-in">Our Expertise at Busitron</h1>
        <p>Explore our wide range of services tailored to suit your business needs.</p>
        <img src={servicesImage} alt="Services" className="services-image" />
      </section>

      <section className="service-details">
        <h2 className="fade-in">Our Services</h2>
        <div className="services-list">
          <div className="service-item zoom-in">
            <h3>Mobile App Development</h3>
            <p>We create high-quality, feature-rich mobile apps tailored to your needs.</p>
          </div>
          <div className="service-item zoom-in">
            <h3>Web Development</h3>
            <p>Building scalable, secure, and responsive websites that grow your business.</p>
          </div>
          <div className="service-item zoom-in">
            <h3>Cloud Solutions</h3>
            <p>Cloud-based solutions for better data management, storage, and security.</p>
          </div>
          <div className="service-item zoom-in">
            <h3>Consulting</h3>
            <p>Expert consulting services to optimize your technology strategy and growth.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
