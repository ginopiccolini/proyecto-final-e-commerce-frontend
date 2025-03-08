// src/pages/ProductsList.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  const fetchProducts = async () => {
    try {
      const response = await api.get('/api/products');
      setProducts(response.data);
      setError('');
    } catch (err) {
      console.error(err);
      setError('Error al obtener productos');
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Productos</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row">
        {products.map(product => (
          <div className="col-md-4 mb-3" key={product._id}>
            <div className="card h-100">
              {product.imageUrl && <img src={product.imageUrl} className="card-img-top" alt={product.name} />}
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
                <Link to={`/product/${product._id}`} className="btn btn-primary">Ver Detalle</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
