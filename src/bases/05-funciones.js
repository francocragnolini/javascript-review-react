//FUNCIONES 

function saludar (nombre) { 
    return `Hello, ${nombre}`;
}

saludar = 30;

// console.log(saludar("Franco"));


// Buena Practica: trabajar funciones con constantes

const saludar2 = function  (nombre) { 
    return `Hello, ${nombre}`;
}

console.log(saludar2("Franco"));


// Funciones arrow functions

const saludar4 = (nombre)=>{return nombre;};

const saludar3 = (nombre)=> nombre;


//CUESTIONES IMPORTANTES

const getUser = ()=>({iud:"ABC123", 
username:"Frankito8",
});

console.log(getUser());


// Tarea
// Transformar a una funcion de flecha
// retornar un objeto implicito

function getUsuarioActivo(nombre) {
    return {
        uid:"ABC123",
        username: nombre,
    }
}

console.log(getUsuarioActivo("Franco1"))


const getUsuarioActivo2 =(nombre)=> 
     ({
        uid:"ABC123",
        username: nombre,
    });


const usuarioActivo3 = getUsuarioActivo2("Franco2");

console.log(usuarioActivo3);