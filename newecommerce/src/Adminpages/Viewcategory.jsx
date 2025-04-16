import React, { useEffect, useState } from 'react';
import { viewCategoryAPI } from '../API/Auth';
import cloth from  '../assets/cloth.png'
import ele from '../assets/ele.jpeg'
 import fashan from '../assets/fashan.webp'
 import mobile3 from '../assets/mobile3.webp'
 import books from '../assets/books.webp';
 import loptop from '../assets/loptop.png'
 import toy1 from '../assets/toy1.webp'
 
const categoryImages = {
    Electronics:ele,
    Laptops: loptop,
    Mobiles:mobile3,
    Cloth: cloth,
    Fashion: fashan,
    Books: books,
    Toys: toy1,
};

const ViewCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await viewCategoryAPI();
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
        alert('Failed to fetch categories');
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="container mt-5 text-center">
  <h3 className="mb-4"></h3>
  <div className="d-flex flex-wrap justify-content-center gap-4">
    {categories.map((cat) => (
      <div key={cat.categoryId} className="text-center">
        <div
          className="shadow"
          style={{
            width: '120px',
            height: '120px',
            backgroundColor: '#f0f0f0',
            margin: 'auto',
            padding: '10px',
            borderRadius: '10px', // optional for slightly rounded corners
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img
            src={categoryImages[cat.categoryname] || '/images/default.png'}
            alt={cat.categoryname}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>
        <div className="mt-2 fw-bold">{cat.categoryname}</div>
      </div>
    ))}
  </div>
</div>

  );
};

export default ViewCategory;
