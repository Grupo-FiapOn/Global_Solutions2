//importar imagens:
//import nomedaimagem from "./../imagens/nomedaimagem.png

import { useState } from "react";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"

//validacoes para meu formulario
const schema = yup.object({
    nome: yup.string().min(5,"O Nome deve conter no mínimo 5 caracteres!").required("Preencha o seu Nome"),
    email: yup.string().email("Digite um e-mail válido!").required("Preencha o seu e-mail"),
    mensagem: yup.string().min(10,"A Mensagem deve conter pelo menos 10 caracteres!").required("Escreva sua mensagem"),
    }).required();

function Home(){

//usando as ferramentas do useForm. Aqui conecto a const schema que criei com o hookForm
    const{ register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

//para armazenar mais de um dado preenchido no formulário
    const [listaUsuario, setListaUsuario] = useState([])
//a função para chamar essa lista
    function inserirUsuario(usuario){
        setListaUsuario([...listaUsuario, usuario])
    }
    
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
                <form onSubmit={handleSubmit(inserirUsuario)}>
                    <fieldset>
                        <legend>Fale Conosco</legend>
                        <label>Nome:
                            <input type="text" {...register("nome")}/>
                            <span>{errors.nome?.message}</span> {/*aqui eu chamo a validação que fiz no const schema = yup.object*/}
                        </label>
                        <label>E-mail:
                            <input type="text" {...register("email")}/>
                            <span>{errors.email?.message}</span>
                        </label>
                        <label>Mensagem:
                            <input type="text" {...register("mensagem")}/>
                            <span>{errors.mensagem?.message}</span>
                        </label>
                        <button type="submit">Enviar</button>
                       {/* alert("Sua mensagem foi enviada com sucesso!") 
                       precisa armazenar esses dados num .json? api?*/}
                    </fieldset>
                </form>
                <div id="armazenarUsuario">
                    {listaUsuario.map((usu,index)=>
                        <div id="dados" key={index}>
                            <p>Nome: {usu.nome}</p>
                            <p>Email: {usu.email}</p>
                            <p>Mensagem: {usu.mensagem}</p>
                        </div>
                    )}
                </div>
            </div>

        </div>
    )

}

export default Home

//para inserir no App.js eu jogo lá 1) import 2) Dentro do return(<nomedoarquivo/>)