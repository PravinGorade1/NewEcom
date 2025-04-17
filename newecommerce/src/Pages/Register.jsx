import React, { useState } from 'react';
import { register } from '../API/Auth'; 

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    contact: '',
    password: '',
    usertype: '',
    address: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState
  ('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, name, email, contact, password, usertype, address } = formData;
    if (!username || !name || !email || !contact || !password || !usertype || !address) {
      setError('Please fill all fields');
      setSuccess('');
      return;
    }

    try {
      const response = await register(formData);
      console.log('Registration success:', response.data);
      setSuccess('Registration successful!');
      setError('');
      setFormData({
        username: '',
        name: '',
        email: '',
        contact: '',
        password: '',
        usertype: '',
        address: ''
      });
    } catch (err) {
      console.error('Registration error:', err);
      setError('Registration failed. Try again.');
      setSuccess('');
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '600px'}}>
      <div className="card shadow bg-light">
        <div className="card-body"style={{ background:'linear-gradient(#86A8E7)' }}>
          <h2 className="text-center mb-4">Register</h2>

          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter username"
                autoComplete="username"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter full name"
                autoComplete="name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter email"
                autoComplete="email"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Contact</label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter contact"
                autoComplete="tel"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter password"
                autoComplete="new-password"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">User Type</label>
              <select
                name="usertype"
                value={formData.usertype}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">-- Select --</option>
                <option value="ADMIN">Admin</option>
                <option value="BUYER">Buyer</option>
                <option value="SELLER">Seller</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter address"
                autoComplete="street-address"
              />
            </div>

            <button type="submit" className="btn w-100" style={{ background:'linear-gradient(#D16BA5,#86A8E7,pink)' }}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
