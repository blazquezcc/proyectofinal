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

const TematicasPalabras = () => {
    
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
            let opt = e.target.options[e.target.selectedIndex].text;
            // seleccionamos el audio 
            let audio = document.querySelector("audio");
            // pausamos el anterior
            audio.pause();
            // concatenamos el url mas el nombre mas .mp3
            audio.src  = e.target.value;
            // le damos play 
            audio.play();
        })
        var texto5 = "FUTBOL,BALONCESTO,TENNIS,MARVEL,AMONG US,LEAGUE OF LEGUENDS,SMITE,FORNITE,VALORANT,REAL MADRID,BARCELONA,ATLETICO DE MADRID,PREMIER LEAGUE,SERIE A,LIGA ESPAÑOLA,MOVILES,FOTOCOPIAS,KING KONG,GODZILLA,TRAP,RAP,HIP HOP,REGGAETON,YOUTUBE,TWITCH,STREAMER,STREAM,ESCUELA,VIKINGOS,ATAQUE A LOS TITANES,TOKYO GHOUL,DRAGON BALL,ANIME,CHAMPIONS,EUROPA LEAGUE,DC COMICS,TWITTER,INSTAGRAM,JOYERIA,POP,ESPAÑA,EUROPA,AFRICA,AMERICA,ASIA,JAPON,NAVIDAD,HALLOWEEN,POLITICA,MUSICA,POKEMON,TELEVISION,CAMPO,FREESTYLE,FMS,REDBULL,BEBIDA,COMIDA,CHERNOBYL,NAZIS,VOX,GOOGLE,BIZARRAP,SKYPE,DISCORD,EDAD MEDIA,PREHISTORIA,MARCAS,PERIODISMO,HOROSCOPO,ASIGNATIRAS,MATEMATICAS,INFORMATICA,VIDEOJUEGOS,DEPORTES,HARRY POTTER,JUEGO DE TRONOS,LOS JUEGOS DEL HAMBRE,CALL OF DUTTY,GUERRA,INFIERNO,CIELO,PLAYA,ESTACIONES DEL AÑO,EXAMEN,FORMULA 1,MOTO GP,BOXEO,VACACIONES,FIFA,DROGA,DEUDA,FUMAR,NOTIFICACION,WHATSAPP,TUENTI,SMS,ANIMALES,OBJETOS,DIBUJOS ANIMADOS,ARTISTA,LITERATURA,SIGLO 21,2020,CORONAVIRUS,SIDA,BACTERIA,RESFRIADO,GRIPE,PUEBLO,MANSION,PADEL,GYM,RUSIA,ALEMANIA,FRANCIA,TOROS,PLAZA DE TOROS,TORERO,ASESINO,FAMILIA,MUERTE,CUMPLEAÑOS,IGLESIA,EMPRESA,GRAN HERMANO,SUPERVIVIENTES,EUROVISION,TELECINCO,ANTENA 3,FIRST DATE,MYHYV,ESTUDIO,TERTULIA,CHIRINGUITO,COUNTER STRIKE,MINECRAFT,INSTRUMENTOS,BALONMANO,BATALLA,COCINA,BAÑERA,SUBSUELO,PELOTA,ELECTRICIDAD,OCEANO,UNIVERSO,PLANETAS,MASCARILLA,TOQUE DE QUEDA,LIBROS,TEATRO,ORDENADORES,PESO,PROGRAMACION,TIEMPO,GTA,NEED FOR SPEED,MARIO BROS,SONIC,MEDICINA,ENFERMEDAD,MISA,TELETRABAJO,INTERNET,ARTE,MODA";
        if(  document.getElementById("tiempo5").innerHTML== "58"){
           
            var opciones5 = texto5.split(",");
            var posicionAleatoria5 = Math.floor(Math.random() * opciones5.length);
            document.getElementById("palabra5").innerHTML =opciones5[posicionAleatoria5];
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
       <h2 class="my-3 h2">Tematicas Palabras</h2>
       <h2 id="tiempo5">{timer}</h2>
       <p id="palabra5"></p>
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


export default TematicasPalabras;