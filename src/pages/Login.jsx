// src/pages/Login.jsx
import React, { useState, useContext } from 'react';
import api from '../api';
import { AppContext } from '../context/AppContext';

const Login = () => {
  const { dispatch } = useContext(AppContext); // Para actualizar el estado global

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Estados para mensajes o errores
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post('/api/users/login', { email, password });
      // Ej: { message: 'Login exitoso', token, user: { email, name } }

      // Guardar token en localStorage o en el estado global
      const { token, user } = response.data;

      // Ejemplo: Guardar token en localStorage
      localStorage.setItem('token', token);

      // Guardar usuario en el estado global
      dispatch({ type: 'SET_USER', payload: user });

      setMessage(response.data.message);
      setError('');

      // Limpiar campos
      setEmail('');
      setPassword('');
    } catch (err) {
      setMessage('');
      if (err.response) {
        setError(err.response.data.message || 'Error al iniciar sesión');
      } else {
        setError('Error de conexión con el servidor');
      }
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
