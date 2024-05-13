// let sumar = (a, b) => {
//   return a + b;
// };

// let variable = sumar(10, 20);
// console.log(variable);

// const objeto1 = {
//   n1: 15,
//   n2: 20,
//   suma: function () {
//     let suma = this.n1 + this.n2;
//     console.log(suma);
//   },
// };

// objeto1.suma();

// const readline = require("readline");

const { Console } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

///ejercicio1//

let Ejercicio1 = () => {
  let evaluar = (numero) => {
    if (numero >= 1) {
      return console.log(numero + "  numero es positivo");
    } else if (numero <= -1) {
      return console.log(numero + "  numero es negativo");
    } else {
      return console.log("numero es 0");
    }
  };

  rl.question("ingrese  un numero: ", (numero) => {
    evaluar(numero);
    mainloop();
  });
};
/////ejercicio 2///
let Ejercicio2 = () => {
  rl.question("ingrese primer numeros: ", (numero1) => {
    rl.question("ingrese segundo  numeros: ", (numero2) => {
      rl.question("ingrese tercero numeros: ", (numero3) => {
        comparacion(numero1, numero2, numero3);
        mainloop();
      });
    });
  });

  let comparacion = (numero1, numero2, numero3) => {
    if (
      parseFloat(numero1) > parseFloat(numero2) &&
      parseFloat(numero1) > parseFloat(numero3)
    ) {
      return console.log(numero1 + " es mayor");
    } else if (
      parseFloat(numero2) > parseFloat(numero1) &&
      parseFloat(numero2) > parseFloat(numero3)
    ) {
      return console.log(numero2 + " es mayor");
    } else if (
      parseFloat(numero3) > parseFloat(numero1) &&
      parseFloat(numero3) > parseFloat(numero2)
    ) {
      return console.log(numero3 + " es mayor");
    }
  };
};
// ejercicio 3

let Ejercicio3 = () => {
  rl.question("digite el numero a realizar el factorial ", (n1) => {
    factorizar(n1);
    mainloop();
  });

  let factorizar = (n1) => {
    let resultado = 1;
    for (let i = 1; i <= parseFloat(n1); i++) {
      resultado *= i;
    }
    console.log("El factorial es :" + resultado);
  };
};

//////// ejercicio 4 ///

let Ejercicio4 = () => {
  rl.question("digite el numero a verificar ", (n1) => {
    paroimpar(n1);
    mainloop();
  });

  let paroimpar = (n1) => {
    if (parseFloat(n1) % 2 == 0) {
      console.log(n1 + ": es par");
    } else {
      console.log(n1 + ": es impar");
    }
  };
  mainloop();
};

let Ejercicio5 = () => {
  rl.question("Ingrese el primer Color: ", (color) => {
    rl.question("Ingrese el segundo Color: ", (color2) => {
      combinacion(color, color2);
    });
  });

  let combinacion = (color, color2) => {
    if (color === "azul" && color2 === "amarillo") {
      console.log("el resultado de la mezcla es verde");
    } else if (color == "azul" && color2 == "rojo") {
      console.log("el resultado de la mezcla es morado");
    } else if (color == "rojo" && color2 == "amarillo") {
      console.log("el resultado de la mezcla es naranja");
    } else {
      console.log("el resultado de la mezcla no está disponible");
    }
  };
};

////ejercicio 6/////

// let meses = (mes) => {
//   meses = [
//     "0",
//     "enero",
//     "febrero",
//     "marzo",
//     "abril",
//     "mayo",
//     "junio",
//     "agosto",
//     "septiembre",
//     "octubre",
//     "noviembre",
//     "diciembre",
//   ];

//   console.log("el mes es :" + meses[mes]);
// };

// rl.question("Ingrese el numero del mes", (mes) => {
//   meses(mes);
// });
let Ejercicio6 = () => {
  let meses = (mes) => {
    mesasked = "";
    switch (parseInt(mes)) {
      case 1:
        mesasked = "Enero";
        break;
      case 2:
        mesasked = "Febrero";
        break;
      case 3:
        mesasked = "Marzo";
        break;
      case 4:
        mesasked = "Abril";
        break;
      case 5:
        mesasked = "Mayo";
        break;
      case 6:
        mesasked = "Junio ";
        break;
      case 7:
        mesasked = "Julio";
        break;
      case 8:
        mesasked = "Agosto";
        break;
      case 9:
        mesasked = "Septiembre";
        break;
      case 10:
        mesasked = "Octubre";
        break;
      case 11:
        mesasked = "Noviembre";
        break;
      case 12:
        mesasked = "Diciembre";
        break;
      default:
        console.log("mes no existe");
        break;
    }
    console.log("el mes es" + mesasked);
  };

  rl.question("Ingrese el numero del mes", (mes) => {
    meses(mes);
    mainloop();
  });
};

/////ejercicio 7///
let Ejercicio7 = () => {
  rl.question("Digite la categoria de la nave: ", (categoria) => {
    let tipovehiculo;
    switch (categoria) {
      case "Moto":
        tipovehiculo = "Motocicleta";
        break;
      case "Camion":
        tipovehiculo = "Super Camion";
        break;
      case "Bicicleta":
        tipovehiculo = "Super Bicibleta";
        break;
      default:
        tipovehiculo = "no exite la categoria";
        break;
    }
    console.log("la categoria es: " + tipovehiculo);
    mainloop();
  });
};

let mainloop = () => {
  option = "";
  do {
    rl.question(
      "Digite \n 1-Ejercicio1\n 2-Ejercicio2\n 3-Ejercicio3\n 4-Ejercicio4\n 5-Ejercicio5\n 6-Ejercicio6\n 7-Ejercicio7\n 8-Salir\n Ingrese una opcion: ",
      (Opcion) => {
        option = Opcion;
        switch (parseInt(Opcion)) {
          case 1:
            Ejercicio1();

            break;
          case 2:
            Ejercicio2();
            break;
          case 3:
            Ejercicio3();
            break;
          case 4:
            Ejercicio4();
            break;
          case 5:
            Ejercicio5();
            break;
          case 6:
            Ejercicio6();
            break;
          case 7:
            Ejercicio7();
            break;
        }
      }
    );
  } while (option == 8);
};

mainloop();
