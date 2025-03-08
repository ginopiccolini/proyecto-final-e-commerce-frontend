// src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'var(--color-fondo)', borderBottom: '1px solid #e0e0e0' }}>
      <div className="container">
        <Link className="navbar-brand" to="/" style={{ color: 'var(--color-acento)' }}>Mi E-commerce</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ color: 'var(--color-texto)' }}>Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products" style={{ color: 'var(--color-texto)' }}>Productos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart" style={{ color: 'var(--color-texto)' }}>Carrito</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/auth" style={{ color: 'var(--color-texto)' }}>Iniciar Sesión / Registrarse</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/checkout" style={{ color: 'var(--color-texto)' }}>Checkout</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile" style={{ color: 'var(--color-texto)' }}>Mi Perfil</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
