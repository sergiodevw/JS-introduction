function clasificarNumeros() {
    // Obtener el valor del input y convertirlo en un array de números
    let input = document.getElementById("numerosInput").value;
    let numeros = input.split(",").map(num => parseInt(num.trim()));

    // Crear un objeto para almacenar pares e impares
    let resultado = {
        pares: [],
        impares: []
    };

    // Clasificar los números en pares e impares
    numeros.forEach(num => {
        if (!isNaN(num)) { // Verifica que sea un número válido
            if (num % 2 === 0) {
                resultado.pares.push(num);
            } else {
                resultado.impares.push(num);
            }
        }
    });

    // Mostrar los resultados en la página
    document.getElementById("pares").textContent = resultado.pares.length > 0 ? resultado.pares.join(", ") : "Ninguno";
    document.getElementById("impares").textContent = resultado.impares.length > 0 ? resultado.impares.join(", ") : "Ninguno";
}
