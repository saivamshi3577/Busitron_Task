
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GetStarted from './components/GetStarted';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/Signup';
// import ProductList from './components/ProductList';
// import Cart from './components/Cart';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      <Route
          path="/Home"
          element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />  */}
      </Routes>
    </Router>
  );
}

export default App;
