function verificarPalindromo() {
    let inputText = document.getElementById("inputText").value;
    let resultado = document.getElementById("resultado");

    // Eliminar espacios y convertir todo a minúsculas
    let textoNormalizado = inputText.replace(/\s+/g, '').toLowerCase();

    // Verificar si el texto es un palíndromo
    let textoReverso = textoNormalizado.split('').reverse().join('');

    if (textoNormalizado === textoReverso) {
        resultado.textContent = `"${inputText}" es un palíndromo.`;
        resultado.style.color = "#00d4ff"; // Azul celeste para éxito
    } else {
        resultado.textContent = `"${inputText}" no es un palíndromo.`;
        resultado.style.color = "#ff4d4d"; // Rojo para error
    }
}
