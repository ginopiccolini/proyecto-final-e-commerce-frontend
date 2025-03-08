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
      // Despachamos la acción ADD_TO_CART con la info del producto
      dispatch({
        type: 'ADD_TO_CART',
        payload: {
          product,
          quantity: 1, // Cantidad inicial
        },
      });
      alert(`Agregado al carrito: ${product.name}`);
    }
  };

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  if (!product) {
    return <p>Cargando producto...</p>;
  }

  return (
    <div>
      <h2>Detalle del Producto</h2>
      <p><strong>ID:</strong> {product._id}</p>
      <p><strong>Nombre:</strong> {product.name}</p>
      <p><strong>Precio:</strong> ${product.price}</p>
      <p><strong>Descripción:</strong> {product.description}</p>
      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.name}
          style={{ maxWidth: '200px' }}
        />
      )}
      <br />
      <button onClick={handleAddToCart}>Agregar al Carrito</button>
    </div>
  );
};

export default Product;
