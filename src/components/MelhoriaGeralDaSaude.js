//importar imagens:
//import nomedaimagem from "./../imagens/nomedaimagem.png
import saudeDistancia from '../imagens/saude-distancia.jpeg';
import saudeMovel from '../imagens/saude-movel.jpeg';
import ia from '../imagens/ia.avif';
import robotica from '../imagens/robotica.png';
import iot from '../imagens/iot.png';
import blockchain from '../imagens/Blockchain.jpg';
import '../css/styles.css'

function MelhoriaGeralDaSaude(){

    return(
        <div className="MelhoriaGeralDaSaude">
            <h2>Melhoria Geral Da Saude</h2>
            <h3 className="saude_a_distancia">Saúde a Distância</h3>
            <p>        Os avanços na prestação de cuidados de saúde por meio de serviços remotos, 
                como telemedicina e monitoramento médico online, estão redefinindo o acesso e o 
                tratamento médico. Essas soluções permitem consultas virtuais, diagnósticos e monitoramento 
                de condições médicas à distância, além do uso de dispositivos conectados para coletar dados 
                vitais. Essa abordagem não só amplia o acesso aos cuidados de saúde, especialmente em áreas
                 remotas, mas também economiza tempo e reduz custos para os pacientes, oferecendo uma gestão
                  mais prática da saúde. A integração de registros médicos eletrônicos fortalece a coordenação
                   entre profissionais de saúde, embora a proteção dos dados do paciente seja fundamental. 
                   Essas inovações estão transformando a prestação de cuidados, tornando-a mais acessível, 
                eficiente e conveniente globalmente, melhorando a qualidade e a disponibilidade dos serviços de saúde.</p>
                
            <img className="imagem" src={saudeDistancia} alt="Saúde à Distância" />


            <h3 className="saude_movel">Saúde Móvel (m-health)</h3>
            
            <p>A Saúde Móvel (m-health) integra dispositivos móveis, como smartphones e wearables, com aplicativos
                 e tecnologias sem fio, visando melhorar o acesso aos serviços de saúde e promover o bem-estar. 
                 Essa abordagem permite aos usuários monitorar sinais vitais, receber lembretes de medicamentos e 
                 acessar orientações médicas em tempo real. É essencial para profissionais de saúde ao facilitar a 
                 comunicação entre equipes, realizar teleconsultas e acompanhar pacientes remotamente. Desde aplicativos 
                 simples até dispositivos avançados, a m-health utiliza tecnologias como IA e IoT para ampliar suas aplicações,
                  melhorando a assistência médica, aumentando a acessibilidade aos serviços de saúde e capacitando as pessoas a cuidarem melhor da saúde cotidiana.</p>
            
            <img className="imagem" src={saudeMovel} alt="Saúde integrada a dispositivos móveis" />
            
            <h3 className="ia">IA no Diagnóstico</h3>            
            <p>A Inteligência Artificial (IA) está transformando o diagnóstico médico ao analisar extensos dados médicos, 
                incluindo imagens, exames e informações genômicas. Essa capacidade permite identificar padrões e características
                 sutis, melhorando a precisão diagnóstica, especialmente na radiologia para detectar lesões e doenças. 
                 A IA também prevê riscos, personaliza tratamentos e oferece suporte aos médicos, embora exija validação clínica e
                  supervisão para garantir sua precisão. Em resumo, a IA revoluciona o diagnóstico, aprimorando a eficiência e qualidade 
                  dos cuidados médicos com diagnósticos mais precoces e precisos.</p>

            <img className="imagem" src={ia} alt="Inteligência Artificial (IA) está transformando o diagnóstico médico"/>

            <h3 className="robotica">Robótica na Medicina</h3>
            
            <p>A robótica aplicada em cirurgias de alta precisão na medicina oferece avanços notáveis, permitindo procedimentos mais precisos e menos invasivos.
                 Sistemas como o da Vinci proporcionam aos cirurgiões controle preciso e visão tridimensional, auxiliando em cirurgias delicadas, como cardíacas e neurológicas. 
                 A redução do tempo de recuperação, menor dor pós-operatória e menor risco de complicações são benefícios notáveis. No entanto, a eficácia 
                 ainda depende da habilidade do cirurgião e treinamento adequado para operar os sistemas com segurança e excelência. Em suma, a robótica cirúrgica representa 
                 um avanço significativo, melhorando resultados e técnicas na prática cirúrgica atual.</p>
            
            <img className="imagem" src={robotica} alt="Robótica aplicada em cirurgias" />
            
            <h3 className="iot">IoT no Monitoramento Remoto</h3>
            
            <p>A Internet das Coisas (IoT) na saúde permite a coleta de dados vitais por meio de dispositivos conectados, como wearables, para monitoramento remoto contínuo. 
                Isso auxilia na detecção precoce de mudanças no estado de saúde, personaliza os tratamentos e melhora a eficiência dos cuidados, beneficiando pacientes com condições crônicas.
                 Os profissionais de saúde têm acesso a informações em tempo real, permitindo decisões mais ágeis, porém é crucial garantir a segurança e 
                 privacidade dos dados dos pacientes para sua implementação eficaz</p>
            
            <img className="imagem" src={iot} alt="A Internet das Coisas (IoT) na saúde" />

            <h3 className="blockchain">Blockchain na Saúde</h3>
            
            <p> A tecnologia blockchain tem sido aplicada de forma significativa para assegurar a segurança e a privacidade dos dados na área da saúde. 
                Por meio de sua natureza descentralizada e altamente segura, a blockchain permite o armazenamento de registros médicos de forma criptografada e imutável.
                 Isso possibilita o compartilhamento seguro de informações entre profissionais de saúde e instituições, garantindo a integridade dos dados e prevenindo fraudes.
                  A utilização de contratos inteligentes na blockchain também auxilia na execução automática de permissões de acesso, permitindo que apenas partes autorizadas
                   visualizem informações específicas, fortalecendo assim a confidencialidade dos registros médicos. Dessa maneira, a tecnologia blockchain está desempenhando 
                   um papel fundamental na proteção dos dados sensíveis dos pacientes, promovendo uma gestão mais segura e transparente no setor da saúde.</p>
            
            <img className="imagem" src={blockchain} alt="tecnologia blockchain" />
            
        </div>
    )

}

export default MelhoriaGeralDaSaude

//para inserir no App.js eu jogo lá 1) import 2) Dentro do return(<nomedoarquivo/>)