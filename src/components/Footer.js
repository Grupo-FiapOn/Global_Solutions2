import '../css/styles.css'

function Footer(){

    return (
    <div className="Footer">
      <nav className="titulo">
          <p>Saúde para o Mundo</p>
          <ul className="lista">
          <li className="integrante">Alessandra Vaiano RM 551497</li>
          <li className="integrante">Danilo Yoshihara RM 98736</li>
          <li className="integrante">Larissa Torres RM 99298 </li>
          <li className="integrante">Lucas Duda RM 99442 </li>
          <li className="integrante">Matheus Zornig RM 551845</li>
        </ul>

        <p className="ano">@2023</p>
      </nav>
    </div>
  );
}

export default Footer

//para inserir no App.js eu jogo lá 1) import 2) Dentro do return(<nomedoarquivo/>)