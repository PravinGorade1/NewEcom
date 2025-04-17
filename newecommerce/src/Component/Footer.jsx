import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 pb-2 mt-5">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Column 1 */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Ecom Store</h5>
            <p>Your go-to place for electronics, fashion, books, and more!</p>
          </div>

          {/* Column 2 */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/login" className="text-light text-decoration-none">Login</Link></li>
              <li><Link to="/register" className="text-light text-decoration-none">Register</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Contact</h5>
            <p>Email: support@ecomstore.com</p>
            <p>Phone: +91 88053 84935</p>
            <p>Phone: +91 88053 84935</p>
            <p>Location: Pune, India</p>
          </div>
        </div>
        <hr className="border-light" />
        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} Ecom Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
