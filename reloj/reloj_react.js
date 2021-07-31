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

function hora() {
    //const element = new Date().toLocaleTimeString();
    const element = actual();

    ReactDOM.render(
        element, document.getElementById('reloj')
    );
}

setInterval(hora, 1000);