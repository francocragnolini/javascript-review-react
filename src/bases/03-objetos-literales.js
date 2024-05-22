//OBJETOS LITERALES

const persona = {
    nombre: "Franco",
    apellido: "Cragnolini",
    direccion: {
        calle:"Spilimbergo",
        altura:1234,
    },
};


//Copiar objetos.

// Mala Practica copia el valor de referencia en memoria del Objeto anterior "persona" - cualquier modificacion al objeto persona2 modifica los datos del objeto persona
const persona2 = persona;

//RESULTADO
persona2.nombre = "Pedro";
console.log(persona2);
console.log(persona);

// Manera Correcta de clonar o copiar un objeto
// crear una nueva referencia en memoria que no afecta al objeto original.
// Spread operator ...

const persona3= {...persona};
persona3.apellido ="Moriconi";


console.log(persona)
console.log(persona3)
