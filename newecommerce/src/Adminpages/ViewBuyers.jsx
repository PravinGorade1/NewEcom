import React, { useEffect, useState } from 'react';
import { viewBuyes } from '../API/Auth';

export default function ViewBuyers() {
  const [Buyers, seBuyers] = useState([]);

  useEffect(() => {
    const fetchSellers = async () => {
      try {
        const response = await viewBuyes();
        seBuyers(response.data);
        console.log('Fetched sellers:', response.data);
      } catch (error) {
        console.error('Error fetching sellers:', error);
        alert('Failed to fetch sellers');
      }
    };

    fetchSellers();
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="mb-4 text-center">All Buyers</h3>
      {Buyers.length === 0 ? (
        <p>No Buyers found.</p>
      ) : (
        <table className="table table-bordered shadow">
          <thead className="table-dark">
            <tr>
              <th>Buyers ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {Buyers.map((Buyers) => (
              <tr key={Buyers.userId}>
                <td>{Buyers.userId}</td>
                <td>{Buyers.name}</td>
                <td>{Buyers.email}</td>
                <td>{Buyers.usertype}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
