// src/pages/Profile.jsx
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Profile = () => {
  const { state } = useContext(AppContext);
  const { user } = state; 

  return (
    <div>
      <h2>Mi Perfil</h2>
      {user ? (
        <div>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Nombre:</strong> {user.name}</p>
          {/* Muestra más datos según tu modelo de usuario */}
        </div>
      ) : (
        <p>No has iniciado sesión.</p>
      )}
    </div>
  );
};

export default Profile;
