import React from 'react';
import { useNavigate } from 'react-router-dom'; 
const Admin = () => {

    const navigate = useNavigate();
  
    const goToViewAllUsers = () => {
      navigate('/ViewAllUsers');
    }

    const gotoViewAllSellers = () => {
       navigate('/ViewAllSeller');
    }

    const gotoViewAllBuyers = () => {
          navigate('/viewBuyers');
    }

    const gotoSearchUsers = () => {
       navigate('/searchUsers');
    }

    // const gotoSearchUserById = () => {
    //   // navigate('/SearchUserById');
    // }
    const gotoDeleteUser = () => {
       navigate('/DeleteUsers');
    }
    const gotoViewCategories = () => {
       navigate('/Viewcategory');
    }
    const gotoAddCategory = () => {
       navigate('/Category');
    }



  return (
    <div className="container my-5" >
      <div className="text-center mb-4">
        <h2 className="fw-bold text-primary">Admin Dashboard</h2>
        <p className="text-muted">Welcome to the admin control panel</p>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body" style={{ maxWidth: '600px', backgroundColor: '#a393d2' }}>
              <h5 className="card-title">ViewAllUsers</h5>
              <p className="card-text">View all registered users</p>
              <button className="btn btn-outline-primary w-100"
              onClick={goToViewAllUsers}
              >ViewAllUsers</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body" style={{ maxWidth: '600px', backgroundColor: '#d293d2' }}>
              <h5 className="card-title">ViewSellers</h5>
              <p className="card-text">View all registered Sellers</p>
              <button className="btn btn-outline-success w-100"
                onClick={gotoViewAllSellers}
              >ViewSellers</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body"style={{ maxWidth: '600px', backgroundColor: '#d29393' }}>
              <h5 className="card-title">ViewBuyers</h5>
              <p className="card-text">View all registered ViewBuyers</p>
              <button className="btn btn-outline-danger w-100"
                onClick={gotoViewAllBuyers}
              
              >ViewBuyers</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body"style={{ maxWidth: '600px', backgroundColor: '#d293d2' }}>
              <h5 className="card-title">SearchUsers</h5>
              <p className="card-text">Search all registered users</p>
              <button className="btn btn-outline-danger w-100"
              onClick={gotoSearchUsers}
              >SearchUsers</button>
            </div>
          </div>
        </div>

        {/* <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body"style={{ maxWidth: '600px', backgroundColor: '#d29393' }}>
              <h5 className="card-title">SearchUserById</h5>
              <p className="card-text">Search all registered users By Id</p>
              <button className="btn btn-outline-danger w-100">SearchUserById</button>
            </div>
          </div>
        </div> */}
      
        
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body" style={{ maxWidth: '600px', backgroundColor: '#a393d2' }}>
              <h5 className="card-title">DeleteUser</h5>
              <p className="card-text">Delete Users</p>
              <button className="btn btn-outline-primary w-100"
                  onClick={gotoDeleteUser}
              >DeleteUser</button>
            </div>
          </div>
        </div>
    
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body" style={{ maxWidth: '600px', backgroundColor: '#a393d2' }}>
              <h5 className="card-title">ViewCategories</h5>
              <p className="card-text">View all Categories</p>
              <button className="btn btn-outline-primary w-100"
                  onClick={gotoViewCategories}
              >ViewCategories</button>
            </div>
          </div>
        </div>


        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body" style={{ maxWidth: '600px', backgroundColor: '#d293d2' }}>
              <h5 className="card-title">AddCategory</h5>
              <p className="card-text">AddCategory </p>
              <button className="btn btn-outline-primary w-100"
                onClick={gotoAddCategory}
              >AddCategory</button>
            </div>
          </div>
        </div>
   
      </div>
    </div>
  );
};

export default Admin;
