//TEMPLATE STRINGS

const nombre = "Franco";
const apellido = "Cragnolini";

// Concatenaciones
const nombreCompleto = nombre + " " + apellido;

// Template String 
const nombreCompleto2 = `
 ${nombre}
 ${apellido}
 `;


console.log(nombreCompleto2);



function getSaludo(nombre, apellido) {

    console.log(`hola ${nombre} ${apellido}`);
     return `hola ${nombre} ${apellido}`;
}

console.log(getSaludo(nombre,apellido));