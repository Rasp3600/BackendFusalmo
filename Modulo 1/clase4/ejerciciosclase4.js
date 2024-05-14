// let saludar = (nombre, callback) => {
//   const saludar = `Hola, ${nombre}`;
//   callback(saludar);
// };

// let mostrar = (saludo) => {
//   console.log(saludo);
// };

// saludar("Alphnse", mostrar);

/////ejercicio 2//
// let multiplicarPromise = (a, b) => {
//   return new Promise((resolve, reject) => {
//     let resultado = a * b;
//     if (isNaN(resultado)) {
//       reject("ERROR EN LA OPERACION");
//     } else {
//       resolve(resultado);
//     }
//   });
// };

// multiplicarPromise(2, 3)
//   .then((reultado) => {
//     console.log(reultado);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
///ejercicio 3

// let multiplicar = (a, b, callback) => {
//   const resultado = a * b;
//   callback(resultado);
// };

// multiplicar(3, 6, (resultad) => {
//   console.log("resultado: ", resultad);
// });

///ejercicio 4
// let retrasarpromesa = (ms) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`la promesa se ejecutó en ${ms} miliseconds`);
//     }, ms);
//   });
// };

// retrasarpromesa(10000000).then((mensaje) => {
//   console.log(mensaje);
// });
/// ejercicio 5//
// let operacionesAsincrona=(callback)=>{
//   setTimeout(()=>{
//     callback('Operacion asincrona completada')
//   },8000)
// }

// operacionesAsincrona((mensaje)=>{
//   console.log(mensaje);
// })

//ejercicio 6
// let paso1 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(5);
//       console.log("paso 1 funcionando");
//     }, 5000);
//   });
// };

// let paso2 = (num) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(num * 2);
//       console.log("paso 2 funcionando");
//     }, 5000);
//   });
// };

// let paso3 = (num) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(num + 2);
//       console.log("paso 3 funcionando");
//     }, 5000);
//   });
// };

// paso1()
//   .then(paso2)
//   .then(paso3)
//   .then((resultado) => {
//     console.log("Resultado es: ", resultado);
//   });

////////////ejercicio 7
// let dividir = (a, b, callback) => {
//   if (b == 0) {
//     callback("Error dividio por cero");
//   } else {
//     const resultado = a / b;
//     callback(null, resultado);
//   }
// };
// dividir(10, 5, (error, resultado) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Resultado es: ", resultado);
//   }
// });
//////////ejercicio 8
// let dividir = (a, b) => {
//   return new Promise((resolve, reject) => {
//     if (b == 0) {
//       reject("Error division en cero");
//     } else {
//       let resultado = a / b;
//       resolve(resultado);
//     }
//   });
// };
// dividir(10, 2)
//   .then((resultado) => {
//     console.log(resultado);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
/// ejercicio 9
// let tarea1 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("tarea 1 completada");
//     }, 3000);
//   });
// };
// let tarea2 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("tarea 2 completada");
//     }, 3000);
//   });
// };
// let tarea3 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("tarea 3 completada");
//     }, 3000);
//   });
// };

// Promise.all([tarea1(), tarea2(), tarea3()])
//   .then((resultado) => {
//     console.log("Las tareas se resolvieron");
//     resultado.forEach((resultado) => {
//       console.log(resultado);
//     });
//   })
//   .catch((error) => {
//     console.log("error" + error);
//   });

//////10

let tarea1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("tarea 1 completada");
    }, 1000);
  });
};
let tarea2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("tarea 2 completada");
    }, 1500);
  });
};
let tarea3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("tarea 3 completada");
    }, 2000);
  });
};

Promise.all([tarea1(), tarea2(), tarea3()])
  .then((resultado) => {
    console.log("Las tareas se resolvieron");
    resultado.forEach((resultado) => {
      console.log(resultado);
    });
    console.log("Accion Final");
  })
  .catch((error) => {
    console.log("error" + error);
  });
