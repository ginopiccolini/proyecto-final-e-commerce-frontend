// src/pages/DualAuthPage.jsx
import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';

const DualAuthPage = () => {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <ul className="nav nav-tabs mb-4" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'login' ? 'active' : ''}`}
                onClick={() => setActiveTab('login')}
                role="tab"
              >
                Iniciar Sesión
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'signup' ? 'active' : ''}`}
                onClick={() => setActiveTab('signup')}
                role="tab"
              >
                Registrarse
              </button>
            </li>
          </ul>
          <div className="tab-content">
            {activeTab === 'login' ? (
              <div className="tab-pane fade show active" role="tabpanel">
                <Login />
              </div>
            ) : (
              <div className="tab-pane fade show active" role="tabpanel">
                <SignUp />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DualAuthPage;
