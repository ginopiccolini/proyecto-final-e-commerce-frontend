import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Las contraseñas no coinciden');
      return;
    }
    try {
      const response = await api.post('/api/users/register', { email, name, password });
      setMessage(response.data.message);
      setEmail('');
      setName('');
      setPassword('');
      setConfirmPassword('');
      // Redirige al login
      navigate('/login');
    } catch (error) {
      console.error(error);
      setMessage(error.response.data.message || 'Error al registrar');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Registrarse</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email</label>
          <input className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Nombre</label>
          <input className="form-control" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Contraseña</label>
          <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Confirmar Contraseña</label>
          <input className="form-control" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        </div>
        <button className="btn btn-primary" type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default SignUp;
