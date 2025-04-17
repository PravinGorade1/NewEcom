import React from 'react';
import flip1 from '../assets/flip1.webp';
import flip2 from '../assets/flip2.jpg';
import flip3 from '../assets/flip3.jpg';
import flip4 from '../assets/flip4.jpg';
import dis2 from '../assets/dis2.mp4'; // video
import dis3 from '../assets/dis3.jpg'; // image
import ViewCategory from '../Adminpages/Viewcategory'; // Adjust the path as necessary
import ViewProducts from '../BuyerPages/ViewProducts';
const Home = () => {
  return (
    <>
      <ViewCategory /> {/* Self-closing tag */}

      <div className="w-100 mt-5 mb-5">
        <div className="row">
          <div className="w-100">
            <div id="shoppingCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#shoppingCarousel" data-bs-slide-to="0" className="active" />
                <button type="button" data-bs-target="#shoppingCarousel" data-bs-slide-to="1" />
                <button type="button" data-bs-target="#shoppingCarousel" data-bs-slide-to="2" />
                <button type="button" data-bs-target="#shoppingCarousel" data-bs-slide-to="3" />
              </div>

              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="3000">
                  <img src={flip3} className="d-block w-100" style={{ height: '250px', objectFit: 'cover' }} alt="flip3" />
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                  <img src={flip1} className="d-block w-100" style={{ height: '250px', objectFit: 'cover' }} alt="flip1" />
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                  <img src={flip2} className="d-block w-100" style={{ height: '250px', objectFit: 'cover' }} alt="flip2" />
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                  <img src={flip4} className="d-block w-100" style={{ height: '250px', objectFit: 'cover' }} alt="flip4" />
                </div>
              </div>

              <button className="carousel-control-prev d-none d-md-block" type="button" data-bs-target="#shoppingCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button className="carousel-control-next d-none d-md-block" type="button" data-bs-target="#shoppingCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>

          {/* Right Side - Static Video */}
          
        </div>
      </div>
      <ViewProducts/>
    </>
  );
};

export default Home;
