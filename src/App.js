//importando os arquivos da pasta components
import Home from "./components/Home";
import CombateADoencasTransmissiveis from "./components/CombateADoencasTransmissiveis";
import MelhoriaGeralDaSaude from "./components/MelhoriaGeralDaSaude";
import PrevencaoETratamentoDeDoencasNaoTransmissiveis from "./components/PrevencaoETratamentoDeDoencasNaoTransmissiveis";
import ReducaoDaMortalidadeInfantil from "./components/ReducaoDaMortalidadeInfantil";

//importar imagens
//import nomedaimagem from "./../imagens/nomedaimagem.png

function App() {
  return (
    
    <div id="Container">
      {/*chamando os arquivos da pasta components para o esqueleto do programa*/}
      <Home/>
      <CombateADoencasTransmissiveis/>
      <MelhoriaGeralDaSaude/>
      <PrevencaoETratamentoDeDoencasNaoTransmissiveis/>
      <ReducaoDaMortalidadeInfantil/>
      
      {/*<img src={nomedaimagem} alt='descrição da imagem' /> */}
    </div>
  );
}

export default App;
