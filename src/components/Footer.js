function Footer(){
// Estilo CSS interno
const titulo = {
    fontSize: '1em',
    background: '#313131',
    color: 'white',
    height: '50vh',
    display: 'flex',
    flexDirection: 'column', // Alterado para column para empilhar verticalmente os elementos
    alignItems: 'center', // Alinhado no centro horizontalmente
    justifyContent: 'center', // Alinhado no centro verticalmente
    padding: '20px',
  };

  const lista = {
    listStyle: 'none',
    padding: 0, // Removido o padding padrão
  };

  const integrante = {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '0.8em',
    margin: '10px 0', // Adicionado espaçamento vertical
    justifyContent: 'center',
  };

  const ano ={
    fontSize: '0.7em',
  }

    return(
        <div id="Footer">
            <nav style={titulo}>
                <p>Sua Saúde Postural</p>
                
                <ul style={lista}>
                    <li style={integrante}>Alessandra Vaiano RM 551497</li>
                    <li style={integrante}>Danilo</li>
                    <li style={integrante}>Larissa</li>
                    <li style={integrante}>Lucas</li>
                    <li style={integrante}>Matheus</li>
                </ul>

                <p style={ano}>@2023</p>

            </nav>
            
        </div>
    )

}

export default Footer

//para inserir no App.js eu jogo lá 1) import 2) Dentro do return(<nomedoarquivo/>)