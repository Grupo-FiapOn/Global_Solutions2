//as informações que serão utilizadas em mais de um arquivo que está dentro da pasta components deve estar localizada aqui! Este é o componente PAI

//criando endereços próprios para cada arquivo da pasta components com routerDOM, podendo então chamar cada um em uma pág diferente
//foi adicionado o <BrowserRouter>, <Routes>, <Route> na div na chamada dos arquivos pro esqueleto da pág
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//importando css
import './css/styles.css'

//importando os arquivos da pasta components
import Home from "./components/Home";
import CombateADoencasTransmissiveis from "./components/CombateADoencasTransmissiveis";
import MelhoriaGeralDaSaude from "./components/MelhoriaGeralDaSaude";
import PrevencaoETratamentoDeDoencasNaoTransmissiveis from "./components/PrevencaoETratamentoDeDoencasNaoTransmissiveis";
import ReducaoDaMortalidadeInfantil from "./components/ReducaoDaMortalidadeInfantil";
import Menu from './components/Menu';
import Footer from './components/Footer';

//importar imagens
//import nomedaimagem from "./../imagens/nomedaimagem.png

function App() {
  return (
   
    <BrowserRouter>
      <div id="container">
        
        <Menu/> {/*estou chamando o menu aqui fora do <Routes> pra ele ficar fixo na tela */}
        
        {/*chamando os arquivos da pasta components para o esqueleto da página*/}
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/CombateADoencasTransmissiveis'element={<CombateADoencasTransmissiveis/>}/>
          <Route path='/MelhoriaGeralDaSaude'element={<MelhoriaGeralDaSaude/>}/>
          <Route path='/PrevencaoETratamentoDeDoencasNaoTransmissiveis'element={<PrevencaoETratamentoDeDoencasNaoTransmissiveis/>}/>
          <Route path='/ReducaoDaMortalidadeInfantil'element={<ReducaoDaMortalidadeInfantil/>}/>
        </Routes>
        
      </div>
    <Footer/> {}
    </BrowserRouter>

  );
}

export default App;
