// ARREGLOS 
// en  javascript es considerado un objeto
//para agregar un valor sin modificar el arreglo original hay que utilizar el spread operator
const arreglo = [1, 2, 3, 4];
let arreglo2 = [...arreglo, 5];

console.log(arreglo);
console.log(arreglo2)

const arreglo3 = arreglo.map((e) => e + 1);

console.log(arreglo3);

