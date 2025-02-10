function calcularFactorial() {
    let numero = document.getElementById("numero").value;
    let resultado = document.getElementById("resultado");

    // Validar número
    if (numero === "" || numero < 0) {
        resultado.textContent = "Ingresa un número válido (mayor o igual a 0)";
        resultado.style.color = "#ff4d4d"; // Rojo para error
        return;
    }

    // Calcular factorial
    let factorial = 1;
    for (let i = 2; i <= numero; i++) {
        factorial *= i;
    }

    // Mostrar resultado
    resultado.textContent = `El factorial de ${numero} es ${factorial}`;
    resultado.style.color = "#00d4ff"; // Azul celeste para éxito
}
