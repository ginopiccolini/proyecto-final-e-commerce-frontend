// src/pages/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div className="bg-light min-vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: 'var(--color-fondo)' }}>
      <div style={{ maxWidth: '800px' }} className="w-100 text-center px-3">
        <h1 className="display-4 mb-3" style={{ color: 'var(--color-acento)' }}>Bienvenido a Mi E-commerce</h1>
        <p className="lead" style={{ color: 'var(--color-texto)' }}>
          Descubre nuestros productos y disfruta de una experiencia de compra única.
        </p>
        <a href="/products" className="btn btn-primary btn-lg mt-3" style={{ backgroundColor: 'var(--color-acento)', border: 'none' }}>Ver Productos</a>
      </div>
    </div>
  );
};

export default Home;
