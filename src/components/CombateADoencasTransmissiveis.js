import React, { useState } from 'react';
import '../css/styles.css';

function CombateADoencasTransmissiveis() {
  const DoencasTransmissiveis = () => {
    const [currentDisease, setCurrentDisease] = useState(0);

    const diseases = [
      {
        title: 'AIDS',
        text: 'O que causa: Enfraquecimento do sistema imunológico.\n\n' +
        'Como é transmitido: Através de uma variedade de fluidos corporais de uma pessoa infectada com HIV, \n\n' +
        'como sangue, leite materno, semen e secreção vaginal. O HIV não é transmitido em ações cotidianas,\n\n' +
        'como aperto de mãos, abraços, beijos, comida ou água.\n\n' +
        'Como prevenir: Uso de preservativos durante o ato sexual, realizar exames para detecção do HIV e \n\n' +
        'outros ISTs.\n\n' +
        'Tratamento: Não há cura, mas a reprodução do vírus é controlada com medicamentos, que permitem que \n\n'+
        'a pessoa tenha uma vida saudável.\n\n' +
        'Números atuais: 39 MM de pessoas vivem com HIV.',
        image: 'img/aids_1.jpg', // caminho da imagem
        icon: 'img/aids.png', // caminho do ícone
      },
      {
        title: 'Tuberculose',
        text: 'O que causa: Tosse Prolongada, dores no peito, fraqueza, fadiga, perda de peso e febre.\n\n' +
        'Como é transmitida: Transmitida pelo ar, quando pessoas infectadas tossem, espirram ou cospem. \n\n' +
        'Como prevenir: Se tiver tuberculose, tenha bons hábitos de higiene ao tossir ou espirrar,\n\n' +
        'use máscara e descarte adequadamente os itens usados para cobrir ou se limpar ao tossir e\n\n' +
        'espirrar.\n\n' +
        'Tratamento: Diagnóstico tempestivo e ministração de medicamentos para combater o parasita.\n\n' +
        'Números atuais: 10.6 MM de pessoas adoeceram por tuberculose em 2022.',
        image: 'img/tuberculose_1.jpg', // caminho da imagem
        icon: 'img/tuberculose.png', // caminho do ícone
      },
      {
        title: 'Doença Tropical',
        text: 'O que causa: Cansaço extremo e fadiga, perda de consciência, convulsões, urina e sangue \n\n'+
        'escuros, olhos e pele amarelados e sangramentos anormais.\n\n' +
        'Como é transmitido: Causada por um parasita, transmitido por uma espécie de mosquito. Não é \n\n'+
        'transmitida entre pessoas.\n\n'+
        'Como prevenir: controle da população de mosquitos, uso de repelentes, desde 2021 a organização\n\n'+
        'mundial de saúde recomenda o uso da vacina RTS,S;\n\n' +
        'Números Atuais: 247MM casos de malária em 2021.',
        image: 'img/doencatropical_1.jpg', // caminho da imagem
        icon: 'img/doencatropical.png', // caminho do ícone
      },
      {
        title: 'Doenças da Água',
        text: 'O que causa: contaminação com diversos tipos de microorganismos prejudiciais a saúde.\n\n' +
        'Como é transmitido: consumo de água proveniente de fontes contaminadas pela poluição.\n\n' +
        'Números: 1.7 bilhões de pessoas consomem água de fontes contaminadas com fezes.',
        image: 'img/agua_1.jpg', // caminho da imagem
        icon: 'img/agua.png', // caminho do ícone
      },
    ];

    const changeDisease = (newIndex) => {
      setCurrentDisease(newIndex);
    };

    return (
        <div className="doencas-container">
          <div
            className="disease-box"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${diseases[currentDisease].image})` }}
          >
            <h2>{diseases[currentDisease].title}</h2>
            <p>{diseases[currentDisease].text}</p>
          </div>
  
          <div className="disease-navigation">
            <button onClick={() => changeDisease((currentDisease - 1 + diseases.length) % diseases.length)}>
              <img
                src={`${process.env.PUBLIC_URL}/${diseases[(currentDisease - 1 + diseases.length) % diseases.length].icon}`}
                alt="Anterior"
                className="disease-icon"
              />
            </button>
  
            <button onClick={() => changeDisease(currentDisease)}>
              <img
                src={`${process.env.PUBLIC_URL}/${diseases[currentDisease].icon}`}
                alt="Ícone Atual"
                className="disease-icon"
              />
            </button>
  
            <button onClick={() => changeDisease((currentDisease + 1) % diseases.length)}>
              <img
                src={`${process.env.PUBLIC_URL}/${diseases[(currentDisease + 1) % diseases.length].icon}`}
                alt="Próximo"
                className="disease-icon"
              />
            </button>
          </div>
        </div>
      );
    };
  
    return <DoencasTransmissiveis />;
  }
  
  export default CombateADoencasTransmissiveis;