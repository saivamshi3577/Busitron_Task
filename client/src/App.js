import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import GetStarted from './components/GetStarted';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/Signup';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import Home from './components/Home';
import Services from './components/Services';
import Blog from './components/Blog';
import Contact from './components/contact';
import Footer from './components/Footer'; 
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/services" element={<ProtectedRoute><Services /></ProtectedRoute>} />
        <Route path="/blog" element={<ProtectedRoute><Blog /></ProtectedRoute>} />
        <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
      </Routes>
      <FooterComponent />
    </Router>
  );
};

const FooterComponent = () => {
  const location = useLocation();

  if (location.pathname === '/home' || 
      location.pathname === '/services' || 
      location.pathname === '/blog' || 
      location.pathname === '/contact') {
    return <Footer />;
  }

  return null; 
};

export default App;
