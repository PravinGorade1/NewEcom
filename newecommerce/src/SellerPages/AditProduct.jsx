import React, { useState } from 'react';
import { AditProductApi } from '../API/Auth';

export default function AditProduct() {
  const [editData, setEditData] = useState({
    prodId: '',
    prodName: '',
    prodDesc: '',
    price: '',
    quantity: '',
    discount: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleEdit = async () => {
    try {
      const response = await AditProductApi(editData);
      alert(response.data);
    } catch (error) {
      alert('Product update failed');
      console.error(error);
    }
  };

  return (
    <div className="container mt-4">
      <h3>Edit Product</h3>
      {/* Input Fields */}
      <input className="form-control mb-2" type="number" name="prodId" placeholder="Product ID" onChange={handleChange} />
      <input className="form-control mb-2" type="text" name="prodName" placeholder="Product Name" onChange={handleChange} />
      <input className="form-control mb-2" type="text" name="prodDesc" placeholder="Product Description" onChange={handleChange} />
      <input className="form-control mb-2" type="number" name="price" placeholder="Price" onChange={handleChange} />
      <input className="form-control mb-2" type="number" name="quantity" placeholder="Quantity" onChange={handleChange} />
      <input className="form-control mb-2" type="number" name="discount" placeholder="Discount (%)" onChange={handleChange} />
      <button className="btn btn-primary" onClick={handleEdit}>Update Product</button>
    </div>
  );
}
