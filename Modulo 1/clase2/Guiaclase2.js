// function contarPalabra(array) {
//   let contadorPalabra = [];
//   array.forEach((cadena) => {
//     let palabra = cadena.split(/\s+/);
//     palabra.forEach((palabra) => {
//       if (contadorPalabra[palabra]) {
//         contadorPalabra[palabra]++;
//       } else {
//         contadorPalabra[palabra] = 1;
//       }
//     });
//   });
//   return contadorPalabra;
// }
// let palabrasarray = ["buenos dias", "buenas tardes", "buenas noches"];
// let resultado = contarPalabra(palabrasarray);
// console.log(resultado);

//////////////////////////////
// let ProductoA = {
//   nombre: "Camisa",
//   precio: 25,
//   cantidad: 5,
// };

// let ProductoB = {
//   nombre: "Nike Cortez",
//   precio: 40,
//   cantidad: 3,
// };

// let costototalproductoA = ProductoA.precio * ProductoA.cantidad;
// let costototalproductoB = ProductoB.precio * ProductoB.cantidad;

// let costofinal = costototalproductoA + costototalproductoB;

// console.log(costototalproductoA);
// console.log(costototalproductoB);

// console.log("El costo final total es: " + costofinal);

// let personas = [
//   { nombre: "Sergio ferra", edad: 41, ciudad: "San Salvador" },
//   { nombre: "Toño", edad: 41, ciudad: "Soya" },
//   { nombre: "Senya", edad: 21, ciudad: "Apopa" },
//   { nombre: "Keznit", edad: 25, ciudad: "San Salvador" },
// ];

// function filtrarPersona(personaObjeto, ciudad) {
//   return personaObjeto.filter(
//     (persona) => persona.edad > 30 && persona.ciudad === ciudad
//   );
// }

// let personasFiltradas = filtrarPersona(personas, "San Salvador");
// console.log(personasFiltradas);

// let numeros = [2, 3, 4, 6, 5];

// let cuadradosnewarray = numeros.map((numero) => numero ** 2);

// console.log(cuadradosnewarray);

// let sumaPares = 0;
// let arreglo = [1, 2, 3, 4, , 6, 7, 8, 9, 10];

// for (let i = 0; i < arreglo.length; i++) {
//   if (arreglo[i] % 2 === 0) {
//     sumaPares += arreglo[i];
//   }
// }
// console.log(sumaPares);

// let personas = [
//   { nombre: "Sergio ferra", edad: 41, ciudad: "San Salvador" },
//   { nombre: "Toño", edad: 41, ciudad: "Soya" },
//   { nombre: "Senya", edad: 21, ciudad: "Apopa" },
//   { nombre: "Keznit", edad: 25, ciudad: "San Salvador" },
// ];

// let buscarpornombre = (personas, nombre) => {
//   return personas.find((object) => object.nombre == nombre);
// };

// let personaBuscada = buscarpornombre(personas, "Toño");
// console.log(personaBuscada);

// let personas = [
//   { nombre: "Sergio ferra", edad: 41 },
//   { nombre: "Toño", edad: 41 },
//   { nombre: "Senya", edad: 21 },
//   { nombre: "Keznit", edad: 25 },
// ];

// let personasOrdenadas = personas.sort((a, b) => a.edad - b.edad);
// console.log(personasOrdenadas);

// validarObjeto = (objeto) => {
//   const propiedades = ["nombre", "direccion", "telefono"];
//   for (let propiedad of propiedades) {
//     if (objeto.hasOwnProperty(propiedad)) {
//       let mjs = "objeto aprobado ";
//       return mjs;
//     } else {
//       let mjs2 = "objeto no es aprobado ";
//       return mjs2;
//     }
//   }
// };

// let cliente = { nombre: "William", direccion: "Soya", telefono: 34353435 };

// console.log(validarObjeto(cliente));

// let listaCompras = {
//   Manzana: 5,
//   Platano: 3,
//   Coca: 3,
//   pan: 3,
// };
// let generarListaCompras = (listaCompras) => {
//   let listalegible = "Lista de compras \n";

//   for (let elemento in listaCompras) {
//     listalegible += `${elemento}:${listaCompras[elemento]} unidades \n`;
//   }
//   return listalegible;
// };
// let listalegible = generarListaCompras(listaCompras);
// console.log(listalegible);

// let estudiante = [
//   { nombre: "Sergio ferra", edad: 21 },
//   { nombre: "Ibai llanos", edad: 21 },
//   { nombre: "rFaide", edad: 21 },
//   { nombre: "TSM ImperialHall", edad: 21 },
// ];

// let profesores = [
//   { nombre: "Pedro", materia: "sociales" },
//   { nombre: "Kane", materia: "fisica" },
//   { nombre: "Reps", materia: "Mate" },
//   { nombre: "Verlhust", materia: "Ingles" },
// ];

// let combinarObjetos = (a, b) => {
//   let comunidadEducativa = [...a, ...b];
//   return comunidadEducativa;
// };

// let comunidad = combinarObjetos(estudiante, profesores);
// console.log(comunidad);
