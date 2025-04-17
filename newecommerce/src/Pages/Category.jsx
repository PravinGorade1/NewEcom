import React, { useState } from 'react';
 import { addCategory } from '../API/Auth'; // Ensure this function exists

const Category = () => {
  const [categoryname, setCategoryname] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addCategory({ categoryname })
      .then(() => {
        setMessage('Category added successfully!');
        setIsError(false);
        setCategoryname('');
      })
      .catch(() => {
        setMessage('Error adding category');
        setIsError(true);
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-sm-10 col-12">
          <div className="card shadow-sm p-4">
            <h3 className="mb-3 text-center text-primary">Add New Category</h3>

            {message && (
              <div className={`alert ${isError ? 'alert-danger' : 'alert-success'}`} role="alert">
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="categoryname" className="form-label">Category Name</label>
                <input
                  type="text"
                  id="categoryname"
                  className="form-control"
                  value={categoryname}
                  onChange={(e) => setCategoryname(e.target.value)}
                  placeholder="Enter category name"
                  required
                />
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary">Add Category</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
