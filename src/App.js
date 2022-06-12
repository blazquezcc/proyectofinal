import './App.css';
import Menu from './componentes/Menu';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Inicio from './componentes/Inicio';
import Contacto from './componentes/Contacto';
import Noticias from './componentes/Noticias';
import Entrena from './componentes/Entrena';
import SelectorModo from './componentes/SelectorModo';
import EasyMode from './componentes/EasyMode';
import HardMode from './componentes/HardMode';
import ExtremeMode from './componentes/ExtremeMode';
import Objetos from './componentes/Objetos';
import MinutosLibres from './componentes/MinutosLibres';
import TematicasImagenes from './componentes/PersonajesContrapuestos';
import TematicasPalabras from './componentes/TematicasPalabras';
import Terminaciones from './componentes/Terminaciones';
import Footer from './componentes/Footer';
function App() {
  return (
    <Router>
 <div className="App container">
     <div className='jumbotron'>
       <Menu/>
       <Routes>
         <Route path='/' element={<Inicio/>}></Route>
         <Route path='/contacto' element={<Contacto/>}></Route>
         <Route path='/noticias' element={<Noticias/>}></Route>
         <Route path='/entrena' element={<Entrena/>}></Route>
         <Route path='/entrena/SelectorModo' element={<SelectorModo/>}></Route>
         <Route path='/entrena/EasyMode' element={<EasyMode/>}></Route>
         <Route path='/entrena/HardMode' element={<HardMode/>}></Route>
         <Route path='/entrena/ExtremeMode' element={<ExtremeMode/>}></Route>
         <Route path='/entrena/Objetos' element={<Objetos/>}></Route>
         <Route path='/entrena/MinutosLibres' element={<MinutosLibres/>}></Route>
         <Route path='/entrena/Terminaciones' element={<Terminaciones/>}></Route>
         <Route path='/entrena/PersonajesContrapuestos' element={<TematicasImagenes/>}></Route>
         <Route path='/entrena/TematicasPalabras' element={<TematicasPalabras/>}></Route>

       </Routes>
       <Footer/>
     </div>
  </div>
    </Router>
   
  );
}

export default App;
