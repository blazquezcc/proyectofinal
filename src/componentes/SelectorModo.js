import React from "react";
import EasyModeImg from "../Imagenes/EasyMode.png";
import HardModeImg from "../Imagenes/HardMode.png";
import ExtremeModeImg from "../Imagenes/ExtremeMode.png";
import TImagenesImg from "../Imagenes/TematicasImagenes.png";
import TPalabrasImg from "../Imagenes/TematicasPalabras.png";
import ObjetosImg from "../Imagenes/Objetos.png";
import TerminacionImg from "../Imagenes/Terminaciones.png";
import LibresImg from "../Imagenes/Minutos.png";
import {Link} from 'react-router-dom';

const SelectorModo = () => {
    return(
        <div class="container">
 <div class="card-group">
<div class="card" width="10px">
  <img class="card-img-top" src={EasyModeImg} alt="Card image cap" width="10px"/>
  <div class="card-body">
    <h5 class="card-title">EASY MODE</h5>
    <p class="card-text">Modo de 1 minuto donde aparecerán palabras cada 10 segundos.</p>
    <Link class="nav-link" id="pills-product-tab" data-toggle="pill" to="/entrena/EasyMode" role="tab" aria-controls="pills-product" aria-selected="false">SELECCIONAR</Link>
  </div>
</div>
<div class="card" width="10px">
  <img class="card-img-top" src={HardModeImg} alt="Card image cap" width="10px"/>
  <div class="card-body">
    <h5 class="card-title">HARD MODE</h5>
    <p class="card-text">Modo de 1 minuto donde aparecerán palabras cada 5 segundos.</p>
    <Link class="nav-link" id="pills-product-tab" data-toggle="pill" to="/entrena/HardMode" role="tab" aria-controls="pills-product" aria-selected="false">SELECCIONAR</Link>
  </div>
</div>
<div class="card" width=" 18rem">
  <img class="card-img-top" src={ExtremeModeImg} alt="Card image cap" width="18rem"/>
  <div class="card-body">
    <h5 class="card-title">EXTREME MODE</h5>
    <p class="card-text">Modo de 1 minuto donde aparecerán palabras cada 3 segundos.</p>
    <Link class="nav-link" id="pills-product-tab" data-toggle="pill" to="/entrena/ExtremeMode" role="tab" aria-controls="pills-product" aria-selected="false">SELECCIONAR</Link>
  </div>
</div>
<div class="card" width=" 18rem">
  <img class="card-img-top" src={TImagenesImg} alt="Card image cap" width="18rem"/>
  <div class="card-body">
    <h5 class="card-title">TEMATICAS IMAGENES</h5>
    <p class="card-text">Modo de 1 minuto donde aparecera 1 imagen de un paisaje.</p>
    <Link class="nav-link" id="pills-product-tab" data-toggle="pill" to="/entrena/TematicasImagenes" role="tab" aria-controls="pills-product" aria-selected="false">SELECCIONAR</Link>
  </div>
  </div>
</div>
<div class="card-group">
<div class="card" width="10px">
  <img class="card-img-top" src={TPalabrasImg} alt="Card image cap" width="10px"/>
  <div class="card-body">
    <h5 class="card-title">TEMATICAS PALABRAS</h5>
    <p class="card-text">Modo de 1 minuto donde aparecera 1 tematica de algo general.</p>
    <Link class="nav-link" id="pills-product-tab" data-toggle="pill" to="/entrena/TematicasPalabras" role="tab" aria-controls="pills-product" aria-selected="false">SELECCIONAR</Link>
  </div>
</div>
<div class="card" width=" 18rem">
  <img class="card-img-top" src={ObjetosImg} alt="Card image cap" width="18rem"/>
  <div class="card-body">
    <h5 class="card-title">OBJETOS</h5>
    <p class="card-text">Modo de 1 minuto donde apareceran plabras relacionadas con objetos cada 10 segundos.</p>
    <Link class="nav-link" id="pills-product-tab" data-toggle="pill" to="/entrena/Objetos" role="tab" aria-controls="pills-product" aria-selected="false">SELECCIONAR</Link>
  </div>
</div>
<div class="card" width=" 18rem">
  <img class="card-img-top" src={TerminacionImg} alt="Card image cap" width="18rem"/>
  <div class="card-body">
    <h5 class="card-title">TERMINACIONES</h5>
    <p class="card-text">Modo de 1 minuto donde aparecera una terminación. Por ejemplo"-tión".</p>
    <Link class="nav-link" id="pills-product-tab" data-toggle="pill" to="/entrena/Terminaciones" role="tab" aria-controls="pills-product" aria-selected="false">SELECCIONAR</Link>
  </div>
  
</div>
<div class="card" width=" 18rem">
  <img class="card-img-top" src={LibresImg} alt="Card image cap" width="18rem"/>
  <div class="card-body">
    <h5 class="card-title">MINUTOS LIBRES</h5>
    <p class="card-text">Modo de 1 minuto sin estímulos.</p>
    <Link class="nav-link" id="pills-product-tab" data-toggle="pill" to="/entrena/MinutosLibres" role="tab" aria-controls="pills-product" aria-selected="false">SELECCIONAR</Link>
  </div>
  
</div>
        
        </div>
       </div>
        
    
    )
}

export default SelectorModo;