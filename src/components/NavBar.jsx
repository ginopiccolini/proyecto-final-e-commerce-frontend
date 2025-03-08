// src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem' }}>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/signup">Registrarse</Link></li>
        <li><Link to="/login">Iniciar Sesión</Link></li>
        <li><Link to="/profile">Mi Perfil</Link></li>
        <li><Link to="/products">Productos</Link></li>
        <li><Link to="/checkout">Checkout</Link></li>
        <li><Link to="/cart">Carrito</Link></li>

      </ul>
    </nav>
  );
};

export default NavBar;
