// src/pages/Cart.jsx
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { state, dispatch } = useContext(AppContext);
  const { cart } = state;

  const handleIncrease = (productId) => {
    const item = cart.find(item => item.product._id === productId);
    if (item) {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity: item.quantity + 1 } });
    }
  };

  const handleDecrease = (productId) => {
    const item = cart.find(item => item.product._id === productId);
    if (item) {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity: item.quantity - 1 } });
    }
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
                <div>
                  {item.product.name} - ${item.product.price}
                  <div className="d-inline-block ms-3">
                    <button className="btn btn-sm btn-secondary me-1" onClick={() => handleDecrease(item.product._id)}>-</button>
                    <span>{item.quantity}</span>
                    <button className="btn btn-sm btn-secondary ms-1" onClick={() => handleIncrease(item.product._id)}>+</button>
                  </div>
                </div>
                <span>= ${item.product.price * item.quantity}</span>
              </li>
            ))}
            <li className="list-group-item">
              <strong>Total: ${total}</strong>
            </li>
          </ul>
          <button className="btn btn-warning me-2" onClick={handleClearCart}>Vaciar Carrito</button>
          <Link className="btn btn-primary" to="/checkout">Proceder Pagar</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
