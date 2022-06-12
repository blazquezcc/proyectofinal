import React, { useState, useRef, useEffect } from "react";
import BaseTrap1 from "../bases/trap01.mp3";
import BaseTrap2 from "../bases/trap02.mp3";
import BaseTrap3 from "../bases/trap03.mp3";
import BaseTrap4 from "../bases/trap04.mp3";
import BaseTrap5 from "../bases/trap05.mp3";
import BaseBoombap1 from "../bases/boombap01.mp3";
import BaseBoombap2 from "../bases/boombap02.mp3";
import BaseBoombap3 from "../bases/boombap03.mp3";
import BaseBoombap4 from "../bases/boombap04.mp3";
import BaseBoombap5 from "../bases/boombap05.mp3";
import BaseDobleTempo1 from "../bases/dobletempo01.mp3";
import BaseDobleTempo2 from "../bases/dobletempo02.mp3";
import BaseDobleTempo3 from "../bases/dobletempo03.mp3";
import BaseDobleTempo4 from "../bases/dobletempo04.mp3";
import BaseDobleTempo5 from "../bases/dobletempo05.mp3";
import BaseRap1 from "../bases/rap01.mp3";
import BaseRap2 from "../bases/rap02.mp3";
import BaseRap3 from "../bases/rap03.mp3";
import BaseRap4 from "../bases/rap04.mp3";
import BaseRap5 from "../bases/rap05.mp3";
import BaseReggae1 from "../bases/reggae01.mp3";
import BaseReggae2 from "../bases/reggae02.mp3";
import BaseReggae3 from "../bases/reggae03.mp3";
import BaseReggae4 from "../bases/reggae04.mp3";
import BaseReggae5 from "../bases/reggae05.mp3";

const ExtremeMode = () => {
    
    const Ref = useRef(null);
  
    // The state for our timer
    const [timer, setTimer] = useState('00');
  
  
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
       
        return {
            total, seconds
        };
    }
  
  
    const startTimer = (e) => {
        let { total,  seconds } 
                    = getTimeRemaining(e);
        if (total >= 0) {
  
            // update the timer
            // check if less than 10 then we need to 
            // add '0' at the begining of the variable
            setTimer(
                 (seconds > 9 ? seconds : '0' + seconds)
            )
        }
        document.querySelector("select")
        .addEventListener("change",function(e){
            // seleccionamos e.target = el elemento que genero el evento
            // del selected otenemos los options
            // de los options accedemos al indice seleccionado
            // y por ultimo recuperamos su texto osea el nombre

            // seleccionamos el audio 
            let audio = document.querySelector("audio");
            // pausamos el anterior
            audio.pause();
            // concatenamos el url mas el nombre mas .mp3
            audio.src  = e.target.value;
            // le damos play 
            audio.play();
        })
        var texto3 = "aburrir,aburrido,abusar,acabado,acabar,academia,aceituno,acelerado,acentuar,aceptable,amarillo,alumno,altitud,alquimista,alumbroso,aluminio,beso,bestia,bibliógrafo,bicampeón,campeón,bíceps,bicho,bikini,bilingüe,bizcocho,blanco,blasfemar,bodorrio,boda,bohemia,boletín,bolsa,bombardeo,lana,lancera,lancero,lancería,legislación,léxico,leyenda,vejiga,usuario,uruguayo,turno,turquesa,elemento,elevación,elevado,hético,hierba,hierro,hijo,latitud,libre,líder,lienzo,limpiador,linaje,paño,papada,papar,resaltar,resistir,responsivo,retardo,retraer,retratar,ridículo,romántico,roncar,soviético,secar,planchar,morir,vivir,matemáticas,lengua,spray,xilófono,manteca,nocilla,vestido,humano,alien,parasito,futbolista,marcar,lanzar,monedero,movil,mancuerna,waterpolo,sponsor,muñeca,tenedor,tentador,tunante,casa,coche,volar,bailar,papel,falso,verdadero,atún,carne,pescado,kilo,carbón,tubería,torre,evolución,ataque,defensa,coco,pelota,huevo,jarabe";
        if(  document.getElementById("tiempo3").innerHTML== "59"){
           
            var opciones3 = texto3.split(",");
            var posicionAleatoria3 = Math.floor(Math.random() * opciones3.length);
            document.getElementById("palabra3").innerHTML =opciones3[posicionAleatoria3];
        }
        if(  document.getElementById("tiempo3").innerHTML== "55"){
           
            var opciones3 = texto3.split(",");
            var posicionAleatoria3 = Math.floor(Math.random() * opciones3.length);
            document.getElementById("palabra3").innerHTML =opciones3[posicionAleatoria3];
        }
        if(  document.getElementById("tiempo3").innerHTML== "52"){
           
            var opciones3 = texto3.split(",");
            var posicionAleatoria3 = Math.floor(Math.random() * opciones3.length);
            document.getElementById("palabra3").innerHTML =opciones3[posicionAleatoria3];
        }
        if(  document.getElementById("tiempo3").innerHTML== "50"){
            
            var opciones3 = texto3.split(",");
            var posicionAleatoria3 = Math.floor(Math.random() * opciones3.length);
            document.getElementById("palabra3").innerHTML =opciones3[posicionAleatoria3];
        }
        if(  document.getElementById("tiempo3").innerHTML== "47"){
           
            var opciones3 = texto3.split(",");
            var posicionAleatoria3 = Math.floor(Math.random() * opciones3.length);
            document.getElementById("palabra3").innerHTML =opciones3[posicionAleatoria3];
        }
        if(  document.getElementById("tiempo3").innerHTML== "45"){
           
            var opciones3 = texto3.split(",");
            var posicionAleatoria3 = Math.floor(Math.random() * opciones3.length);
            document.getElementById("palabra3").innerHTML =opciones3[posicionAleatoria3];
        }
        if(  document.getElementById("tiempo3").innerHTML== "43"){
           
            var opciones3 = texto3.split(",");
            var posicionAleatoria3 = Math.floor(Math.random() * opciones3.length);
            document.getElementById("palabra3").innerHTML =opciones3[posicionAleatoria3];
        }
        if(  document.getElementById("tiempo3").innerHTML== "40"){
         
            var opciones3 = texto3.split(",");
            var posicionAleatoria3 = Math.floor(Math.random() * opciones3.length);
            document.getElementById("palabra3").innerHTML =opciones3[posicionAleatoria3];
        }
        if(  document.getElementById("tiempo3").innerHTML== "37"){
           
            var opciones3 = texto3.split(",");
            var posicionAleatoria3 = Math.floor(Math.random() * opciones3.length);
            document.getElementById("palabra3").innerHTML =opciones3[posicionAleatoria3];
        }
        if(  document.getElementById("tiempo3").innerHTML== "35"){
           
            var opciones3 = texto3.split(",");
            var posicionAleatoria3 = Math.floor(Math.random() * opciones3.length);
            document.getElementById("palabra3").innerHTML =opciones3[posicionAleatoria3];
        }
        if(  document.getElementById("tiempo3").innerHTML== "33"){
           
            var opciones3 = texto3.split(",");
            var posicionAleatoria3 = Math.floor(Math.random() * opciones3.length);
            document.getElementById("palabra3").innerHTML =opciones3[posicionAleatoria3];
        }
        if(  document.getElementById("tiempo3").innerHTML== "30"){
            
            var opciones3 = texto3.split(",");
            var posicionAleatoria3 = Math.floor(Math.random() * opciones3.length);
            document.getElementById("palabra3").innerHTML =opciones3[posicionAleatoria3];
        }
        if(  document.getElementById("tiempo3").innerHTML== "27"){
           
            var opciones3 = texto3.split(",");
            var posicionAleatoria3 = Math.floor(Math.random() * opciones3.length);
            document.getElementById("palabra3").innerHTML =opciones3[posicionAleatoria3];
        }
        if(  document.getElementById("tiempo3").innerHTML== "25"){
           
            var opciones3 = texto3.split(",");
            var posicionAleatoria3 = Math.floor(Math.random() * opciones3.length);
            document.getElementById("palabra3").innerHTML =opciones3[posicionAleatoria3];
        }
        if(  document.getElementById("tiempo3").innerHTML== "23"){
           
            var opciones3 = texto3.split(",");
            var posicionAleatoria3 = Math.floor(Math.random() * opciones3.length);
            document.getElementById("palabra3").innerHTML =opciones3[posicionAleatoria3];
        }
        if(  document.getElementById("tiempo3").innerHTML== "20"){
           
            var opciones3 = texto3.split(",");
            var posicionAleatoria3 = Math.floor(Math.random() * opciones3.length);
            document.getElementById("palabra3").innerHTML =opciones3[posicionAleatoria3];
        }
        if(  document.getElementById("tiempo3").innerHTML== "17"){
           
            var opciones3 = texto3.split(",");
            var posicionAleatoria3 = Math.floor(Math.random() * opciones3.length);
            document.getElementById("palabra3").innerHTML =opciones3[posicionAleatoria3];
        }
        if(  document.getElementById("tiempo3").innerHTML== "15"){
           
            var opciones3 = texto3.split(",");
            var posicionAleatoria3 = Math.floor(Math.random() * opciones3.length);
            document.getElementById("palabra3").innerHTML =opciones3[posicionAleatoria3];
        }
        if(  document.getElementById("tiempo3").innerHTML== "13"){
           
            var opciones3 = texto3.split(",");
            var posicionAleatoria3 = Math.floor(Math.random() * opciones3.length);
            document.getElementById("palabra3").innerHTML =opciones3[posicionAleatoria3];
        }
        if(  document.getElementById("tiempo3").innerHTML== "10"){
            
            var opciones3 = texto3.split(",");
            var posicionAleatoria3 = Math.floor(Math.random() * opciones3.length);
            document.getElementById("palabra3").innerHTML =opciones3[posicionAleatoria3];
        }
        if(  document.getElementById("tiempo3").innerHTML== "7"){
           
            var opciones3 = texto3.split(",");
            var posicionAleatoria3 = Math.floor(Math.random() * opciones3.length);
            document.getElementById("palabra3").innerHTML =opciones3[posicionAleatoria3];
        }
        if(  document.getElementById("tiempo3").innerHTML== "5"){
           
            var opciones3 = texto3.split(",");
            var posicionAleatoria3 = Math.floor(Math.random() * opciones3.length);
            document.getElementById("palabra3").innerHTML =opciones3[posicionAleatoria3];
        }
        if(  document.getElementById("tiempo3").innerHTML== "3"){
           
            var opciones3 = texto3.split(",");
            var posicionAleatoria3 = Math.floor(Math.random() * opciones3.length);
            document.getElementById("palabra3").innerHTML =opciones3[posicionAleatoria3];
        }
        
    }
  
  
    const clearTimer = (e) => {
  
        // If you adjust it you should also need to
        // adjust the Endtime formula we are about
        // to code next    
        setTimer('60');
  
        // If you try to remove this line the 
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
  
    const getDeadTime = () => {
        let deadline = new Date();
  
        // This is where you need to adjust if 
        // you entend to add more time
        deadline.setSeconds(deadline.getSeconds() + 60);
        return deadline;
    }
  
    // We can use useEffect so that when the component
    // mount the timer will start as soon as possible
  
    // We put empty array to act as componentDid
    // mount only
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);
  
    // Another way to call the clearTimer() to start
    // the countdown is via action event from the
    // button first we create function to be called
    // by the button
    const onClickReset = () => {
        clearTimer(getDeadTime());
       
    }
   
    return(
        <div class="container">
       <h2 class="my-3 h2">Extreme Mode</h2>
       <h2 id="tiempo3">{timer}</h2>
       <p id="palabra3"></p>
       <button type="button" class="btn btn-primary" onClick={onClickReset}>Iniciar</button><br/>
            <select class="form-select" aria-label="Default select example" name="select">
  <option value={BaseBoombap1} selected>BaseBoombap1</option>
  <option value={BaseBoombap2}>BaseBoombap2</option>
  <option value={BaseBoombap3}>BaseBoombap3</option>
  <option value={BaseBoombap4}>BaseBoombap4</option>
  <option value={BaseBoombap5}>BaseBoombap5</option>
  <option value={BaseTrap1}>BaseTrap1</option>
  <option value={BaseTrap2}>BaseTrap2</option>
  <option value={BaseTrap3}>BaseTrap3</option>
  <option value={BaseTrap4}>BaseTrap4</option>
  <option value={BaseTrap5}>BaseTrap5</option>
  <option value={BaseDobleTempo1}>BaseDobleTempo1</option>
  <option value={BaseDobleTempo2}>BaseDobleTempo2</option>
  <option value={BaseDobleTempo3}>BaseDobleTempo3</option>
  <option value={BaseDobleTempo4}>BaseDobleTempo4</option>
  <option value={BaseDobleTempo5}>BaseDobleTempo5</option>
  <option value={BaseRap1}> BaseRap1</option>
  <option value={BaseRap2}> BaseRap2</option>
  <option value={BaseRap3}> BaseRap3</option>
  <option value={BaseRap4}> BaseRap4</option>
  <option value={BaseRap5}> BaseRap5</option>
  <option value={BaseReggae1}>BaseReggae1</option>
  <option value={BaseReggae2}>BaseReggae2</option>
  <option value={BaseReggae3}>BaseReggae3</option>
  <option value={BaseReggae4}>BaseReggae4</option>
  <option value={BaseReggae5}>BaseReggae5</option>
</select>
<audio  src={BaseBoombap1} controls>BaseBoombap1</audio>
    </div>
        
    )
}


export default ExtremeMode;