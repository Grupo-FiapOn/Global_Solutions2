//preciso importar um componente do routerDom
import '../css/styles.css'
import {Link} from 'react-router-dom'
import { useState } from 'react';


function Menu(){
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    };
    
    return (
        <div className="Menu">
          <nav className="menu">
            <div className="title">Sua Saúde Postural</div>
            <ul className="lista">
              <li><Link className="link" to='/'>Home</Link></li>
              <li><Link className="link" to='/CombateADoencasTransmissiveis'>Combate A Doenças Transmissíveis</Link></li>
              <li><Link className="link" to='/MelhoriaGeralDaSaude'>Melhoria Geral Da Saude</Link></li>
              <li><Link className="link" to='/PrevencaoETratamentoDeDoencasNaoTransmissiveis'>Prevenção E Tratamento De Doenças Não Transmissíveis</Link></li>
              <li><Link className="link" to='/ReducaoDaMortalidadeInfantil'>Redução Da Mortalidade Infantil</Link></li>
            </ul>
          </nav>
        </div>
      );
    }

export default Menu

//para inserir no App.js eu jogo lá 1) import 2) Dentro do return(<nomedoarquivo/>)