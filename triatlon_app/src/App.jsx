import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Login from './componentes/login/login'
import Home from './componentes/home'

function App() {
  // State to track if user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // State to store the username
  const [username, setUsername] = useState('');
  
  // Function to handle successful login
  const handleLoginSuccess = (email) => {
    // Extract username from email (part before @)
    const usernameFromEmail = email.split('@')[0];
    // Capitalize first letter for better display
    const formattedUsername = usernameFromEmail.charAt(0).toUpperCase() + usernameFromEmail.slice(1);
    
    setUsername(formattedUsername);
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={isLoggedIn ? <Navigate to="/home" /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/login" 
          element={isLoggedIn ? <Navigate to="/home" /> : <Login onLoginSuccess={handleLoginSuccess} />} 
        />
        <Route 
          path="/home" 
          element={isLoggedIn ? <Home username={username} /> : <Navigate to="/login" />} 
        />
      </Routes>
    </Router>
  )
}

export default App
