import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Footer from './Component/Footer';
import Admin from './Component/Admin';
import SellerDashboard from './Component/SellerDashboard';
import BuyerDashboard from './Component/BuyerDashboard';
import Category from './Pages/Category';
import ViewAllUsers from './Adminpages/ViewAllUsers';
import ViewCategory from './Adminpages/Viewcategory';
import ViewAllSeller from './Adminpages/ViewAllSeller';
import DeleteUsers from './Adminpages/DeleteUsers';
import ViewBuyers from './Adminpages/viewBuyers';
import SearchUsers from './Adminpages/SearchUsers';
import ViewProducts from './BuyerPages/ViewProducts';
import DeleteProduct from './SellerPages/DeleteProduct';
import AditProduct from './SellerPages/AditProduct';
const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/Buyer" element={<BuyerDashboard />} />
      <Route path="/Seller" element={<SellerDashboard />} />
      <Route path="/Category" element={<Category />} />
      <Route path="/products" element={<Products />} />
      <Route path="/ViewAllUsers" element={<ViewAllUsers />} />
      <Route path="/Viewcategory" element={<ViewCategory/>} />
      <Route path="/ViewAllSeller" element={<ViewAllSeller/>} />
      <Route path="/DeleteUsers" element={<DeleteUsers/>} />
      <Route path="/viewBuyers" element={<ViewBuyers/>} />
      <Route path="/searchUsers" element={<SearchUsers/>} />
      <Route path="/ShowProducts" element={<ViewProducts/>} />
      <Route path="/AditProduct" element={<AditProduct/>} />
      <Route path="/DleteProduct" element={<DeleteProduct/>} />



      
      
    </Routes>
    <Footer/>
  </Router>
);

export default App;
