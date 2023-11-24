import React, { useState } from 'react';
import '../css/styles.css';

function PrevencaoETratamentoDeDoencasNaoTransmissiveis() {
  const PrevencaoTratamento = () => {
    const [currentItemAtividade, setCurrentItemAtividade] = useState(0);
    const [currentItemAlimentacao, setCurrentItemAlimentacao] = useState(0);

    const categories = {
      atividadeFisica: {
        title: 'A Atividade Física Previne',
        list: [
          '52% da hipertensão arterial',
          '48% das doenças cardiovasculares',
          '16% do câncer de cólon',
          '14% do diabetes',
          '10% do câncer de mama',
        ],
      },
      alimentacao: {
        title: 'Uma Alimentação Balanceada Previne',
        list: [
          '61% do diabetes tipo 2',
          '34% do câncer de endometriose',
          '30% das doenças da vesícula biliar',
          '24% da osteoartrose',
          '17% das doenças cardiovasculares',
          '17% da hipertensão arterial',
          '11% do câncer de intestino',
          '11% do câncer de mama',
        ],
      },
    };

    const nextItem = (category) => {
      if (category === 'atividadeFisica') {
        setCurrentItemAtividade((prevItem) => (prevItem + 1) % categories['atividadeFisica'].list.length);
      } else {
        setCurrentItemAlimentacao((prevItem) => (prevItem + 1) % categories['alimentacao'].list.length);
      }
    };

    const prevItem = (category) => {
      if (category === 'atividadeFisica') {
        setCurrentItemAtividade(
          (prevItem) =>
            (prevItem - 1 + categories['atividadeFisica'].list.length) %
            categories['atividadeFisica'].list.length
        );
      } else {
        setCurrentItemAlimentacao(
          (prevItem) =>
            (prevItem - 1 + categories['alimentacao'].list.length) % categories['alimentacao'].list.length
        );
      }
    };

    return (
      <div className="prevencao-container">
        <div className="prevencao-box">
          <h2>Prevenção e Tratamento de Doenças Não Transmissíveis</h2>
          <h3>Um Guia Rápido:</h3>
          <p>
            As doenças não transmissíveis são responsáveis por 72% das mortes no Brasil! Os impactos
            negativos na saúde física, mental e na rotina alimentar aumentam esses riscos.
          </p>
          <p>
            O tabagismo, consumo excessivo de álcool, dietas inadequadas e falta de atividade física
            representam 51% das mortes por doenças crônicas.
          </p>
          <h5>O Controle dessas doenças depende de hábitos e ações que melhoram a qualidade de vida</h5>
        </div>

        <div className="prevencao-categories-container">
          <div className="prevencao-category">
            <h4>{categories['atividadeFisica'].title}</h4>
            <ul>
              <li>{categories['atividadeFisica'].list[currentItemAtividade]}</li>
            </ul>
            <div className="prevencao-icons">
              <button onClick={() => prevItem('atividadeFisica')}>
                <img src={`${process.env.PUBLIC_URL}img/setaesq.png`} alt="Ícone Anterior" />
              </button>
              <button onClick={() => nextItem('atividadeFisica')}>
                <img src={`${process.env.PUBLIC_URL}img/setadir.png`} alt="Ícone Próximo" />
              </button>
            </div>
          </div>

          <div className="prevencao-category">
            <h4>{categories['alimentacao'].title}</h4>
            <ul>
              <li>{categories['alimentacao'].list[currentItemAlimentacao]}</li>
            </ul>
            <div className="prevencao-icons">
              <button onClick={() => prevItem('alimentacao')}>
                <img src={`${process.env.PUBLIC_URL}img/setaesq.png`} alt="Ícone Anterior" />
              </button>
              <button onClick={() => nextItem('alimentacao')}>
                <img src={`${process.env.PUBLIC_URL}img/setadir.png`} alt="Ícone Próximo" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <PrevencaoTratamento />;
}

export default PrevencaoETratamentoDeDoencasNaoTransmissiveis;
