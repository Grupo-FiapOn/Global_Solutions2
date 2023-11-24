import React from 'react'
import YouTube from 'react-youtube'
import '../css/styles.css'

import { useState } from "react"
import { useForm } from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"

//validacoes para meu formulario
const schema = yup.object({
    nome: yup.string().trim().matches(/^[A-Za-z ]*$/, 'O nome deve conter apenas letras e espaços').min(5,"Digite seu Nome e Sobrenome").required("Preencha o seu Nome"),
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
    
    const videoOptions = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 1,
        },
      };
    
      const videoId = 'https://www.youtube.com/watch?v=pUCe_F2XUdw'; // Replace with your actual YouTube video ID
    

    return(
        <div>
            <div className="VideoPitch">
                <div className="VideoPitch">Vídeo Pitch</div>
                <YouTube videoId={videoId} opts={videoOptions} />
            </div>

            <div className='textohome'>

                <p>O aplicativo "Sua Saúde Postural" visa abordar o desafio contemporâneo de negligenciar a saúde física em meio
                 à crescente dependência dos meios digitais. Sua proposta é interromper temporariamente 
                 o uso do celular ou dispositivo cadastrado, incentivando os usuários a realizarem breves sessões de alongamento.</p> 
                <p> Ao priorizar a saúde postural, o aplicativo busca combater os efeitos adversos do sedentarismo associados ao 
                 uso prolongado de dispositivos eletrônicos. Seu diferencial reside na variedade dinâmica de exercícios oferecidos, 
                 garantindo que os usuários desfrutem de diferentes alongamentos ao longo do tempo, evitando monotonia e promovendo 
                 a adesão a hábitos saudáveis. "Sua Saúde Postural" emerge como uma solução inovadora, alinhando o mundo digital ao 
                 bem-estar físico em um estilo de vida equilibrado.</p>
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