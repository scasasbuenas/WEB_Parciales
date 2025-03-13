import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../languageSwitcher/LanguageSwitcher';
import '../languageSwitcher/LanguageSwitcher.css';
import './login.css';

function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  // Initialize i18n translation hook
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password.length < 5 || password.length > 8) {
      alert('La contraseña debe tener entre 5 y 8 caracteres');
      return;
    }

    if (email && password) {
      onLoginSuccess(email);
      navigate('/home');
    } else {
      setError(t('login.error'));
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <div className="login-title">
          <h1>{t('login.title')}</h1>
        </div>
        
        <div className="login-fields">
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">{t('login.email')}</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">{t('login.password')}</label>
              <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button 
                  type="button" 
                  className="toggle-password"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? 
                    <span role="img" aria-label="hide password">👁️</span> : 
                    <span role="img" aria-label="show password">👁️‍🗨️</span>}
                </button>
              </div>
            </div>
            
            {error && <p className="error-message">{error}</p>}
            
            <button type="submit" className="login-button">
              {t('login.submit')}
            </button>
          </form>
        </div>
      </div>
      
      <div className="language-switcher-bottom-right">
        <LanguageSwitcher />
      </div>
    </div>
  );
}

export default Login;
