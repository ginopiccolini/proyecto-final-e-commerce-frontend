// src/pages/SignUp.jsx
import React, { useState } from 'react';
import api from '../api'; // <-- Importamos la instancia de Axios

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Estados para manejar mensajes o errores
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Verificar que las contraseñas coincidan
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      const response = await api.post('/api/users/register', {
        email,
        password,
        name,
      });
      setMessage(response.data.message); // "Usuario registrado con éxito"
      setError('');
      // Limpia los campos si deseas
      setEmail('');
      setName('');
      setPassword('');
      setConfirmPassword('');
    } catch (err) {
      // Si el backend retorna un error, lo capturamos aquí
      setMessage('');
      if (err.response) {
        setError(err.response.data.message || 'Error al registrar');
      } else {
        setError('Error de conexión con el servidor');
      }
    }
  };

  return (
    <div>
      <h2>Crear Cuenta</h2>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

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

        <div>
          <label>Confirmar Contraseña</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default SignUp;
