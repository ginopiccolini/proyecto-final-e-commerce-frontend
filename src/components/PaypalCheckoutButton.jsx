// src/components/PaypalCheckoutButton.jsx
import React, { useEffect } from 'react';

const PaypalCheckoutButton = ({ total, currency, onSuccess }) => {
  useEffect(() => {
    const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;
    console.log("PayPal Client ID:", clientId);

    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=${currency}`;
    script.async = true;
    script.onload = () => {
      if (window.paypal) {
        window.paypal.Buttons({
          createOrder: async (data, actions) => {
            // Actualizamos la URL para apuntar al backend en Render
            const res = await fetch("https://proyecto-final-e-commerce-backend.onrender.com/api/paypal/create-order", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ total, currency }),
            });
            const orderData = await res.json();
            return orderData.id;
          },
          onApprove: async (data, actions) => {
            // Actualizamos la URL para apuntar al backend en Render
            const res = await fetch(`https://proyecto-final-e-commerce-backend.onrender.com/api/paypal/capture-order/${data.orderID}`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
            });
            const captureData = await res.json();
            console.log("Capture result:", captureData);
            if (onSuccess) onSuccess(data.orderID, captureData);
          },
          onError: (err) => {
            console.error("PayPal Checkout error:", err);
          },
        }).render("#paypal-button-container");
      } else {
        console.error("window.paypal no está definido");
      }
    };

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [total, currency, onSuccess]);

  return <div id="paypal-button-container"></div>;
};

export default PaypalCheckoutButton;
