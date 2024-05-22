import { getHeroeById } from "./bases/08-import-export";

// PROMESAS


//SIMULANDO PETICION HTTP
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      const p1 = getHeroeById(2);
      resolve(p1)
      reject("No se puede encontrar el heroe")
      
    },2000)

});

promesa.then((heroe)=>{
    console.log("heroe", heroe)
    
}).catch(err => console.warn(err))


// EJEMPLO ASYNCRONICO 

const getHeroeByIdAsync = (id) => {

    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
          const p1 = getHeroeById(id);

          if(p1) {
            resolve(p1)
          } else {
            reject("No se pudo encontrar el heroe")
          }
         
        },2000)
    
    });

    return promesa;

}


getHeroeByIdAsync(10).then((heroe)=> {
    console.log("Heroe", heroe);
}).catch((err)=>{console.warn(err)});