const entrar = document.querySelector('#abrir-pantalla-completa',entrarPantallaCompleta);
const salir = document.querySelector('#salir-pantalla-completa', salirPantallaCompleta);

entrar.addEventListener('click',entrarPantallaCompleta);
salir.addEventListener('click',salirPantallaCompleta);

function entrarPantallaCompleta(){
    document.documentElement.requestFullscreen();
}
function salirPantallaCompleta(){
    document.exitFullscreen();
}