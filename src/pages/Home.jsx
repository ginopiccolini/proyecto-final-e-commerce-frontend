import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Estilos inline para centrar y limitar el ancho
  const homeContainerStyle = {
    maxWidth: '800px',    // Ajusta el ancho máximo que deseas
    margin: '0 auto',     // Centra horizontalmente
    textAlign: 'center',  // Centra el texto
    padding: '3rem 1rem', // Espacio interno
  };

  return (
    <div style={homeContainerStyle}>
      <h1 style={{ fontSize: '3rem', marginBottom: '3rem' }}>Bienvenidos a TOP 3 Burger</h1>
      <p style={{ marginBottom: '5rem' }}>Menos opciones, más sabor</p>
      <Link
        to="/products"
        style={{
          backgroundColor: '#ff6f00',
          color: '#fff',
          fontWeight: '600',
          fontSize: '1.8rem',
          padding: '0.8rem 1.5rem',
          borderRadius: '4px',
          textDecoration: 'none',
          boxShadow: '0 2px 6px rgba(27, 27, 27, 0.3)',
          transition: 'background-color 0.3s',
        }}
      >
        Ver Productos
      </Link>
    </div>
  );
};

export default Home;
