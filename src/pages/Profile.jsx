// src/pages/Profile.jsx
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Profile = () => {
  const { state } = useContext(AppContext);
  const { user } = state;

  // Agrega este console.log para ver el contenido de 'user'
  console.log("Datos de usuario en Profile:", user);

  return (
    <div className="container mt-4">
      <h2>Mi Perfil</h2>
      {user ? (
        <div>
          <p><strong>Nombre:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ) : (
        <p>No has iniciado sesión.</p>
      )}
    </div>
  );
};

export default Profile;
