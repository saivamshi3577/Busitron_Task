import React, { useRef, useState, useEffect } from 'react';
import './Contact.css';
import contactImage from '../assets/contact-image.jpg';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const navigate = useNavigate();
  const [formValid, setFormValid] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const validateForm = () => {
    const name = form.current['from_name'].value;
    const email = form.current['from_email'].value;
    const message = form.current['message'].value;

    setFormValid(name && email && message);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kgmiylc', 'template_lf2ktyj', form.current, {
        publicKey: 'b_lCVScumprFABoz7',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          navigate('/thankyou');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = (e) => {
    if (sidebarOpen && !e.target.closest('.sidebar') && !e.target.closest('.hamburger-icon')) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeSidebar);

    return () => {
      document.removeEventListener('click', closeSidebar);
    };
  }, [sidebarOpen]);

  return (
    <div className="contact-us">

      <div className="hamburger-icon" onClick={toggleSidebar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <ul>
          <li onClick={() => navigate("/home")}>Home</li>
          <li onClick={() => navigate("/services")}>Services</li>
          <li onClick={() => navigate("/blog")}>Blog</li>
          <li onClick={() => navigate("/contact")}>Contact</li>
          <li onClick={() => {
            localStorage.removeItem("authToken");
            navigate("/login");
          }}>Logout</li> 
        </ul>
      </div>

      <section className="contact-intro">
        <div className="contact-intro-content">
          <h1>Get in Touch with Busitron IT Solutions</h1>
          <p>
            We're here to help you transform your space. Whether you have questions about our services, need a consultation, or just want to say hello, we'd love to hear from you!
          </p>
        </div>
        <div className="contact-intro-image">
          <img src={contactImage} alt="Contact Us" />
        </div>
      </section>

      <section className="contact-form-section">
        <h2>Contact Form</h2>
        <form ref={form} className="contact-form" onSubmit={sendEmail} onChange={validateForm}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="from_name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="from_email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit" disabled={!formValid}>Send Message</button>
        </form>
      </section>

      <section className="contact-address">
        <h2>Our Address</h2>
        <p>Busitron IT Solutions</p>
        <p>Uptown Hyderabad</p>
        <p>Madhapur</p>
        <p>Hyderabad</p>
        <p>Email: contact@Busitron.com</p>
        <p>Phone: (123) 456-7890</p>
      </section>
    </div>
  );
};

export default Contact;




