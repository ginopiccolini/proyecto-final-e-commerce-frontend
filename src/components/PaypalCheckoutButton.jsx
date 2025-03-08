// src/components/PaypalCheckoutButton.jsx (Ejemplo)
import React, { useEffect } from 'react';

const PaypalCheckoutButton = ({ total, currency }) => {
  useEffect(() => {
    const script = document.createElement('script');
    // Carga el script con tu client ID de PayPal sandbox
    script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.REACT_APP_PAYPAL_CLIENT_ID}&currency=${currency}`;
    script.async = true;
    script.onload = () => {
      window.paypal.Buttons({
        createOrder: async (data, actions) => {
          // Llamas a tu backend para crear la orden
          const res = await fetch('http://localhost:5000/api/paypal/create-order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ total, currency }),
          });
          const orderData = await res.json();
          return orderData.id; // orderData.id es el ID de la orden PayPal
        },
        onApprove: async (data, actions) => {
          // Capturas la orden
          const res = await fetch(`http://localhost:5000/api/paypal/capture-order/${data.orderID}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
          });
          const captureData = await res.json();
          console.log('Pago capturado:', captureData);
        },
        onError: (err) => {
          console.error('Error en PayPal:', err);
        },
      }).render('#paypal-button-container');
    };
    document.body.appendChild(script);
  }, [total, currency]);

  return <div id="paypal-button-container"></div>;
};

export default PaypalCheckoutButton;
