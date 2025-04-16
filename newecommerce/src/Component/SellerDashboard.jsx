import React from 'react';
import { useNavigate } from 'react-router-dom';

const SellerDashboard = () => {
  const navigate = useNavigate();

  const goToCategoryPage = () => {
    navigate('/Category');
  };

   const goToProductsPage = () => {
     navigate('/products');
    }
  
    const goToAditProduct = () => {
      navigate('/AditProduct');
     }

     const goToDeleteProduct = () => {
      navigate('/DleteProduct');
     }
  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold text-dark">Seller Dashboard</h2>
        <p className="text-muted">Welcome! Manage your products and orders here.</p>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body" style={{ backgroundColor: 'gray' }}>
              <h5 className="card-title">Add Products</h5>
              <p className="card-text">Add or edit your listed products</p>
              <button className="btn btn-outline-primary w-100"
              onClick={goToProductsPage}
              >Manage Products</button>
            </div>
          </div>
        </div>

   {/* Add Category Card */}
   <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body" style={{ backgroundColor: '#f8d7da' }}>
              <h5 className="card-title">Add Category</h5>
              <p className="card-text">Click to see category-wise products</p>
              <button
                className="btn btn-outline-danger w-100"
                 onClick={goToCategoryPage}
              >
                Go to Category Page
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body" style={{ backgroundColor: '#d2a0e6' }}>
              <h5 className="card-title">Orders</h5>
              <p className="card-text">View and fulfill customer orders</p>
              <button className="btn btn-outline-success w-100">View Orders</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body" style={{ backgroundColor: '#e6939c' }}>
              <h5 className="card-title">Earnings</h5>
              <p className="card-text">Check your total sales and payouts</p>
              <button className="btn btn-outline-dark w-100">View Earnings</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body" style={{ backgroundColor: '#d2a0e6' }}>
              <h5 className="card-title">Adit Product</h5>
              <p className="card-text">View and Adit Product</p>
              <button className="btn btn-outline-success w-100"
                 onClick={goToAditProduct}
              >Adit Product</button>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body" style={{ backgroundColor: '#e6939c' }}>
              <h5 className="card-title">DleteProduct</h5>
              <p className="card-text">Delete Product By Product Id</p>
              <button className="btn btn-outline-dark w-100"
              onClick={goToDeleteProduct}
              >DleteProduct</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SellerDashboard;
