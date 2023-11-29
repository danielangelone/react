import React, { useState } from 'react';

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

function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (username && password) {
            // Simular verificação do nome de usuário e senha
            if (username === 'defesa' && password === 'zonalivre') {
                setCookie('isLoggedIn', 'true', 1); // Expira em 1 dia (24 horas)
                onLogin(username, password);
                setError('');
            } else {
                setError('Nome de usuário ou senha incorretos.');
            }
        } else {
            setError('Por favor, insira nome de usuário e senha.');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            {error && <p className="error-message">{error}</p>}
            <label>
                Usuário:
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <label>
                Senha:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;