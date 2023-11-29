import React from 'react';

function Header() {
    return (
        <header>
            <div className="logo">
                <img
                    src="https://www.cda.sp.gov.br/nova/images/topo_cabecalho.png"
                    alt="Logo do Site"
                />
            </div>
            <nav>
                <ul>
                    <li><a href="/">Início</a></li>
                    <li><a href="/">Eventos</a></li>
                    <li><a href="/">Funcionários</a></li>
                    <li><a href="/">Imagens</a></li>
                    <li><a href="/">Formulários</a></li>
                    <li><a href="/">Sistemas</a></li>
                    <li><a href="/">Senha de Internet</a></li>
                    <li><a href="/">Downloads</a></li>
                    <li><a href="/">Dados Epidemiológicos</a></li>
                    <li><a href="/">Vídeos</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
