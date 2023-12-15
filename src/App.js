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
import footer from "./components/Footer";
import Funcionarios from "./components/Funcionarios";

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
                  <li><Link to="/inicio" style={{ padding: '5px', textAlign: 'center', clear: 'both', height: '50px' , color: 'black' }}>Início</Link></li>
                  <li><Link to="/eventos" style={{ padding: '5px', textAlign: 'center', clear: 'both', height: '50px' , color: 'black' }}>Eventos</Link></li>
                  <li><Link to="/funcionarios" style={{ padding: '5px', textAlign: 'center', clear: 'both', height: '50px' , color: 'black' }}>Funcionários</Link></li>
                  <li><Link to="/imagens" style={{ padding: '5px', textAlign: 'center', clear: 'both', height: '50px' , color: 'black' }}>Imagens</Link></li>
                  <li><Link to="/formularios" style={{ padding: '5px', textAlign: 'center', clear: 'both', height: '50px' , color: 'black' }}>Formulários</Link></li>
                  <li><Link to="/sistemas" style={{ padding: '5px', textAlign: 'center', clear: 'both', height: '50px' , color: 'black' }}>Sistemas</Link></li>
                  <li><Link to="/senha-internet" style={{ padding: '5px', textAlign: 'center', clear: 'both', height: '50px' , color: 'black' }}>Senha de Internet</Link></li>
                  <li><Link to="/downloads" style={{ padding: '5px', textAlign: 'center', clear: 'both', height: '50px' , color: 'black' }}>Downloads</Link></li>
                  <li><Link to="/dados-epidemiologicos" style={{ padding: '5px', textAlign: 'center', clear: 'both', height: '50px' , color: 'black' }}>Dados Epidemiológicos</Link></li>
                  <li><Link to="/videos" style={{ padding: '5px', textAlign: 'center', clear: 'both', height: '50px' , color: 'black' }}>Vídeos</Link></li>
                </ul>
              </nav>

              {/* Use Routes e Route para gerenciar rotas */}
              <Routes>
                <Route path="/inicio" element={<Inicio />} />
                <Route path="/eventos" element={<Eventos />} />
                <Route path="/Funcionarios" element={<Funcionarios />} />
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
