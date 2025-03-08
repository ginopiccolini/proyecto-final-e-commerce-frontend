import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import PaypalCheckoutButton from '../components/PaypalCheckoutButton';

const Checkout = () => {
  const { state, dispatch } = useContext(AppContext);
  const { cart } = state;
  const [orderMessage, setOrderMessage] = useState("");

  const total = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const currency = 'CLP';

  const handlePaymentSuccess = (orderId, captureData) => {
    console.log("Orden de PayPal:", orderId, captureData);
    setOrderMessage("Pago y orden completados exitosamente.");
    dispatch({ type: 'CLEAR_CART' });
  };

  // Estilos para la tarjeta y su encabezado, que contengan un fondo gris oscuro y texto blanco
  const cardStyle = {
    backgroundColor: '#2b2b2b',  // Gris oscuro
    border: '1px solid #444',
    borderRadius: '4px',
    color: '#fff',
  };

  const cardHeaderStyle = {
    backgroundColor: '#333',     // Un poco más oscuro para el encabezado
    borderBottom: '1px solid #444',
    color: '#fff',
    padding: '1rem',
    fontWeight: 'bold',
  };

  const listGroupItemStyle = {
    backgroundColor: '#2b2b2b',
    color: '#fff',
    border: 'none',
  };

  return (
    <div className="container mt-4">
      <h2>Checkout</h2>
      <div className="card mb-3" style={cardStyle}>
        <div className="card-header" style={cardHeaderStyle}>
          Detalle de la Compra
        </div>
        <ul className="list-group list-group-flush">
          {cart.map(item => (
            <li
              key={item.product._id}
              className="list-group-item d-flex justify-content-between align-items-center"
              style={listGroupItemStyle}
            >
              {item.product.name} - ${item.product.price} x {item.quantity}
              <span>= ${item.product.price * item.quantity}</span>
            </li>
          ))}
          <li className="list-group-item" style={listGroupItemStyle}>
            <strong>Total: ${total} {currency}</strong>
          </li>
        </ul>
      </div>
      <PaypalCheckoutButton total={total} currency={currency} onSuccess={handlePaymentSuccess} />
      {orderMessage && <div className="alert alert-success mt-3">{orderMessage}</div>}
    </div>
  );
};

export default Checkout;
