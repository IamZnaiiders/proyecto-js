// const students = ["Maria", "Antonio", "Marcos"]
// //Metodo forEach -> tradicional
// students.forEach(function(item){ 
//     console.log(item)  
//  });

// //Arrow function -> funcion flecha
// /**
//  * Orden de los parametros: elemento, indicee, arreglo completo
//  * aplica con los demas metodos.
//  *  */
// students.forEach((item, index, array)=>{
//     console.log(item, index, array)
// })

/**
 * Array de objetos
 */

const persona =[ 
    {
        name:"carlos",
        lastname:"apolaya",
        age:25
    },
    {
        name:"xiomara",
        lastname:"salvatierra",
        age:23
    }
]
const listClases =[]
persona.forEach((item)=>{ 
    listClases.push(item.name, +" " +persona.lastname)
    console.log(item.name +" -> "+ item.lastname)
})

console.log(listClases)




//Imprime todos los números del array.
const numeros1 =[1,2,3,4,5]
numeros1.forEach((item) => 
    console.log(" Elementos del array "+ " => "+ item)
)

//Imprime cada elemento junto con su índice.
const numeros = [1,2,3,4,5]
numeros.forEach(function (item, index) {
    console.log(" Elemento "+item +" -> " +" Indice " +index)
})

// Imprime solo los números pares
const num = [1,2,3,4,5,6,7,8,9,10]
num.forEach(function (num) {
    let esPar = num % 2
    if(esPar===0)
        console.log(num)
})

//Imprime la longitud de cada palabra.

const words = ["hola", "javascript", "foreach"]

// Imprime la longitud de cada palabra.
words.forEach(function (item) {
    console.log(item.length)
})

// Suma todos los números del array.
const prices = [10, 20, 30, 40]
let sumaNum = 0
prices.forEach(function (item) {
        sumaNum +=item
})
console.log(sumaNum)


// Cuenta cuántos números son mayores a 10.
const nums = [5, 12, 8, 20, 3, 15]
let contador=0
nums.forEach(function (item){
    if(item > 10)
        contador ++
})
console.log(contador)

// Crea un nuevo array con los números multiplicados por 2
const num2 = []
let operacion =0
const array = [5, 12, 8, 20, 3, 15]

array.forEach(function (item){
     operacion = item * 2
     num2.push(operacion)
})
console.log(num2)

// Convierte todas las palabras a mayúsculas toUpperCase()

const words3 = ["hola", "space" ,"runnig"]
words3.forEach(function (item) {
    console.log(item.toUpperCase())    
})




// Encuentra el número más grande del array.
let resultado =0
const numsMayor = [4, 9, 2, 15, 6]

numsMayor.forEach(function (item,index) {

    if (item>=resultado) {
        resultado=item
    }
})

console.log(resultado)


// sumar solo los pares
let numeroPar=0
let sumaNumeros=0
const numsPar = [1, 2, 3, 4, 5, 6]
numsPar.forEach(function (item) {
    numeroPar = item % 2
    if(numeroPar===0)
    sumaNumeros+=item
})

console.log(sumaNumeros)


// imprime palabras con mas de 5 letras
const palabras = ["casa", "programacion", "js", "computadora"]

palabras.forEach(function (item) {
    if(item.length>5)
        console.log(item)
})




// nombres que inicien con la letra a



const names = ["ana", "luis", "andres", "pedro"]

names.forEach(function (item) {
   let estado = item.startsWith("a")
    if (estado === true){
        console.log(item)
    }
    
})
