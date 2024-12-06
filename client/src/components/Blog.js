import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Blog.css";
import blogImage1 from "../assets/blog1.jpg";
import blogImage2 from "../assets/blog2.jpg";
import blogImage3 from "../assets/blog3.jpg";

const Blog = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div className="blog-container">
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

      <header className="blog-header">
        <h1 className="header-title fade-in">Our Latest Blog Posts</h1>
        <p className="header-subtitle">Insights and trends in the world of IT solutions</p>
      </header>

      <section className="blog-posts">
        <div className="blog-post fade-in">
          <img src={blogImage1} alt="Post 1" className="blog-image" />
          <h2>Why Cloud Solutions Are the Future</h2>
          <p>Cloud computing has revolutionized the way businesses operate. In this post, we discuss how businesses can benefit from cloud technology.</p>
        </div>

        <div className="blog-post zoom-in">
          <img src={blogImage2} alt="Post 2" className="blog-image" />
          <h2>Mobile App Development: Trends to Watch in 2024</h2>
          <p>Stay ahead of the competition with the latest trends in mobile app development. From AI integration to UX/UI best practices, we cover it all.</p>
        </div>

        <div className="blog-post slide-in">
          <img src={blogImage3} alt="Post 3" className="blog-image" />
          <h2>Web Development: How to Build Scalable Websites</h2>
          <p>Learn the best practices for building websites that can scale as your business grows, ensuring high performance and reliability.</p>
        </div>
      </section>
    </div>
  );
};

export default Blog;
