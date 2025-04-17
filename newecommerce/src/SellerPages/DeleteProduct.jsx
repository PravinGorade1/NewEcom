import React, { useState } from 'react';
import { DeleteProductApi } from '../API/Auth'; // Adjust the import path as necessary

export default function DeleteProduct() {
  const [prodId, setProdId] = useState('');

  const handleDelete = async () => {
    try {
      const response = await DeleteProductApi(prodId);
      alert(response.data);
      setProdId('');
    } catch (error) {
      alert('Product delete failed');
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-sm-12">
          <div className="card shadow-sm p-4">
            <h4 className="mb-4 text-center text-danger">Delete Product</h4>

            <div className="mb-3">
              <label htmlFor="productId" className="form-label">
                Product ID
              </label>
              <input
                id="productId"
                className="form-control"
                type="number"
                placeholder="Enter Product ID"
                value={prodId}
                onChange={(e) => setProdId(e.target.value)}
              />
            </div>

            <button
              className="btn btn-danger w-100"
              onClick={handleDelete}
              disabled={!prodId}
            >
              Delete Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
