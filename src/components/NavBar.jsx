// src/components/NavBar.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const NavBar = () => {
  const { state } = useContext(AppContext);
  // Suma la cantidad de cada ítem en el carrito
  const cartCount = state.cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">Top3Burger</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Productos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link position-relative" to="/cart">
                Carrito
                {cartCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartCount}
                    <span className="visually-hidden">productos en el carrito</span>
                  </span>
                )}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/auth">Iniciar Sesión / Registrarse</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/checkout">Pagar</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Mi Perfil</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
