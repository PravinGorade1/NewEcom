import React, { useEffect, useState } from 'react';
import { addProduct } from '../API/Auth';

const Product = () => {
  const [formData, setFormData] = useState({
    prodname: '',
    proddesc: '',
    price: '',
    discount: '',
    quantity: '',
    categoryname: '',
  });

  const [sellerId, setSellerId] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    const storedId = localStorage.getItem('userId');
    if (storedId && storedId !== 'null' && storedId !== 'undefined') {
      setSellerId(storedId);
      console.log('Seller ID (from localStorage):', storedId);
    } else {
      alert('Seller not logged in. Please login first.');
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!sellerId) {
      alert("Seller ID not loaded. Please wait.");
      return;
    }

    try {
      const productData = {
        ...formData,
        sellerId: sellerId,
      };

      const formDataToSend = new FormData();
      formDataToSend.append("productData", JSON.stringify(productData));
      formDataToSend.append("file", imageFile);

      await addProduct(formDataToSend);
      alert('Product added successfully!');

      setFormData({
        prodname: '',
        proddesc: '',
        price: '',
        discount: '',
        quantity: '',
        categoryname: '',
      });
      setImageFile(null);
      setImagePreview(null);
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product');
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4 text-center">Add New Product</h3>
      <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input
            type="text"
            className="form-control"
            name="prodname"
            value={formData.prodname}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Product Description</label>
          <input
            type="text"
            className="form-control"
            name="proddesc"
            value={formData.proddesc}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Discount (%)</label>
          <input
            type="number"
            className="form-control"
            name="discount"
            value={formData.discount}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Quantity</label>
          <input
            type="number"
            className="form-control"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Category</label>
          <select
            className="form-select"
            name="categoryname"
            value={formData.categoryname}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Books">Books</option>
            <option value="Fashion">Fashion</option>
            <option value="Mobiles">Mobiles</option>
            <option value="Laptops">Laptops</option>
            <option value="Cloth">Cloth</option>
            <option value="Toys">Toys</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Product Image</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>

        {imagePreview && (
          <div className="mb-3 text-center">
            <img
              src={imagePreview}
              alt="Preview"
              style={{ maxWidth: '200px', maxHeight: '200px' }}
              className="img-thumbnail"
            />
          </div>
        )}

        <button type="submit" className="btn btn-primary w-100">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Product;
