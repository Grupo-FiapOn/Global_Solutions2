//importar imagens:
//import nomedaimagem from "./../imagens/nomedaimagem.png

function Home(){

    return(
        <div>
            <div id="Home">
                <h2>HOME</h2>
                <p>Conteúdo</p>
                {/*para inserir a imagem:
                <img src={nomedaimagem} alt='descrição da imagem' /> 
                obs: a imagem precisa estar dentro da pasta imagens*/}
            </div>

            <div id="Formulario">
                <form>
                    <fieldset>
                        <legend>Fale Conosco</legend>
                        <label>Nome:
                            <input type="text" name="nome"/>
                        </label>
                        <label>E-mail:
                            <input type="text" name="email"/>
                        </label>
                        <label>Mensagem:
                            <input type="text" name="mensagem"/>
                        </label>
                        <button type="submit">Enviar</button>
                       {/* alert("Sua mensagem foi enviada com sucesso!") 
                       também preciso validar o formulário, máximo de letras no nome e apenas text
                       email tem que ter @ */}
                    </fieldset>
                </form>
            </div>
            
        </div>
    )

}

export default Home

//para inserir no App.js eu jogo lá 1) import 2) Dentro do return(<nomedoarquivo/>)