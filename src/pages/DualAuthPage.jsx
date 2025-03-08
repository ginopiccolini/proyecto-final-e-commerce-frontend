import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';

const DualAuthPage = () => {
  const [activeTab, setActiveTab] = useState('login');

  const containerStyle = {
    backgroundColor: '#2b2b2b',  
    border: '1px solid #444',
    borderRadius: '8px',
    padding: '2rem',
    maxWidth: '600px',
    margin: '2rem auto',
    color: '#f0f0f0', 
  };

  const tabButtonStyle = (isActive) => ({
    backgroundColor: isActive ? 'rgba(255, 140, 0, 0.2)' : 'transparent',
    border: 'none',
    color: '#f0f0f0',
    fontWeight: isActive ? '600' : '400',
    padding: '0.6rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '0.5rem',
  });

  return (
    <div className="container text-center" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
      <h2 style={{ marginBottom: '2rem', color: '#fff' }}>Iniciar Sesión / Registrarse</h2>
      <div style={containerStyle}>
        <div className="d-flex justify-content-center mb-4">
          <button
            style={tabButtonStyle(activeTab === 'login')}
            onClick={() => setActiveTab('login')}
          >
            Iniciar Sesión
          </button>
          <button
            style={tabButtonStyle(activeTab === 'signup')}
            onClick={() => setActiveTab('signup')}
          >
            Registrarse
          </button>
        </div>
        <div className="tab-content">
          {activeTab === 'login' ? (
            <div>
              <Login />
            </div>
          ) : (
            <div>
              <SignUp />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DualAuthPage;
