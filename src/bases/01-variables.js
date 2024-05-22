
//VARIABLES Y CONSTANTES

const nombre = "Fernando";
const apellido = "Herrera";

let valorDado = 5;
valorDado = 4;

console.log(nombre,valorDado);

//SCOPE : la variable valorDado solo existe dentro del scope if .
if(true) {
    let valorDado = 13;
    console.log(valorDado);
}
