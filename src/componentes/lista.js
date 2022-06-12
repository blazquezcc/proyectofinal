document.querySelector("select").addEventListener("change",function(e){
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
