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
            <h1>
                <img src="https://www.defesa.agricultura.sp.gov.br/images/logoCDA2015-vertical.png" alt="Defesa Agropecuaria" />
            </h1>
            {error && <p className="error-message text-danger">{error}</p>}
            <form>
                <div className="row">
                    <div className="col-sm-12 form-group mt-2 mb-2">
                        <label for="username">Usuário:</label>
                        <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 form-group mt-2 mb-2">
                        <label for="password">Senha:</label>
                        <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <div className="text-center">
                    <button type="button" className="btn btn-primary mt-2" onClick={handleLogin}>Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;