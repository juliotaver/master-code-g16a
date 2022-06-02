function palindrome(palabra) {
    const pAlReves = palabra.replace(/[\W_]/g, "").toLowerCase(); /* pasa la palabra al reves */
    const strReversed = pAlReves.split("").reverse().join("");

        return pAlReves === strReversed ? "es palindromo" : "no es palindromo";
}

let palabraUsuario = prompt("Escribe una palabra para saber si es palindromo, o no.");
let resultado = palindrome(palabraUsuario);
alert(resultado);



/////////////////////////////////////////////////////////

let paises = ["Mexico", "Panama", "Guatemala", "El salvador", "Chingapandapio"]

function longestCountry(array){
    array.sort( function(a,b) {
        return b.length-a.length //ordena el array de mayor a menor
    });
    return array[0];
}
console.log(longestCountry(paises));

////////////////////////////////

const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5/9;

let grados = prompt("Ingresa los grados fahrenheiteit");
let resultadoGrados = fahrenheitToCelsius(grados);
alert("Los grados celsius son: " + resultadoGrados.toFixed(2)) /* para tener dos decimales nada mas */


//////////////////

const parametrosEnviados = param => param.length

let envia2 = prompt("Ingresa algo");

alert("Enviaste " + parametrosEnviados(envia2) + " parametros")


