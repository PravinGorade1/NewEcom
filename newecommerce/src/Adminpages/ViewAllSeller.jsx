import React, { useEffect, useState } from 'react';
import { viewSeller } from '../API/Auth'; // adjust path if needed

export default function ViewAllSeller() {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    const fetchSellers = async () => {
      try {
        const response = await viewSeller();
        setSellers(response.data);
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
      <h3 className="mb-4 text-center">All Sellers</h3>
      {sellers.length === 0 ? (
        <p>No sellers found.</p>
      ) : (
        <table className="table table-bordered shadow">
          <thead className="table-dark">
            <tr>
              <th>Seller ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller) => (
              <tr key={seller.userId}>
                <td>{seller.userId}</td>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td>{seller.usertype}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
