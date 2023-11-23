//importar imagens:
//import nomedaimagem from "./../imagens/nomedaimagem.png
import '../css/styles.css'

function CombateADoencasTransmissiveis(){

    return(
        <div className="CombateADoencasTransmissiveis">
            <h2>Combate A Doenças Transmissíveis</h2>
           
            <h3 className="AIDS">AIDS</h3>
            <p>O que causa: Enfraquecimento do sistema imunológico
Como é transmitido: Através de uma variedade de fluidos corporais de uma pessoa infectada com HIV, como sangue, 
leite materno, semen e secreção vaginal. 
O HIV não é transmitido em ações cotidianas, como aperto de mãos, abraços, beijos, comida ou água.
Como previnir:uso de preservativos durante ato sexual, realizar exames para detecção do HIV e outros ISTs
Tratamento: Não há cura, mas a reprodução do virus é controlada com medicamentos, que permitem que a pessoa 
tenha uma vida saudável.
Números atuais: 39 MM de pessoas vivem com HIV</p>

            <h3 className="Tuberculose">Tuberculose:</h3>
            <p>O que causa: Tosse Prolongada, dores no peito, fraqueza, fadiga, perda de peso e febre.
Como é transmitido: transmitido pelo ar, quando pessoas infectadas tossem, espirram ou cospem.
Como previnir: Se tiver tuberculose, tenha bons hábitos de higiene ao tossir ou espirrar, use máscara e descarte 
adequadamente os itens usados para cobrir ou se limpar ao tossir e espirrar.
Tratamento:Diagnostico tempestivo e ministração de medicamentos para combater o parasita.
Números atuais: 10.6 MM de pessoas adoeceram por tuberculose em 2022.</p>

            <h3 className="DoencasTropicais:">Doenças Tropicais:</h3>
            <p>O que causa: Cansaço extremo e fadiga, perda de consciência, convulsões, urina e sangue escuros, olhos e pele 
amarelados e sangramentos anormais.
Como é transmitido: Causada por um parasita, transmitido por uma espécie de mosquito. Não é transmitida entre 	pessoas.
Como previnir: controle da população de mosquitos, uso de repelentes, desde 2021 a organização mundial de saúde
recomenda o uso da vacina RTS,S;
Números Atuais: 247MM casos de malária em 2021. </p>

            <h3 className="DoencasDAgua">Doenças d'água:</h3>
            <p>O que causa: contaminação com diversos tipos de microorganismos prejudiciais a saúde
Como é transmitido: consumo de água proveniente de fontes contaminadas pela poluição.
Números: 1.7 bilhões de pessoas consomem água de fontes contaminadas com fezes.</p>

            {/*para inserir a imagem:
            <img src={nomedaimagem} alt='descrição da imagem' /> 
            obs: a imagem precisa estar dentro da pasta imagens*/}
        </div>
    )

}

export default CombateADoencasTransmissiveis

//para inserir no App.js eu jogo lá 1) import 2) Dentro do return(<nomedoarquivo/>)