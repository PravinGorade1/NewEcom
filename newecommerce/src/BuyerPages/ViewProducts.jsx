import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Row, Col, Card, Button, Badge, Spinner, Alert, ListGroup
} from 'react-bootstrap';

const ViewProducts = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/Buyer/viewProducts', {
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
    })
      .then(res => setProducts(res.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const calculateDiscountedPrice = (price, discount) => price * (1 - discount / 100);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="text-warning">★</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="text-warning">⯨</span>); // half-star substitute
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="text-secondary">☆</span>);
    }

    return stars;
  };

  let content = (
    <div className="w-100 px-4 mt-4">
      <h2 className="text-center mb-4">Trending Products</h2>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {products.map((product) => (
          <Col key={`${product.prodname}-${product.sellerId}`}>
            <Card
              className="h-100 shadow-sm"
              onClick={() => setSelectedProduct(product)}
              style={{ cursor: 'pointer' }}
            >
              <div style={{ position: 'relative' }}>
                <Card.Img
                  variant="top"
                  src={product.imageUrl}
                  alt={product.prodname}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Available';
                  }}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                {product.discount > 0 && (
                  <Badge bg="danger" style={{ position: 'absolute', top: '10px', right: '10px' }}>
                    -{product.discount}%
                  </Badge>
                )}
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-truncate">{product.prodname}</Card.Title>
                <div className="mb-2">
                  {product.discount > 0 ? (
                    <>
                      <span className="text-decoration-line-through text-muted me-2">
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="text-danger fw-bold">
                        ${calculateDiscountedPrice(product.price, product.discount).toFixed(2)}
                      </span>
                    </>
                  ) : (
                    <span className="text-success fw-bold">${product.price.toFixed(2)}</span>
                  )}
                </div>
                <div className="mt-auto">
                  {renderStars(product.rating)}
                  <span className="ms-2">({product.rating})</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );

  if (selectedProduct) {
    const {
      prodname, price, discount, rating, quantity, proddesc, sellerId, imageUrl
    } = selectedProduct;

    content = (
      <div className="w-100 px-4">
        <Button variant="outline-primary" onClick={() => setSelectedProduct(null)} className="mb-3">
          &larr; Back to Products
        </Button>
        <Row>
          <Col md={6}>
            <Card className="mb-3">
              <Card.Img
                variant="top"
                src={imageUrl}
                alt={prodname}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Available';
                }}
                style={{ maxHeight: '500px', objectFit: 'contain' }}
              />
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title as="h2">{prodname}</Card.Title>
                <div className="mb-3">
                  {discount > 0 ? (
                    <>
                      <span className="text-decoration-line-through text-muted me-2">
                        ${price.toFixed(2)}
                      </span>
                      <span className="h4 text-danger me-2">
                        ${calculateDiscountedPrice(price, discount).toFixed(2)}
                      </span>
                      <Badge bg="danger">Save {discount}%</Badge>
                    </>
                  ) : (
                    <span className="h4 text-success">${price.toFixed(2)}</span>
                  )}
                </div>
                <div className="mb-3">
                  {renderStars(rating)}
                  <span className="ms-2">{rating}/5</span>
                </div>
                <div className="mb-3">
                  {quantity > 0 ? (
                    <Badge bg="success" className="fs-6">In Stock ({quantity} available)</Badge>
                  ) : (
                    <Badge bg="danger" className="fs-6">Out of Stock</Badge>
                  )}
                </div>
                <Card.Text>
                  <strong>Description:</strong><br />
                  {proddesc || 'No description available.'}
                </Card.Text>
                <div className="text-muted mb-3">Sold by: Seller #{sellerId}</div>
                <Button variant="primary" size="lg" className="w-100">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }

  if (loading) {
    content = (
      <div className="w-100 d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    content = (
      <div className="w-100 px-4">
        <Alert variant="danger">
          <Alert.Heading>Error loading products</Alert.Heading>
          <p>{error}</p>
          <hr />
          <p className="mb-0">Please check:</p>
          <ListGroup>
            <ListGroup.Item>Is the backend server running?</ListGroup.Item>
            <ListGroup.Item>Is the endpoint correct?</ListGroup.Item>
            <ListGroup.Item>Check browser console for more details</ListGroup.Item>
          </ListGroup>
        </Alert>
      </div>
    );
  }

  return content;
};

export default ViewProducts;
