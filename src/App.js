import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Login from './components/Login';
import './App.css';

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  const value = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
  return value ? value.pop() : '';
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      const loggedIn = getCookie('isLoggedIn');
      setIsLoggedIn(loggedIn === 'true');
    };

    checkLoginStatus();
  }, []);

  const handleLogin = (username, password) => {
    // Simular verificação do nome de usuário e senha
    if (username === 'defesa' && password === 'zonalivre') {
      setCookie('isLoggedIn', 'true', 1); // Expira em 1 dia (24 horas)
      setIsLoggedIn(true);
    } else {
      document.cookie = "isLoggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
  };

  return (
      <div className="App">
        {isLoggedIn ? (
            <>
              <Header />
              <MainContent />
              <Footer />
            </>
        ) : (
            <Login onLogin={handleLogin} />
        )}
      </div>
  );
}

export default App;
