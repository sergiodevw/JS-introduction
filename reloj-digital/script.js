function actualizarReloj() {
    let ahora = new Date(); // Obtener la hora actual

    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();
    let amPm = horas >= 12 ? "PM" : "AM";

    // Convertir formato 24h a 12h
    horas = horas % 12;
    horas = horas ? horas : 12; // Si es 0, convertirlo a 12

    // Asegurar que siempre tengan 2 dígitos
    horas = horas.toString().padStart(2, "0");
    minutos = minutos.toString().padStart(2, "0");
    segundos = segundos.toString().padStart(2, "0");

    // Mostrar la hora en el div con id="clock"
    document.getElementById("clock").textContent = `${horas}:${minutos}:${segundos} ${amPm}`;
}

// Actualizar cada segundo
setInterval(actualizarReloj, 1000);

// Llamar a la función inmediatamente para evitar el retraso inicial
actualizarReloj();
