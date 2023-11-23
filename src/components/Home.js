//importar imagens:
//import nomedaimagem from "./../imagens/nomedaimagem.png

import { useState } from "react";
import { useForm } from "react-hook-form";
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
    
    // css pro formulario
    const inputStyle = {
        width: '100%',
        padding: '0.375rem 0.75rem',
        border: '1px solid #ced4da',
        borderRadius: '0.25rem',
        marginTop: '0.5rem',
      };
    
      const buttonStyle = {
        display: 'inline-block',
        fontWeight: '400',
        color: '#212529',
        textAlign: 'center',
        verticalAlign: 'middle',
        userSelect: 'none',
        backgroundColor: '#f8f9fa',
        border: '1px solid #ced4da',
        padding: '0.375rem 0.75rem',
        fontSize: '1rem',
        lineHeight: '1.5',
        borderRadius: '0.25rem',
        transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
        cursor: 'pointer',
        marginTop: '0.5rem',
      };

    return(
        <div>
            <div id="Home">
                <h2>Vídeo Pitch</h2>
                <p>Conteúdo</p>
                {/*para inserir a imagem:
                <img src={nomedaimagem} alt='descrição da imagem' /> 
                obs: a imagem precisa estar dentro da pasta imagens*/}
            </div>

            <div id="Formulario">
                <form onSubmit={handleSubmit(inserirUsuario)}>
                <fieldset>
                    <legend>Fale Conosco</legend>
                    <label style={{ display: 'block' }}>
                    Nome:
                    <input type="text" style={inputStyle} {...register("nome")} />
                    <span style={{ color: 'red' }}>{errors.nome?.message}</span>
                    </label>
                    <label style={{ display: 'block' }}>
                    E-mail:
                    <input type="text" style={inputStyle} {...register("email")} />
                    <span style={{ color: 'red' }}>{errors.email?.message}</span>
                    </label>
                    <label style={{ display: 'block' }}>
                    Mensagem:
                    <input type="text" style={inputStyle} {...register("mensagem")} />
                    <span style={{ color: 'red' }}>{errors.mensagem?.message}</span>
                    </label>
                    <button type="submit" style={buttonStyle}>Enviar</button>
                </fieldset>
                </form>
            </div>
    

        </div>
    )

}

export default Home

//para inserir no App.js eu jogo lá 1) import 2) Dentro do return(<nomedoarquivo/>)