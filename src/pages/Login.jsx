// src/pages/Login.jsx
import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import api from '../api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { dispatch } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Enviando login con:", { email, password });
    try {
      const response = await api.post('/api/users/login', { email, password });
      console.log("Respuesta de login:", response.data);
      const { token, user } = response.data;
      
      localStorage.setItem('token', token);
      dispatch({ type: 'SET_USER', payload: user });
      
      setMessage(response.data.message);
      setEmail('');
      setPassword('');
      
      navigate('/'); // Redirige a la página de inicio
    } catch (error) {
      console.error("Error en login:", error);
      // Si error.response es undefined, entonces es posible que la conexión falle
      if (error.response && error.response.data) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Error al iniciar sesión. Revisa la consola para más detalles.");
      }
    }
  };

  return (
    <div className="container mt-4">
      <h2>Iniciar Sesión</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email</label>
          <input className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Contraseña</label>
          <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button className="btn btn-primary" type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
