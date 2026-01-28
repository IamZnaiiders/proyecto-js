/**
 * Objetos 
 * Son una agrupacion de datos que hacen sentido tenerlos juntos
 */

/**
 * 
 * “this garantiza que cada objeto creado a 
 * partir de la clase tenga sus propios valores 
 * independientes para sus propiedades.”
*/

let nombre ="tangiro"
let anime ="demon slayer"
let edad =34

let personaje={
    nombre: "Tanjiro",
    anime: "demon slayer",
    edad: 16,
};

console.log(personaje);
console.log(personaje.edad);
console.log(personaje["anime"]);


