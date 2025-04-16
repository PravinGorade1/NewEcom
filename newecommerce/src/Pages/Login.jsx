import { useState } from 'react';
import { logins } from '../API/Auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const response = await logins({ username, password });
      const roleData = response.data.trim();

      // Check known backend response pattern
      if (roleData.startsWith('redirect:-')) {
        setError('');
        alert('Login successful! Redirecting...');

        const parts = roleData.split('/');
        const role = parts[0];        // e.g., redirect:-seller-dashboard
        const userId = parts[1] || ''; // might be undefined for admin/buyer
        console.log('User ID:', userId); // Debugging line

        if (userId) {
          localStorage.setItem('userId', userId); // store userId for logout
        }

        // Navigate by role
        if (role === 'redirect:-admin-dashboard') {
          navigate('/admin');
        } else if (role === 'redirect:-buyer-dashboard') {
          navigate('/Buyer');
        } else if (role === 'redirect:-seller-dashboard') {
          navigate('/Seller');
        } else {
          setError('Unknown user role');
        }
      } else if (roleData === 'already logged in') {
        setError('User already logged in.');
      } else if (roleData === 'login again') {
        setError('Invalid login. Please try again.');
      } else {
        setError('Login failed. Try again.');
      }
    } catch (err) {
      console.error(err);
      setError('Invalid username or password');
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <div className="card shadow bg-light">
        <div
          className="card-body"
          style={{ background: 'linear-gradient(#86A8E7)' }}
        >
          <h2 className="text-center mb-4">Login</h2>

          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="btn w-100"
              style={{ backgroundColor: '#C3E0E5' }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
