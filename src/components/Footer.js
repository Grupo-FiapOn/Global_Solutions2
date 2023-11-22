//preciso importar um componente do routerDom
import {Link} from 'react-router-dom'


function Footer(){
//estilizando o menu com CSS interno
    const menu={
        background: '#313131',
        color: 'white',
        height: '50vh',
        display: 'flex',
        
    }
    const lista={
        
        listStyle: 'none',
    }
    const link={
        textDecoration: 'none',
        display: 'inlineBlock',
        padding:'20px',
        color:'#fff',
        fontSize:'1em'
    }


    return(
        <div id="Footer">
            <nav style={menu}>
                <p>Sua Saúde Postural</p>
                
                <ul style={lista}>
                    <li style={link}>Alessandra Vaiano</li>
                    <li style={link}>Danilo</li>
                    <li style={link}>Larissa</li>
                    <li style={link}>Lucas</li>
                    <li style={link}>Matheus</li>
                </ul>

                <p>2023</p>

            </nav>
            
        </div>
    )

}

export default Footer

//para inserir no App.js eu jogo lá 1) import 2) Dentro do return(<nomedoarquivo/>)