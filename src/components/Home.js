//importar imagens:
//import nomedaimagem from "./../imagens/nomedaimagem.png
import '../css/styles.css'

import { useState } from "react"
import { useForm } from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"

//validacoes para meu formulario
const schema = yup.object({
    nome: yup.string().trim().min(5,"Digite seu Nome e Sobrenome").required("Preencha o seu Nome"),
    email: yup.string().trim().email("Digite um e-mail válido!").required("Preencha o seu e-mail"),
    mensagem: yup.string().trim().min(10,"A Mensagem deve conter um mínimo de palavras!").required("Escreva sua mensagem"),
    }).required();

function Home(){

//usando as ferramentas do useForm. Aqui conecto a const schema que criei com o hookForm
    const{ register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

//para armazenar mais de um dado preenchido no formulário
    const [listaUsuario, setListaUsuario] = useState([])

//salvar os dados preenchidos no formulário em localStorage
function salvarEmLocalStorage(dados) {
    const dadosAntigos = JSON.parse(localStorage.getItem('dados')) || [];
    const dadosAtualizados = [...dadosAntigos, dados];
    localStorage.setItem('dados', JSON.stringify(dadosAtualizados));
  }

    //a função para chamar essa lista
    function inserirUsuario(usuario, e){
        setListaUsuario([...listaUsuario, usuario])
        salvarEmLocalStorage(usuario);

        //Exibir alerta de sucesso ao enviar a mensagem
        alert("Sua mensagem foi enviada com sucesso!");

        //limpar formulario
        e.target.reset();
    
    }
    
    return(
        <div>
            <div className="VideoPitch">
                <div className="VideoPitch">Vídeo Pitch</div>
            </div>

            <div className="Formulario">
                <form onSubmit={handleSubmit(inserirUsuario)}>
                    <fieldset>
                    <legend>Fale Conosco</legend>
                    <label>
                        Nome:
                        <input type="text" {...register("nome")} />
                        <span style={{ color: 'red' }}>{errors.nome?.message}</span>
                    </label>
                    <label>
                        E-mail:
                        <input type="text" {...register("email")} />
                        <span style={{ color: 'red' }}>{errors.email?.message}</span>
                    </label>
                    <label>
                        Mensagem:
                        <input type="text" {...register("mensagem")} />
                        <span style={{ color: 'red' }}>{errors.mensagem?.message}</span>
                    </label>
                    <button type="submit">Enviar</button>
                    </fieldset>
                </form>
            </div>
        </div>
   );
}

export default Home

//para inserir no App.js eu jogo lá 1) import 2) Dentro do return(<nomedoarquivo/>)