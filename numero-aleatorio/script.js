function generarNumero() {
    // Generamos un número aleatorio entre 1 y 100
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

    // Mostramos el número en el párrafo con id="resultado"
    document.getElementById("resultado").textContent = `Número generado: ${numeroAleatorio}`;
}
