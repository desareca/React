// Permite escribir la hora en 2 digitos
function wclock(val) {
    if (val < 10) {
        val = "0" + val;
    }
    return val
}

function actual() {
    fecha = new Date(); //Actualizar fecha.
    hora = fecha.getHours(); //hora actual
    minuto = fecha.getMinutes(); //minuto actual
    segundo = fecha.getSeconds(); //segundo actual
    if (hora <= 12) {
        m = "AM";
    } else {
        hora = hora - 12;
        m = "PM";
    }
    mireloj = wclock(hora) + ":" + wclock(minuto) + ":" + wclock(segundo) + " " + m;
    return mireloj;
}

function actualizar() { //función del temporizador
    mihora = actual(); //recoger hora actual
    mireloj = document.getElementById("reloj"); //buscar elemento reloj
    mireloj.innerHTML = mihora; //incluir hora en elemento
}

setInterval(actualizar, 1000); //iniciar temporizador