import React from 'react';

// Remova a importação não utilizada (se Inicio não for usado neste arquivo)
// import Inicio from "./Inicio";

function Header() {
    return (
        <header>
            <div className="logo">
                <img
                    src="https://www.cda.sp.gov.br/nova/images/topo_cabecalho.png"
                    alt="Logo do Site"
                    className="logo-image" // Adicione uma classe para estilos
                />
            </div>

        </header>
    );
}

export default Header;
