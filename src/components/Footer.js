import '../css/styles.css'

function Footer(){

    return (
    <div className="Footer">
      <nav className="titulo">
        <p>Sua Saúde Postural</p>

        <ul className="lista">
          <li className="integrante">Alessandra Vaiano RM 551497</li>
          <li className="integrante">Danilo</li>
          <li className="integrante">Larissa</li>
          <li className="integrante">Lucas</li>
          <li className="integrante">Matheus</li>
        </ul>

        <p className="ano">@2023</p>
      </nav>
    </div>
  );
}

export default Footer

//para inserir no App.js eu jogo lá 1) import 2) Dentro do return(<nomedoarquivo/>)