//importar imagens:
//import nomedaimagem from "./../imagens/nomedaimagem.png
import '../css/styles.css'

function MelhoriaGeralDaSaude(){

    return(
        <div className="MelhoriaGeralDaSaude">
            <h2>Melhoria Geral Da Saude</h2>
            <p>Conteúdo</p>
            {/*para inserir a imagem:
            <img src={nomedaimagem} alt='descrição da imagem' /> 
            obs: a imagem precisa estar dentro da pasta imagens*/}
        </div>
    )

}

export default MelhoriaGeralDaSaude

//para inserir no App.js eu jogo lá 1) import 2) Dentro do return(<nomedoarquivo/>)