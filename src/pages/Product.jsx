// src/pages/Product.jsx
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';
import { AppContext } from '../context/AppContext';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');
  const { dispatch } = useContext(AppContext);

  const fetchProduct = async () => {
    try {
      const response = await api.get(`/api/products/${id}`);
      setProduct(response.data);
      setError('');
    } catch (err) {
      console.error(err);
      setError('Error al obtener el producto');
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch({ type: 'ADD_TO_CART', payload: { product, quantity: 1 } });
      alert(`Agregado al carrito: ${product.name}`);
    }
  };

  if (error) return <div className="container mt-4"><div className="alert alert-danger">{error}</div></div>;
  if (!product) return <div className="container mt-4"><p>Cargando producto...</p></div>;

  return (
    <div className="container mt-4">
      <h2>{product.name}</h2>
      {product.imageUrl && <img src={product.imageUrl} alt={product.name} className="img-fluid mb-3" />}
      <p className="fs-4">${product.price}</p>
      <p>{product.description}</p>
      <button className="btn btn-success" onClick={handleAddToCart}>Agregar al Carrito</button>
    </div>
  );
};

export default Product;
