function convertirFrase(frase) {
  const palabras = frase.split(" ");
  const palabrasConvertidas = palabras.map((palabra) => {
    const primeraLetra = palabra.charAt(0).toLowerCase();
    const restoPalabra = palabra.slice(1).toUpperCase();
    return primeraLetra + restoPalabra;
  });
  return palabrasConvertidas.join(" ");
}
const frase = "cómo va todo el mundo";
const fraseConvertida = convertirFrase(frase);
console.log(fraseConvertida);
