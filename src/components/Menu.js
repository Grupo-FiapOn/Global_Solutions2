//preciso importar um componente do routerDom
import '../css/styles.css'
import {Link, NavLink, useLocation} from 'react-router-dom';
import React, {useState, useEffect} from 'react';

function Menu(){
    const [collapsed, setCollapsed] = useState(true);
    const [activeLink, setActiveLink] = useState('/'); //aqui estou iniciando com o link padrao '/'

    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    };
    
    const location = useLocation();

    useEffect(() => {
      // Atualiza o estado do link ativo quando a localização muda
      setActiveLink(location.pathname);
    }, [location]);

    return (
        <div className="Menu">
          <nav className="menu">
            <div className="title">Saúde para o Mundo</div>
            <ul className="lista">
              <li>
                <NavLink className={`link ${activeLink === '/' ? 'bold-link' : ''}`} to="/" 
                onClick={() => setActiveLink('/')}>Home</NavLink>
              </li>
              <li>
                <NavLink className={`link ${activeLink === '/CombateADoencasTransmissiveis' ? 'bold-link' : ''}`} to="/CombateADoencasTransmissiveis"
                onClick={() => setActiveLink('/CombateADoencasTransmissiveis')}>Combate A Doenças Transmissíveis</NavLink>
              </li>
              <li>
                <NavLink className={`link ${activeLink === '/MelhoriaGeralDaSaude' ? 'bold-link' : ''}`} to="/MelhoriaGeralDaSaude"
                onClick={() => setActiveLink('/MelhoriaGeralDaSaude')}>Melhoria Geral Da Saude</NavLink></li>
              <li>
                <NavLink className={`link ${activeLink === '/PrevencaoETratamentoDeDoencasNaoTransmissiveis' ? 'bold-link' : ''}`} to="/PrevencaoETratamentoDeDoencasNaoTransmissiveis"
                onClick={() => setActiveLink('/PrevencaoETratamentoDeDoencasNaoTransmissiveis')}>
              Prevenção E Tratamento De Doenças Não Transmissíveis</NavLink>
              </li>
              <li>
                <NavLink className={`link ${activeLink === '/ReducaoDaMortalidadeInfantil' ? 'bold-link' : ''}`} to="/ReducaoDaMortalidadeInfantil"
                onClick={() => setActiveLink('/ReducaoDaMortalidadeInfantil')}>Redução Da Mortalidade Infantil</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      );
    }

export default Menu

//para inserir no App.js eu jogo lá 1) import 2) Dentro do return(<nomedoarquivo/>)