import React, { useState } from 'react';
import axios from 'axios';
import PriceHistoryChart from './PriceHistoryChart';
import './ProductForm.css';

const ProductForm = () => {
  const [link, setLink] = useState('');
  const [product, setProduct] = useState(null);
  const [priceHistoryButton, setPriceHistoryButton] = useState(false);
  const [isLoading, setIsLoading] = useState(false);  // State for loader

  const fetchProduct = async (e) => {
    e.preventDefault();
    setIsLoading(true);  // Start loading
    try {
      const response = await axios.post('/api/products/fetchProduct', { link });
      setProduct(response.data);
      setLink('');
    } catch (error) {
      console.error('Error fetching product:', error);
      alert('Failed to fetch product data. Please check the link and try again.');
    } finally {
      setIsLoading(false);  // Stop loading after fetch
    }
  };

  return (
    <div className="product-page">
      <form onSubmit={fetchProduct} className="product-form">
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Paste product link here"
          required
        />
        <button type="submit">Fetch Product</button>
      </form>

      {isLoading && (
        <div className="loader">Loading...</div>  // Display loader when loading
      )}

      {product && !isLoading && (  // Only display product when not loading
        <div className="product-card">
          <div className="product-header">
            <img src={product.image} alt={product.title} className="product-image" />
            <h2 className="product-title">{product.title}</h2>
          </div>
          <div className="product-body">
            <p className="product-price">Price: ₹{product.price}</p>
            <div className="rating-reviews">
              <span className="rating">{product.rating ? `${product.rating}★` : 'No rating'}</span>
              <span className="reviews">{product.reviews ? `${product.reviews} Reviews` : 'No reviews'}</span>
            </div>
            <p className="product-description">{product.description}</p>
          </div>
          <div className="product-footer">
            <button className="btn-price-history" onClick={() => setPriceHistoryButton(!priceHistoryButton)}>
              {priceHistoryButton ? 'Hide Price History' : 'Show Price History'}
            </button>
            {priceHistoryButton && <PriceHistoryChart priceHistory={product.priceHistory} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductForm;
