import React, { useState } from 'react';
import { logouts } from '../API/Auth';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
// import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import image from '../assets/image.png'
const Navbar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('All');

  const handleLogout = async () => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      alert('No user logged in.');
      return;
    }

    try {
      const response = await logouts(userId);
      alert(response.data);
      localStorage.removeItem('userId');
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
      alert('Logout failed');
    }
  };

  const handleSearch = () => {
    alert(`Search: ${searchQuery} in ${category}`);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{ backgroundColor: '#131921' }}>
      <div className="container-fluid d-flex align-items-center justify-content-between">
        {/* Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center" style={{ width: '150px' }}>
          <img className="img-fluid w-100"
            src={image}
            alt="Logo"
            style={{ width:'100% ',height:'35px', objectFit: 'contain' }}
          />
        </Link>

        {/* Search Bar */}
        <div className="d-flex flex-grow-1 my-0" style={{ maxWidth: '400px' }}>
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="btn btn-warning rounded-0 rounded-end" onClick={handleSearch}>
            {/* <FaSearch /> */}🔍
          </button>
        </div>

        {/* Navigation Links */}
        <div className="d-flex align-items-center">
          <ul className="navbar-nav flex-row align-items-center">
            <li className="nav-item mx-2">
              <Link className="nav-link text-white" to="/login">Sign In</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-white" to="/register">Register</Link>
            </li>
            <li className="nav-item mx-2">
              <button className="btn btn-danger nav-link text-white" onClick={handleLogout}>
                Logout
              </button>
            </li>
            <li className="nav-item mx-2">
              <Link to="/cart" className="nav-link d-flex align-items-center text-white">
                {/* <FaShoppingCart size={20} /> */}
                <span className="ms-1"> </span>
                <span className="badge bg-warning text-dark ms-1">🛒</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
