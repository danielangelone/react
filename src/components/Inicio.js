import React from 'react';

const Inicio = () => {
    return (
        <div id="corpo">
            <table border="0" cellSpacing="0" cellPadding="0" width="98%" align="center">
                <tbody>
                <tr>
                    <td></td>
                    <td> </td>
                    <td></td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td bgcolor="#ffffff" width="100%">
                        <table cellSpacing="0" cellPadding="0" align="center" width="100%" height="0" border="0">
                            <tbody>
                            <tr>
                                <td valign="top">
                                    <div className="destaque_intranet">
                                        <div id="borda">
                                            <div style={{ padding: '5px', textAlign: 'center', clear: 'both', height: '50px' }}>
                                                <div style={{ padding: '5px', width: '215px', float: 'left' }}>
                                                    <img src="https://www.cda.sp.gov.br/nova/www/home2/images/acesso_rh.jpg" alt="Acesso RH" />
                                                </div>
                                            </div>
                                            <div className="boxl">

                                                <div className="guia">
                                                    <img
                                                        src="https://www.cda.sp.gov.br/nova/www/home2/images/guia_servidor.jpg"
                                                        alt="guia_servidor"
                                                    />
                                                </div>
                                                <div className="guia">
                                                    <img
                                                        src="https://www.cda.sp.gov.br/nova/www/home2/images/guia_captacao.jpg"
                                                        alt="guia_servidor"
                                                    />
                                                </div>
                                                <div className="guia">
                                                    <img
                                                        src="https://www.cda.sp.gov.br/nova/www/home2/images/guia_teletrabalho.jpg"
                                                        alt="guia_teletrabalho"
                                                    />
                                                </div>
                                                <div className="guia">
                                                    <img
                                                        src="https://www.cda.sp.gov.br/nova/www/home2/images/guia_saude.jpg"
                                                        alt="guia_saude"
                                                    />
                                                </div>
                                                <div className="guia">
                                                    <img
                                                        src="https://www.cda.sp.gov.br/nova/www/home2/images/guia_times.jpg"
                                                        alt="guia_times"
                                                    />
                                                </div>
                                                <div className="guia">
                                                    <img
                                                        src="https://www.cda.sp.gov.br/nova/www/home2/images/comunica_saa.jpg"
                                                        alt="comunica_saa"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ padding: '9px', width: '215px', float: 'center' }}>
                                            <img style={{ padding: '10px', float: 'left' }} src="https://www.cda.sp.gov.br/nova/www/home2/images/agenda2.jpg" alt="Agenda" />
                                            <br />
                                            <br />
                                            <iframe
                                                src="https://calendar.google.com/calendar/u/0/embed?src=decesun.cda@gmail.com&amp;ctz=America/Sao_Paulo"
                                                width="425"
                                                height="355"
                                                frameBorder="0"
                                            ></iframe>
                                        </div>
                                    </div>
                                    <ul className="listaNav listaNavSimples"></ul>
                                </td>
                                <td valign="top">
                                    <div style={{ padding: '0 10px' }}>
                                        <table cellSpacing="0" cellPadding="0" align="center" width="400" height="0" border="0">
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <br />
                                                    <div className="destaque_intranet destaque_intranet_webmail" style={{ margin: '1px 0px' }}>
                                                        <img
                                                            style={{ margin: '12px 10px' }}
                                                            src="https://www.cda.sp.gov.br/nova/images/destaqueServicoWebmailTitle.png"
                                                            border="0"
                                                            align="left"
                                                            alt="Serviço Webmail"
                                                        />
                                                        <br />
                                                        <br />
                                                        <br />
                                                        <form
                                                            className="fechabloco"
                                                            method="post"
                                                            name="loginForm"
                                                            action="https://mail.cda.sp.gov.br/"
                                                            acceptCharset="UTF-8"
                                                        >
                                                            <input type="hidden" name="loginOp" value="login" />
                                                            <input type="hidden" name="client" value="preferred" />
                                                            <input
                                                                size="30"
                                                                style={{ width: '230px' }}
                                                                type="text"
                                                                placeholder="E-mail"
                                                                tabIndex="1"
                                                                id="username"
                                                                name="username"
                                                                maxLength="1024"
                                                                autoCapitalize="off"
                                                                value=""
                                                            />
                                                            <input
                                                                size="17"
                                                                style={{ width: '90px' }}
                                                                type="password"
                                                                placeholder="Senha"
                                                                tabIndex="2"
                                                                id="password"
                                                                name="password"
                                                                autoComplete="off"
                                                                value=""
                                                                maxLength="1024"
                                                            />
                                                            <input
                                                                type="submit"
                                                                style={{ margin: '0px 10px', width: '90px' }}
                                                                name="loginButton"
                                                                id="loginButton"
                                                                tabIndex="3"
                                                                value="Acessar"
                                                            />
                                                        </form>
                                                    </div>
                                                    <br />
                                                    &nbsp;
                                                    <div
                                                        id="localiza_funcionario"
                                                        className="destaque_intranet destaque_intranet_webmail"
                                                        style={{ height: '107px' }}
                                                    >
                                                        <img
                                                            style={{ margin: '12px 10px' }}
                                                            src="https://www.cda.sp.gov.br/nova/images/destaqueServicoLocalizarTitle.png"
                                                            border="0"
                                                            align="left"
                                                            alt="Localizar Funcionários"
                                                        />
                                                        <br />
                                                        <form
                                                            className="fechabloco"
                                                            style={{ margin: '12px 10px' }}
                                                            name="localiza"
                                                            id="funcionarios"
                                                            action="https://www.cda.sp.gov.br/nova/www/localiza/index.php"
                                                            method="post"
                                                            target="_parent"
                                                        >
                                                            <input
                                                                type="text"
                                                                style={{ width: '345px' }}
                                                                placeholder="Digite o nome"
                                                                tabIndex="4"
                                                                id="nome_funcionario"
                                                                size="52px"
                                                                name="nome_funcionario"
                                                                value=""
                                                            />
                                                            <input
                                                                type="submit"
                                                                style={{ width: '90px' }}
                                                                className="loginButton"
                                                                name="buscar_funcionario"
                                                                id="buscar_funcionario"
                                                                tabIndex="5"
                                                                value=" Buscar "
                                                            />
                                                        </form>
                                                    </div>
                                                    <div className="boxk">
                                                        <div className="destaque_intranet" style={{ width: '495px' }}>
                                                            <div id="borda" style={{ width: '495px' }}>

                                                                <div style={{ padding: '0px', textAlign: 'center', clear: 'both', height: '70px' }}>
                                                                    <div style={{ width: '248px', float: 'left', paddingLeft: '27px' }}>
                                                                        <a href="https://mail.cda.sp.gov.br/" target="_blank">
                                                                            <img src="https://www.cda.sp.gov.br/nova/www/home2/images/webmail_zimbra.jpg" alt="Webmail Zimbra" />
                                                                        </a>
                                                                    </div>
                                                                    <div style={{ width: '220px', float: 'left' }}>
                                                                        <a href="www/sempapel/index.php" target="_parent">
                                                                            <img src="https://www.cda.sp.gov.br/nova/www/home2/images/sempapel.jpg" alt="Sem Papel" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div style={{ padding: '0px', textAlign: 'center', clear: 'both', height: '70px' }}>
                                                                    <div style={{ width: '248px', float: 'left', paddingLeft: '27px' }}>
                                                                        <a href="https://sistemas.defesa.agricultura.sp.gov.br/convocacoes/" target="_blank">
                                                                            <img src="https://www.cda.sp.gov.br/nova/www/home2/images/convocacoes.jpg" alt="Convocações" />
                                                                        </a>
                                                                    </div>
                                                                    <div style={{ width: '220px', float: 'left' }}>
                                                                        <a href="https://sistemas.defesa.agricultura.sp.gov.br/defesa-logon/?sistema=DIARIAS" target="_blank">
                                                                            <img src="https://www.cda.sp.gov.br/nova/www/home2/images/diarias.jpg" alt="Diárias" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div style={{ padding: '0px', textAlign: 'center', clear: 'both', height: '70px' }}>
                                                                    <div style={{ width: '248px', float: 'left', paddingLeft: '27px' }}>
                                                                        <a href="https://portal.fazenda.sp.gov.br/servicos/folha/" target="_blank">
                                                                            <img src="https://www.cda.sp.gov.br/nova/www/home2/images/ra.jpg" alt="Holerite" />
                                                                        </a>
                                                                    </div>
                                                                    <div style={{ width: '220px', float: 'left' }}>
                                                                        <a href="www/ramais/index_eda.php" target="_parent">
                                                                            <img src="https://www.cda.sp.gov.br/nova/www/home2/images/office.jpg" alt="Eda" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div style={{ padding: '0px', textAlign: 'center', clear: 'both', height: '70px' }}>
                                                                    <div style={{ width: '248px', float: 'left', paddingLeft: '27px' }}>
                                                                        <a href="https://portal.fazenda.sp.gov.br/servicos/folha/" target="_blank">
                                                                            <img src="https://www.cda.sp.gov.br/nova/www/home2/images/holerite.jpg" alt="Holerite" />
                                                                        </a>
                                                                    </div>
                                                                    <div style={{ width: '220px', float: 'left' }}>
                                                                        <a href="www/ramais/index_eda.php" target="_parent">
                                                                            <img src="https://www.cda.sp.gov.br/nova/www/home2/images/recadastramento.jpg" alt="Eda" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                {/* ...
                                                                 */}
                                                                <div style={{ padding: '0px', textAlign: 'center', clear: 'both', height: '70px' }}>
                                                                    <div style={{ width: '248px', float: 'left', paddingLeft: '27px' }}>
                                                                        <a href="www/ramais/index_celulares.php" target="_parent">
                                                                            <img src="https://www.cda.sp.gov.br/nova/www/home2/images/celular.jpg" alt="Celular" />
                                                                        </a>
                                                                    </div>
                                                                    <div style={{ width: '220px', float: 'left' }}>
                                                                        <a href="https://intranet.agricultura.sp.gov.br" target="_blank">
                                                                            <img src="https://www.cda.sp.gov.br/nova/www/home2/images/Agridoc.jpg" alt="Agridoc" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div style={{ padding: '0px', textAlign: 'center', clear: 'both', height: '70px' }}>
                                                                    <div style={{ width: '248px', float: 'left', paddingLeft: '27px' }}>
                                                                        <a href="www/ramais/index_sede.php" target="_parent">
                                                                            <img src="https://www.cda.sp.gov.br/nova/www/home2/images/sede.jpg" alt="Sede" />
                                                                        </a>
                                                                    </div>
                                                                    <div style={{ width: '220px', float: 'left' }}>
                                                                        <a href="www/ramais/index_eda.php" target="_parent">
                                                                            <img src="https://www.cda.sp.gov.br/nova/www/home2/images/eda.jpg" alt="Eda" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </td>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Inicio;
