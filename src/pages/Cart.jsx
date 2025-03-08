// src/pages/Cart.jsx
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { state, dispatch } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const total = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <div className="container mt-4">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <div className="alert alert-info">El carrito está vacío.</div>
      ) : (
        <div>
          <ul className="list-group mb-3">
            {cart.map((item) => (
              <li key={item.product._id} className="list-group-item d-flex justify-content-between align-items-center">
                {item.product.name} - ${item.product.price} x {item.quantity}
                <button className="btn btn-danger btn-sm" onClick={() => handleRemove(item.product._id)}>Quitar</button>
              </li>
            ))}
          </ul>
          <h4>Total: ${total}</h4>
          <button className="btn btn-warning me-2" onClick={handleClearCart}>Vaciar Carrito</button>
          <Link className="btn btn-primary" to="/checkout">Proceder al Checkout</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
