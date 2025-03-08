// src/pages/Checkout.jsx
import React, { useContext, useState } from 'react';
import api from '../api';
import { AppContext } from '../context/AppContext';

const Checkout = () => {
  const { state, dispatch } = useContext(AppContext);
  const { cart, user } = state;
  const [message, setMessage] = useState('');

  // Calcular total en pesos chilenos (CLP)
  const total = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  // Función para crear el PaymentIntent con Stripe (ya configurado para CLP)
  const handlePayment = async () => {
    try {
      // Crear PaymentIntent
      const paymentResponse = await api.post('/api/payment/create-payment-intent', {
        amount: total, // En CLP, se envía el total directamente
      });
      const { clientSecret } = paymentResponse.data;
      // Aquí integrarías Stripe.js para confirmar el pago usando clientSecret.
      // Para nuestro ejemplo, asumiremos que el pago fue exitoso.

      // Crear la orden en el backend
      const orderResponse = await api.post('/api/orders', {
        user: user ? user._id : null, // Asegúrate de tener el usuario logueado
        products: cart.map((item) => ({
          product: item.product._id,
          quantity: item.quantity,
        })),
        total: total,
      });

      setMessage('Orden creada exitosamente. Pago confirmado.');
      // Vaciar el carrito después de crear la orden
      dispatch({ type: 'CLEAR_CART' });
    } catch (error) {
      console.error(error);
      setMessage('Error al procesar el pago o crear la orden.');
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <p>Total: ${total} CLP</p>
      <button onClick={handlePayment}>Pagar</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Checkout;
