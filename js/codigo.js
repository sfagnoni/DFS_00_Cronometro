let tiempo = 0;
let cronometro;

const actualizarDisplay = () => {
    const display = document.querySelector('#display');
    display.innerHTML = tiempo;
}

const iniciar = () => {
    cronometro = setInterval(() => {
        tiempo++;
        actualizarDisplay();
    }, 1000);
}

const detener = () => {
    clearInterval(cronometro);

}

const reiniciar = () => {
    detener();
    tiempo = 0;
    actualizarDisplay();
}

document.querySelector('#btn-iniciar').addEventListener('click', iniciar);
document.querySelector('#btn-pausar').addEventListener('click', detener);
document.querySelector('#btn-reiniciar').addEventListener('click', reiniciar);
actualizarDisplay();
