/**
 * forEach es un método moderno de los arrays que te permite ejecutar 
 * una función para cada elemento del array, sin tener que manejar el 
 * contador index.
 * 
 * let frutas = ["manzana","pera","durazno"];

frutas.forEach(function(fruta){
    console.log("Fruta -> "+fruta)
});
 */


/**
 * Filtrar elementos
 * filter es un metodo que permite crear un nuevo array 
 * solo con los elementos que cumplan cierta condición.
 * let numeros =[1,2,3,4,5,6]
let pares =numeros.filter(num=>num%2===0)
console.log(pares)

 */

//imprime los colores
let colores =["amarillo","verde","rojo"];
colores.forEach(function(color){
    console.log(color.toUpperCase())
   
});

let nombres =["Ana","Luis","Carla"];
nombres.forEach(function(name){
    console.log("Hola, ", name)
});