import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Login from './components/Login';
import Inicio from './components/Inicio';
import Eventos from './components/Eventos';
import './App.css';
import './estio.css';
import './novo.css';

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
    if (username === 'defesa' && password === 'zonalivre') {
      setCookie('isLoggedIn', 'true', 1);
      setIsLoggedIn(true);
    } else {
      document.cookie = "isLoggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
  };


  return (
      <div className="App">
        {isLoggedIn ? (
            <Router>
              <Header />
              <nav>
                <ul>
                  {/* Use o Link do React Router para navegar para a página Início */}
                  <li><Link to="/inicio">Início</Link></li>
                  <li><Link to="/eventos">Eventos</Link></li>
                  <li><Link to="/funcionarios">Funcionários</Link></li>
                  <li><Link to="/imagens">Imagens</Link></li>
                  <li><Link to="/formularios">Formulários</Link></li>
                  <li><Link to="/sistemas">Sistemas</Link></li>
                  <li><Link to="/senha-internet">Senha de Internet</Link></li>
                  <li><Link to="/downloads">Downloads</Link></li>
                  <li><Link to="/dados-epidemiologicos">Dados Epidemiológicos</Link></li>
                  <li><Link to="/videos">Vídeos</Link></li>
                </ul>
              </nav>

              {/* Use Routes e Route para gerenciar rotas */}
              <Routes>
                <Route path="/inicio" element={<Inicio />} />
                <Route path="/eventos" element={<Eventos />} />
                {/* Adicione outras rotas conforme necessário */}
              </Routes>
              {/* Renderiza o MainContent com base na página atual */}

              <Footer />
            </Router>
        ) : (
            <Login onLogin={handleLogin} />
        )}
      </div>
  );
}

export default App;
