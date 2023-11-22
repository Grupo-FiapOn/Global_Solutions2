//preciso importar um componente do routerDom
import {Link} from 'react-router-dom'


function Menu(){
//estilizando o menu com CSS interno
    const menu={
        background: 'darkblue',
        color: 'black',
        height: '15vh',
        display: 'flex',
        justifyContent: 'center'
    }
    const lista={
        display: 'flex',
        listStyle: 'none',
    }
    const link={
        textDecoration: 'none',
        display: 'inlineBlock',
        padding:'20px',
        color:'#fff',
        fontSize:'1.5em'
    }


    return(
        <div id="Menu">
            <nav style={menu}>
                <ul style={lista}>
                    <li><Link style={link} to='/'>Home</Link></li>
                    <li><Link style={link} to='/CombateADoencasTransmissiveis'>Combate A Doenças Transmissíveis</Link></li>
                    <li><Link style={link} to='/MelhoriaGeralDaSaude'>Melhoria Geral Da Saude</Link></li>
                    <li><Link style={link} to='/PrevencaoETratamentoDeDoencasNaoTransmissiveis'>Prevenção E Tratamento De Doenças Não Transmissíveis</Link></li>
                    <li><Link style={link} to='/ReducaoDaMortalidadeInfantil'>Redução Da Mortalidade Infantil</Link></li>
                </ul>

            </nav>
            
        </div>
    )

}

export default Menu

//para inserir no App.js eu jogo lá 1) import 2) Dentro do return(<nomedoarquivo/>)