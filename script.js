// FECHA DESDE CUANDO ANDUVIERON
const inicio = new Date(2022, 1, 28); 
// (año, mes-1, día) -> Febrero = 1

function actualizarContador(){

    const ahora = new Date();
    const diferencia = ahora - inicio;

    const dias = Math.floor(diferencia / (1000*60*60*24));
    const horas = Math.floor((diferencia / (1000*60*60)) % 24);
    const minutos = Math.floor((diferencia / (1000*60)) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);

    document.getElementById("contador").innerHTML =
        `Mi amor comenzó hace ❤️ <br>
        ${dias} días ${horas} horas ${minutos} minutos ${segundos} segundos`;
}

setInterval(actualizarContador,1000);
actualizarContador();
