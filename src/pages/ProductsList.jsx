// src/pages/ProductsList.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api'; // Importamos la instancia de Axios

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  // Función para obtener productos desde el backend
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

  // Usamos useEffect para llamar a la función al montar el componente
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Listado de Productos</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <Link to={`/product/${product._id}`}>
              {product.name} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
