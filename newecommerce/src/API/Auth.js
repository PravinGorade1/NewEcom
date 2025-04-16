import axios from 'axios';

const reg = 'http://localhost:8080/auth/registration';
const log = 'http://localhost:8080/auth/login';
const cate = 'http://localhost:8080/seller/addCategory';
const Aproduct = 'http://localhost:8080/seller/addProduct';
const logou = 'http://localhost:8080/auth/logout';
const viewAllusers = 'http://localhost:8080/admin/viewAllUsers';
const viewSellers = 'http://localhost:8080/admin/viewSellers';
const viewBuyers = 'http://localhost:8080/admin/viewBuyers';
// const searchUsers = 'http://localhost:8080/admin/searchUsers';
const searchUserById = 'http://localhost:8080/admin/searchUserById';
// const deleteUser = 'http://localhost:8080/admin/deleteUser';
const viewCategory = 'http://localhost:8080/admin/viewCategories';
const deleteCategory = 'http://localhost:8080/admin/deleteCategory';
// const Viewproduct = 'http://localhost:8080/Buyer/viewProducts';
const image  = 'http://localhost:8080/Buyer/images/{imageName}';
const Aditproduct = 'http://localhost:8080/seller/editProduct';
const Deleteproduct = 'http://localhost:8080/seller/deleteProduct';


// Register API
export const register = async (data) => {
  return await axios.post(reg, data);
};

// Login API
export const logins = async (data) => {
  return await axios.post(log, data);
};

// Category API
export const addCategory = async (data) => {
  return await axios.post(cate, data);
};

// Add Product API
export const addProduct = async (data) => {
  return await axios.post(Aproduct, data);
};

// Logout API
// Logout API (corrected to use query param)
export const logouts = async (userId) => {
  return await axios.post(`${logou}?userId=${userId}`);
};


// View All Users API
export const viewAllUser = async () => {
  return await axios.get(viewAllusers);
};

// View Sellers API
export const viewSeller = async () => {
  return await axios.get(viewSellers);
};

// View Buyers API
export const viewBuyes = async () => {
  return await axios.get(viewBuyers);
};

// Search Users API
export const searchUser = async (keyword) => {
  return await axios.post('http://localhost:8080/admin/searchUsers', { keyword });
};


// Delete User API
export const deleteUserById = async (userId) => {
  return await axios.delete(`http://localhost:8080/admin/deleteUser`, {
    params: { userId }
  });
};


// View Category API
export const viewCategoryAPI = async () => {
  return await axios.get(viewCategory);
};

// Delete Category API
export const deleteCategoryAPI = async (data) => {
  return await axios.post(deleteCategory, data);
};

export const viewProductsAPI = async () => {
  try {
    const response = await axios.get('http://localhost:8080/Buyer/viewProducts');
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error.response?.data || error.message);
    throw error;
  }
};

export const imageAPI  = async (imageName)=>{
  return await axios.get(image+imageName);
}

export const AditProductApi = async (data) =>{
  return await axios.post(Aditproduct,data);
}

export const DeleteProductApi = async (prodId) =>{
  return await axios.post(Deleteproduct,null,{params:{prodId}});
}