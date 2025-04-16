import React, { useEffect, useState } from 'react';
import { viewAllUser } from '../API/Auth'; 

const ViewAllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await viewAllUser();
        setUsers(response.data);
        console.log('Fetched users:', response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
        alert('Failed to fetch users');
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="mb-4 text-center">All Users</h3>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <table className="table table-bordered table-striped shadow">
          <thead className="table-dark">
            <tr>
              <th>User ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Role</th>
              {/* Add other columns as per your User class */}
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

export default ViewAllUsers;
