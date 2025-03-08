// src/pages/Checkout.jsx
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import PaypalCheckoutButton from '../components/PaypalCheckoutButton';

const Checkout = () => {
  const { state, dispatch } = useContext(AppContext);
  const { cart } = state;
  const [orderMessage, setOrderMessage] = useState("");

  const total = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const currency = 'CLP'; // Cambia a CLP si es lo que deseas

  const handlePaymentSuccess = (orderId, captureData) => {
    console.log("Orden de PayPal:", orderId, captureData);
    setOrderMessage("Pago y orden completados exitosamente.");
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <div className="container mt-4">
      <h2>Checkout</h2>
      <p className="fs-4">Total a pagar: ${total} {currency}</p>
      <PaypalCheckoutButton total={total} currency={currency} onSuccess={handlePaymentSuccess} />
      {orderMessage && <div className="alert alert-success mt-3">{orderMessage}</div>}
    </div>
  );
};

export default Checkout;
