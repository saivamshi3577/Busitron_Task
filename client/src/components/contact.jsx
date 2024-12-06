import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css"; 

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sidebarOpen, setSidebarOpen] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
    setFormData({ name: "", email: "", message: "" });
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); 
  };
  const handleLogout = () => {
    localStorage.removeItem("authToken"); 
    navigate("/login"); 
  };

  return (
    <div className="contact-container">
    
      <div className="hamburger-icon" onClick={toggleSidebar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

  
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <ul>
          <li onClick={() => navigate("/home")}>Home</li>
          <li onClick={() => navigate("/services")}>Services</li>
          <li onClick={() => navigate("/blog")}>Blog</li>
          <li onClick={() => navigate("/contact")}>Contact</li>
          <li onClick={handleLogout}>Logout</li> 
        </ul>
      </div>

      
      <section className="contact-form-section">
        <header className="contact-header">
          <h1>Contact Us</h1>
          <p>We would love to hear from you!</p>
        </header>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>

        <div className="company-details">
          <h2>Business Information</h2>
          <p><strong>Business Name:</strong> Busitron Technology</p>
          <p><strong>Mobile Number:</strong> 123-145-6789</p>
          <p><strong>Address:</strong> Uptown Madhapur, Hyderabad</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
