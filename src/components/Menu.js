//preciso importar um componente do routerDom
import {Link} from 'react-router-dom'
import { useState } from 'react';


function Menu(){
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    };

//estilizando o menu com CSS interno
    const menu = {
        marginBottom: '20px',
        backgroundColor: '#f8f9fa',
        border: '1px solid #dee2e6',
        borderRadius: '4px',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between', // Alterado para espaço entre os itens
        alignItems: 'center', // Alinhado verticalmente ao centro
        justifyItems: 'center'
    };

    const title = {
        fontSize: '1.5em',
        color: '#000',
    };

    const lista = {
        display: 'flex',
        listStyle: 'none',
        padding: 0,
    };
    
      const link = {
        marginRight: '10px',
        textDecoration: 'none',
        color: '#000',
        fontSize: '1em',
      };

    const submenu = {
        display: collapsed ? 'none' : 'block', // Mostrar ou ocultar o submenu com base no estado
        position: 'absolute',
        top: '100%', // Alinhar abaixo do título
        left: 0,
        backgroundColor: '#f8f9fa',
        border: '1px solid #dee2e6',
        borderRadius: '4px',
        padding: '10px',
        listStyle: 'none',
        zIndex: 1, // Certificar-se de que o submenu apareça sobre outros elementos
    };

    return (
        <div id="Menu">
          <nav style={menu}>
            <div style={title}>Sua Saúde Postural</div>
            <ul style={lista}>
              <li><Link style={link} to='/'>Home</Link></li>
              <li><Link style={link} to='/CombateADoencasTransmissiveis'>Combate A Doenças Transmissíveis</Link></li>
              <li><Link style={link} to='/MelhoriaGeralDaSaude'>Melhoria Geral Da Saude</Link></li>
              <li><Link style={link} to='/PrevencaoETratamentoDeDoencasNaoTransmissiveis'>Prevenção E Tratamento De Doenças Não Transmissíveis</Link></li>
              <li><Link style={link} to='/ReducaoDaMortalidadeInfantil'>Redução Da Mortalidade Infantil</Link></li>
            </ul>
          </nav>
        </div>
      );
    }

export default Menu

//para inserir no App.js eu jogo lá 1) import 2) Dentro do return(<nomedoarquivo/>)