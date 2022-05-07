// Crear un formulario con mínimo 10 campos de datos obtener 
// la información y por medio de un botón ejecutar un función 
// que muestre los datos capturados

const mostrar = function(mensaje="No enviado",callback) {
    document.querySelector(".mensaje").insertAdjacentHTML("beforeend", `<b>${mensaje} : <span>${callback.value}</span> </b> enviado desde el formulario<br>`);
};

addEventListener("submit", function (e){
    let input = e.target;
    document.querySelector(".mensaje").innerHTML = null;
    mostrar("Primer Nombre", input.dato1);
    mostrar("Segundo Nombre", input.dato2);
    mostrar("Primer Apellido", input.dato3);
    mostrar("Segundo Apellido", input.dato4);
    mostrar("Email ", input.dato5);
    mostrar("Edad", input.dato6);
    mostrar("Dirección", input.dato7);
    mostrar("Celular", input.dato8);
    mostrar("País", input.dato9);
    mostrar("Municipio", input.dato10);
    e.preventDefault();
}) 



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
// let saludar = new Function('nombre=`Draven`','return `Hola Usuario ${nombre} como estas`');
// console.log(saludar());

// //funciones callback o retrollamadas
// let fnA = function(){
//     return `Hola soy la funcion A y me llamaran en B`;
// }
// let fnB = function(callback){
//     console.log(callback());
//     return `Hola soy la funcion B `;
// }

// console.log(fnB(fnA));