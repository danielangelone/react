import React from 'react';

function Footer() {
    const AnoAtual = new Date().getFullYear();
    return (
        <footer>
            <p className="footer">© {AnoAtual} - Coordenadoria de Defesa Agropecuária do Estado de São Paulo</p>
        </footer>
    );

}

export default Footer;
