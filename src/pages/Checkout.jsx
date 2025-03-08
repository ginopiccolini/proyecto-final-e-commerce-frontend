// src/pages/Checkout.jsx
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import PaypalCheckoutButton from '../components/PaypalCheckoutButton';

const Checkout = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;

  // Calculamos el total
  const total = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const currency = 'USD'; // O 'CLP' si tu cuenta PayPal lo permite

  return (
    <div>
      <h2>Checkout</h2>
      <p>Total: ${total} {currency}</p>
      <PaypalCheckoutButton total={total} currency={currency} />
    </div>
  );
};

export default Checkout;
