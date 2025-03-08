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
    try {
      const response = await api.post('/api/users/login', { email, password });
      const { token, user } = response.data;
      
      // Agrega este console.log para verificar que 'user' tiene datos
      console.log("Usuario recibido:", user);
      
      // Guarda el token en localStorage
      localStorage.setItem('token', token);
      
      // Actualiza el contexto con el usuario
      dispatch({ type: 'SET_USER', payload: user });
      
      setMessage(response.data.message);
      setEmail('');
      setPassword('');
      
      // Redirige a la página principal
      navigate('/');
    } catch (error) {
      console.error(error);
      setMessage(error.response.data.message || 'Error al iniciar sesión');
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
