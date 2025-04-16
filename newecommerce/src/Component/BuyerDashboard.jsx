import { useNavigate } from 'react-router-dom';

const BuyerDashboard = () => {
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate('/ShowProducts');
  };

  const goToOrders = () => {
    navigate('/my-orders');
  };

  const goToWishlist = () => {
    navigate('/wishlist');
  };

  const goToProfile = () => {
    navigate('/profile');
  };

  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold text-success">Buyer Dashboard</h2>
        <p className="text-muted">Welcome! Shop and manage your orders easily.</p>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body" style={{ backgroundColor: '#e8f5e9' }}>
              <h5 className="card-title">All Products</h5>
              <p className="card-text">Browse our product catalog</p>
              <button 
                className="btn btn-outline-success w-100"
                onClick={goToProducts}
              >
                View Products
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body" style={{ backgroundColor: '#e3f2fd' }}>
              <h5 className="card-title">My Orders</h5>
              <p className="card-text">Track and manage your orders</p>
              <button 
                className="btn btn-outline-primary w-100"
                onClick={goToOrders}
              >
                View Orders
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body" style={{ backgroundColor: '#fff8e1' }}>
              <h5 className="card-title">Wishlist</h5>
              <p className="card-text">View your saved products</p>
              <button 
                className="btn btn-outline-warning w-100"
                onClick={goToWishlist}
              >
                Go to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4 mt-3">
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body" style={{ backgroundColor: '#f3e5f5' }}>
              <h5 className="card-title">Profile</h5>
              <p className="card-text">Edit your personal information</p>
              <button 
                className="btn btn-outline-secondary w-100"
                onClick={goToProfile}
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
        
        {/* Add more cards here if needed */}
      </div>
    </div>
  );
};

export default BuyerDashboard;