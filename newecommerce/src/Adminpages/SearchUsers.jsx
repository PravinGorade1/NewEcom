// src/components/SearchUsers.jsx
import React, { useState } from 'react';
import { searchUser } from '../API/Auth';

const SearchUsers = () => {
  const [keyword, setKeyword] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!keyword.trim()) {
      setError('Please enter a keyword to search.');
      return;
    }

    try {
      const response = await searchUser(keyword);
      setUsers(response.data);
      setError('');
    } catch (err) {
      console.error('Search failed:', err);
      setError('Something went wrong while searching users.');
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3 text-center">Search Users</h3>

      <form className="d-flex mb-3" onSubmit={handleSearch}>
        <input
          type="text"
          className="form-control me-2"
          placeholder="Enter keyword (e.g. name, email)"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">Search</button>
      </form>

      {error && <div className="alert alert-danger">{error}</div>}

      {users.length > 0 && (
        <table className="table table-bordered shadow">
          <thead className="table-dark">
            <tr>
              <th>User ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>User Type</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.userId}>
                <td>{user.userId}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.usertype}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SearchUsers;
