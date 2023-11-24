import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/styles.css';


function ReducaoDaMortalidadeInfantil(){
    // Configurações do Slider
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true, 
        centerPadding: '0', 
      };
    

    return(
        <div className="ReducaoDaMortalidadeInfantil">
            
            <Slider {...settings}>
                    <div>
                        <h3>Taxa de Mortalidade Infantil no Brasil</h3>
                        <img className="imagem" src={process.env.PUBLIC_URL + '/img/mortalidadeinfantil.png'} alt="Gráfico de Mortalidade Infantil" />
                    </div>
                    <div>
                        <h3>Dados</h3>
                        <p> Segundo dados da Organização Mundial da Saúde (OMS), em 2019, a taxa global de mortalidade infantil era de aproximadamente 38 mortes por 1.000 nascidos vivos.</p>
                        <p>As principais causas de morte em crianças menores de 5 anos são: complicações de parto prematuro, asfixia/trauma durante o parto, pneumonia, diarreia e malária, todas as quais podem ser prevenidas ou tratadas com acesso a intervenções acessíveis em saúde e saneamento.</p>
                        <p>A comunidade internacional estabeleceu o Objetivo de Desenvolvimento Sustentável (ODS) número 3, que inclui a meta de reduzir a taxa de mortalidade neonatal e infantil.</p>
                        <p>Desde 1990, a taxa global de mortalidade de menores de 5 anos caiu 60%, de 93 mortes por 1000 recém-nascidos em 1990 para 37 em 2020. Isto equivale a 1 em 11 crianças que morrem antes de completar 5 anos em 1990, em comparação com 1 em 27 em 2020.</p>
                            
                        <p> Essas informações fornecem uma visão geral em relação à mortalidade infantil, de modo a conscientizar na busca de soluções para tal problemática, já que essas taxas são indicadores não somente da saúde infantil, mas da saúde de uma sociedade.</p>
                    </div>
                    <div>
                        <h3>Principais Desafios e Causas</h3>
                        
                        <p>A mortalidade infantil é uma problemática complexa, a qual se relaciona com uma combinação de fatores sociais, econômicos e de saúde. 
                        A iniciativa global de combatê-la tem mostrado avanços ao longo das últimas décadas, mas essa questão ainda persiste e deve ser solucionada. A seguir estão os desafios enfrentados quanto à mortalidade infantil:</p>
                            
                            <ul>
                                <li>Desnutrição</li>
                                <li>Complicações no Parto</li>
                                <li>Fatores Socioeconômicos</li>
                                <li>Gravidez na Adolescência</li>
                                <li>Baixa Cobertura de Vacinação</li>
                                <li>Falta de Educação Materna</li>
                                <li>Doenças Infecciosas</li>
                                <li>Condições Sanitárias Precárias</li>
                            </ul>
                    </div>
                    <div>
                        <h3>Possíveis Soluções</h3>
                        <p>É notório que se faz necessário a iniciativa da cooperação generalizada em torno desse tema, uma vez que ao proteger a vida das crianças estaremos protegendo o futuro da sociedade e, por consequência, seu sucesso. Essas são algumas medidas que podem ser tomadas em torno disso:</p>
                            <ul>
                                <li>Melhoria no Acesso à Saúde</li>
                                <li>Acesso Universal a Vacinas</li>
                                <li>Cooperação Global</li>
                                <li>Promoção de Práticas Culturais Saudáveis</li>
                                <li>Inovações em Tecnologia da Saúde</li>
                                <li>Combate Ativo contra a Desnutrição</li>
                            </ul>
                    </div>
            </Slider>    
        </div>
        
        )

}

export default ReducaoDaMortalidadeInfantil