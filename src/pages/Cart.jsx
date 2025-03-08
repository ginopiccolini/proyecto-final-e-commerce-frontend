// src/pages/Cart.jsx
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Cart = () => {
  const { state, dispatch } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (productId) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: productId,
    });
  };

  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  // Calcular total
  const total = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.product._id}>
                {item.product.name} - ${item.product.price} x {item.quantity}
                <button onClick={() => handleRemove(item.product._id)}>
                  Quitar
                </button>
              </li>
            ))}
          </ul>
          <p><strong>Total:</strong> ${total}</p>
          <button onClick={handleClearCart}>Vaciar Carrito</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
