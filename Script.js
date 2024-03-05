console.log("Ejercicio #1")
    //Escribir una función llamada removerCeros que reciba un arreglo de números y retorne un nuevo arreglo excluyendo los ceros (0):

let removerCeros = arr => arr.filter(num => num !== 0);

console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
console.log(removerCeros([0, 0, 0])) // []

//--------------------------------------------------------------------------------------------------------------------

console.log("Ejercicio #2")
    //Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra:
let capitalizar = str => str.charAt(0).toUpperCase() + str.slice(1);

console.log(capitalizar("pedro")) //"Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo"
console.log(capitalizar("")) // ""

//--------------------------------------------------------------------------------------------------------------------

console.log("Ejercicio #3")
    //Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra de cada palabra:

let Capitalizar = str => str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

console.log(Capitalizar("hola mundo")) // "Hola Mundo"
console.log(Capitalizar("make it real")) // "Make It Real"
console.log(Capitalizar("")) // ""

//--------------------------------------------------------------------------------------------------------------------

console.log("Ejercicio #4")
    //Escribir una función llamada max que reciba un arreglo de números y retorne el número máximo:
    //Nota: Intentarlo hacer sin el método Math.max de JavaScript.
let max = arr => {
    let maxNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }
    return maxNum;
}

console.log(max([3, 9, 6])) // 9
console.log(max([67, 35, 54, 26])) // 67
console.log(max([5, 9, 2, 4, 5, 7])) // 9

//--------------------------------------------------------------------------------------------------------------------

console.log("Ejercicio #5")
    //Escribir una función llamada min que reciba un arreglo de números y retorne el número mínimo:
    //Nota: Intentarlo hacer sin el método Math.min de JavaScript.
let min = arr => {
    let minNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minNum) {
            minNum = arr[i]
        }
    }
    return minNum
}
console.log(min([3, 9, 6])) // 3
console.log(min([67, 35, 54, 26])) // 26
console.log(min([5, 9, 2, 4, 5, 7])) // 2

//--------------------------------------------------------------------------------------------------------------------

console.log("Ejercicio #6")
    //Escribir una función llamada imprimirMatriz que reciba una matriz (un arreglo de arreglos) e imprima todos los elementos del arreglo.

let imprimirMatriz = matriz => {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            console.log(matriz[i][j]);
        }
    }
}

console.log(imprimirMatriz([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]))

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

//--------------------------------------------------------------------------------------------------------------------

console.log("Ejercicio #7")
    //Escribir una función llamada numerosAPalabras que reciba un arreglo de números (cada número en el rango de 0 a 0) y retorne un nuevo arreglo convirtiendo cada número a su versión en palabras.

let numerosAPalabras = arr => {
    const numberletters = [
        "cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"
    ];
    return arr.map(num => numberletters[num]);
};
console.log(numerosAPalabras([0, 1, 2, 3, 4])) // ["cero", "uno", "dos", "tres", "cuatro"]
console.log(numerosAPalabras([5, 6, 7, 8, 9])) // ["cinco", "seis", "siete", "ocho", "nueve"]

//--------------------------------------------------------------------------------------------------------------------

console.log("Ejercicio #8")
    //Escribir una función llamada palabrasANumeros que reciba un arreglo de strings y retorne un nuevo arreglo traduciendo cada palabra a su versión numérica (del 0 al 9). Si la palabra no es un número traducir a -1.

function palabrasANumeros(arr) {
    const lettersnumbers = {
        "cero": 0,
        "uno": 1,
        "dos": 2,
        "tres": 3,
        "cuatro": 4,
        "cinco": 5,
        "seis": 6,
        "siete": 7,
        "ocho": 8,
        "nueve": 9
    };

    return arr.map(word => lettersnumbers.hasOwnProperty(word) ? lettersnumbers[word] : -1);
}
console.log(palabrasANumeros(["cero", "uno", "dos", "tres", "what?", "cuatro"])); // [0, 1, 2, 3, -1, 4]
console.log(palabrasANumeros(["cinco", "seis", "siete", "ocho", "nueve"])); // [5, 6, 7, 8, 9]

//-----------------------------------------------------------------------------------------------------------------------------------------------

console.log("Ejercicio #9")
    //Escribir una función llamada imprimirArreglo que reciba un arreglo e imprima cada elemento en una línea a parte:

let imprimirArreglo = (...args) => args.forEach(element => console.log(element));


console.log(imprimirArreglo(1, "Hola", 2, "Mundo"));

//-----------------------------------------------------------------------------------------------------------------------------------------------

console.log("Ejercicio #10")
    //Escribir una función llamada numAsteriscos que reciba una matriz (un arreglo de arreglos) y retorne el número de asteriscos:

let numAsteriscos = matriz => {
    let count = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] === '*') {
                count++;
            }
        }
    }
    return count;
}

console.log(numAsteriscos([
        ['*', '', '*'],
        ['', '*', ''],
        ['*', '', '*']
    ]))
    // 5