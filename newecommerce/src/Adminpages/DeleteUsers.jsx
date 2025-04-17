import React, { useState } from 'react';
import { deleteUserById } from '../API/Auth';

const DeleteUsers = ({ onSuccess }) => {
  const [userId, setUserId] = useState('');
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!userId) {
      alert('Please enter a user ID');
      return;
    }

    if (window.confirm(`Are you sure you want to delete user with ID ${userId}?`)) {
      setLoading(true);
      try {
        await deleteUserById(userId);
        alert('User deleted successfully');
        onSuccess && onSuccess();
      } catch (error) {
        console.error('Error deleting user:', error);
        alert('Failed to delete user');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6 col-sm-12">
          <div className="card shadow-sm p-4">
            <h4 className="text-center mb-3">Delete User</h4>
            <input
              type="number"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="Enter user ID to delete"
              className="form-control mb-3"
            />
            <div className="d-grid">
              <button
                className="btn btn-danger"
                onClick={handleDelete}
                disabled={loading}
              >
                {loading ? 'Deleting...' : 'Delete User'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteUsers;
