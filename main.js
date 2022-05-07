// console.log(saludar());

// function saludar(nombre=`Marcos`){
//     return `Hola usuario ${nombre} como estas :)`;
// }

//funcion mediante expresion
// const saludo = function (nombre = "Draven") {
//   return `Hola usuario ${nombre} como estas`;
// };
// console.log(saludo());

//Function mediante constructor de objeto
let saludar = new Function('nombre=`Draven`','return `Hola Usuario ${nombre} como estas`');
console.log(saludar());