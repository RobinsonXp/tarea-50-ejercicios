
// 1. Ejercicio de bucles:
// Escribe un bucle que imprima los números del 1 al 10 en la consola.

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// 2. Ejercicio de condicionales:
// Escribe una función que tome un número como argumento y devuelva "Es par" si el número es par, y "Es impar" si el número es impar.

// function validarPar(numero) {
//   if (numero % 2 === 0) {
//     return "Es par";
//   } else {
//     return "Es impar";
//   }
// }

// 3. Ejercicio de map:
// Dado un arreglo de números, utiliza el método map para crear un nuevo arreglo que contenga el cuadrado de cada número(sin usar Math.pow()).

// const numeros = [1, 2, 3, 4, 5, 6];

// function calcularCuadrado(numero) {
//   return numero * numero;
// }

// const cuadrados = numeros.map(calcularCuadrado);
// console.log(cuadrados);

// ========================================

// const numeros = [1, 2, 3, 4, 5, 6];
// const cuadrados = numeros.map(numero => numero * numero);

// console.log(cuadrados);


// 4. Ejercicio de filter:
// Dado un arreglo de números, utiliza el método filter para crear un nuevo arreglo que contenga solo los números pares.

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const pares = numeros.filter(numero => numero % 2 === 0);

// console.log(pares);

// 5. Ejercicio de reduce:
// Dado un arreglo de números, utiliza el método reduce para calcular la suma de todos los elementos del arreglo.

// const numeros = [1, 2, 3, 4, 5, 6];
// const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

// console.log(suma);

// 6. Ejercicio combinado:
// Dado un arreglo de palabras, utiliza un bucle y condicionales para crear un nuevo arreglo que contenga solo las palabras que tienen más de 5 caracteres. Luego, utiliza el método map para convertir cada palabra en mayúsculas.

// const palabras = ["manzana", "naranja", "plátano", "uva", "sandía", "kiwi"];
// const palabrasAux = palabras.map(palabra => palabra.toUpperCase());
// const palabrasLargasMayusculas = [];

// for (let i = 0; i < palabrasAux.length; i++) {
//   if (palabrasAux[i].length > 5) {
//     palabrasLargasMayusculas.push(palabrasAux[i].toUpperCase());
//   }
// }

// console.log(palabrasLargasMayusculas);

// =====================================

// const palabras = ["manzana", "naranja", "plátano", "uva", "sandía", "kiwi"];
// const palabrasLargas = palabras.filter(palabra => palabra.length > 5);
// const palabrasMayuscula = palabrasLargas.map(palabra => palabra.toUpperCase());

// console.log(palabrasMayuscula);

// 7. Ejercicio combinado:
// Dado un arreglo de objetos que representan productos, utiliza el método filter para crear un nuevo arreglo que contenga solo los productos que están en stock (es decir, aquellos cuya propiedad stock sea verdadera). Luego, utiliza el método reduce para calcular el precio total de todos los productos en stock.

// const productos = [
//   { nombre: "Producto 1", precio: 10, stock: true },
//   { nombre: "Producto 2", precio: 20, stock: false },
//   { nombre: "Producto 3", precio: 30, stock: true },
//   { nombre: "Producto 4", precio: 40, stock: true },
//   { nombre: "Producto 5", precio: 50, stock: false }
// ];

// const productosEnStock = productos.filter(producto => producto.stock);
// const precioTotal = productosEnStock.reduce((acumulador, producto) => acumulador + producto.precio, 0);

// console.log(productosEnStock);
// console.log(precioTotal);

// 8. Ejercicio combinado:
// Dado un arreglo de nombres, utiliza el método map para crear un nuevo arreglo que contenga solo los nombres que comienzan con la letra "A". Luego, utiliza el método reduce para concatenar todos los nombres en una sola cadena separada por comas.

// const nombres = ["Ana", "Pedro", "Alberto", "María", "Alejandra"];

// const nombresConA = nombres
//   .filter(nombre => nombre.startsWith("A"))
//   .map(nombre => nombre);

// const nombresConcatenados = nombresConA.reduce((acumulador, nombre) => acumulador + ", " + nombre);

// console.log(nombresConcatenados);

// 9. Ejercicio de bucles:
// Escribe un bucle que imprima los números del 10 al 1 en la consola, en orden descendente.

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// 10. Ejercicio de condicionales:
// Escribe una función que tome un número como argumento y devuelva "Positivo" si el número es mayor que 0, "Negativo" si el número es menor que 0, y "Cero" si el número es igual a 0.

// function verificarNumero(numero) {
//   if (numero > 0) {
//     return "Positivo";
//   } else if (numero < 0) {
//     return "Negativo";
//   } else {
//     return "Cero";
//   }
// }

// // Ejemplo de uso
// console.log(verificarNumero(5));    // "Positivo"
// console.log(verificarNumero(-3));   // "Negativo"
// console.log(verificarNumero(0));    // "Cero"

// 11. Ejercicio de map:
// Dado un arreglo de palabras, utiliza el método map para crear un nuevo arreglo que contenga la longitud de cada palabra.

// const palabras = ["CodiGo", "HTML", "JavaScript", "CSS"];
// const longitudes = palabras.map(palabra => palabra.length);

// console.log(longitudes);

// 12. Ejercicio de filter:
// Dado un arreglo de números, utiliza el método filter para crear un nuevo arreglo que contenga solo los números mayores que 5.

// const numeros = [9, 7, 1, 8, 4, 10, 15];
// const numerosMayoresQue5 = numeros.filter(numero => numero > 5);

// console.log(numerosMayoresQue5);

// 13. Ejercicio de reduce:
// Dado un arreglo de números, utiliza el método reduce para calcular el producto de todos los elementos del arreglo.

// const numeros = [1, 2, 4, 3, 5, 6];
// const producto = numeros.reduce((acumulador, numero) => acumulador * numero, 1);

// console.log(producto);

// 14. Ejercicio combinado:
// Dado un arreglo de objetos que representan estudiantes, utiliza el método filter para crear un nuevo arreglo que contenga solo los estudiantes que tienen una calificación mayor o igual a 80. Luego, utiliza el método map para crear un nuevo arreglo que contenga solo los nombres de esos estudiantes.

// const estudiantes = [
//   { nombre: 'Roberto', calificacion: 85 },
//   { nombre: 'Pedro', calificacion: 70 },
//   { nombre: 'María', calificacion: 92 },
//   { nombre: 'Juan', calificacion: 78 },
//   { nombre: 'Jose', calificacion: 99 }
// ];

// const estudiantesDestacados = estudiantes
//   .filter(estudiante => estudiante.calificacion >= 80)
//   .map(estudiante => estudiante.nombre);

// console.log(estudiantesDestacados);

// 15. Ejercicio combinado:
// Dado un arreglo de palabras, utiliza el método filter para crear un nuevo arreglo que contenga solo las palabras que contienen la letra "a". Luego, utiliza el método map para convertir cada palabra en minúsculas.

// const palabras = ["Hola", "Manzana", "Programación", "Casa", "Elefante"];

// const palabrasConA = palabras
//   .filter(palabra => palabra.includes("a"))
//   .map(palabra => palabra.toLowerCase());

// console.log(palabrasConA);

// 16. Ejercicio combinado:
// Dado un arreglo de objetos que representan libros, utiliza el método filter para crear un nuevo arreglo que contenga solo los libros cuyo autor sea "J.K. Rowling". Luego, utiliza el método reduce para calcular la suma de las páginas de todos los libros seleccionados.

// const libros = [
//   { titulo: 'Harry Potter y la Piedra Filosofal', autor: 'J.K. Rowling', paginas: 336 },
//   { titulo: 'Animales Fantásticos y Dónde Encontrarlos', autor: 'J.K. Rowling', paginas: 304 },
//   { titulo: 'Harry Potter y el Prisionero de Azkaban', autor: 'J.K. Rowling', paginas: 448 },
//   { titulo: 'El Cáliz de Fuego', autor: 'J.K. Rowling', paginas: 636 },
//   { titulo: 'Harry Potter y la Orden del Fénix', autor: 'J.K. Rowling', paginas: 870 },
//   { titulo: 'El Misterio del Príncipe', autor: 'J.K. Rowling', paginas: 608 },
//   { titulo: 'Harry Potter y las Reliquias de la Muerte', autor: 'J.K. Rowling', paginas: 607 },
//   { titulo: 'Quidditch a través de los Tiempos', autor: 'Kennilworthy Whisp', paginas: 56 },
// ];

// const librosJKRowling = libros.filter(libro => libro.autor === 'J.K. Rowling');

// const sumaPaginas = librosJKRowling.reduce((acumulador, libro) => acumulador + libro.paginas, 0);

// console.log(sumaPaginas);

// 17. Ejercicio de bucles:
// Escribe un bucle que imprima los números pares del 1 al 20 en la consola.

// for (let i = 2; i <= 20; i += 2) {
//   console.log(i);
// }

// 18. Ejercicio de condicionales:
// Escribe una función que tome una cadena como argumento y devuelva "Es una frase" si la cadena contiene espacios en blanco, y "Es una palabra" si la cadena no contiene espacios en blanco.

// function verificarCadena(cadena) {
//   if (cadena.includes(' ')) {
//     return "Es una frase";
//   } else {
//     return "Es una palabra";
//   }
// }

// // Ejemplos de uso:
// console.log(verificarCadena("Hola mundo")); // "Es una frase"
// console.log(verificarCadena("HolaMundo")); // "Es una palabra"
// console.log(verificarCadena("")); // "Es una palabra"

// 19. Ejercicio de map:
// Dado un arreglo de nombres, utiliza el método map para crear un nuevo arreglo que contenga solo los nombres en mayúsculas.

// const nombres = ['Juan', 'María', 'Pedro', 'Ana'];
// const nombresMayusculas = nombres.map(nombre => nombre.toUpperCase());

// console.log(nombresMayusculas);

// 20. Ejercicio de filter:
// Dado un arreglo de números, utiliza el método filter para crear un nuevo arreglo que contenga solo los números impares.

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numerosImpares = numeros.filter(numero => numero % 2 !== 0);

// console.log(numerosImpares);

// 21. Ejercicio de reduce:
// Dado un arreglo de palabras, utiliza el método reduce para calcular la cantidad total de caracteres de todas las palabras en el arreglo.

// const palabras = ['CodiGo', 'Mundo', 'JavaScript', 'Programación'];
// const cantidadCaracteres = palabras.reduce((acumulador, palabra) => acumulador + palabra.length, 0);

// console.log(cantidadCaracteres);

// 22. Ejercicio combinado:
// Dado un arreglo de objetos que representan productos, utiliza el método filter para crear un nuevo arreglo que contenga solo los productos cuyo precio sea mayor a $50. Luego, utiliza el método map para crear un nuevo arreglo que contenga solo los nombres de esos productos.

// const productos = [
//   { nombre: 'Camiseta', precio: 25 },
//   { nombre: 'Zapatos', precio: 80 },
//   { nombre: 'Pantalones', precio: 60 },
//   { nombre: 'Bufanda', precio: 15 },
//   { nombre: 'Sombrero', precio: 50 },
//   { nombre: 'Chaqueta', precio: 70 },
// ];

// const productosMayor50 = productos.filter(producto => producto.precio > 50);
// const nombresProductos = productosMayor50.map(producto => producto.nombre);

// console.log(nombresProductos);

// 23. Ejercicio combinado:
// Dado un arreglo de números, utiliza el método filter para crear un nuevo arreglo que contenga solo los números que sean múltiplos de 3. Luego, utiliza el método reduce para calcular la suma de los números seleccionados.

// const numeros = [1, 3, 5, 9, 12, 15, 18, 20];
// const numerosMultiplosDe3 = numeros.filter(numero => numero % 3 === 0);
// const sumaMultiplosDe3 = numerosMultiplosDe3.reduce((acumulador, numero) => acumulador + numero, 0);

// console.log(sumaMultiplosDe3);

// 24. Ejercicio combinado:
// Dado un arreglo de objetos que representan estudiantes, utiliza el método filter para crear un nuevo arreglo que contenga solo los estudiantes que tienen una calificación promedio mayor o igual a 90. Luego, utiliza el método reduce para calcular el promedio de las calificaciones de los estudiantes seleccionados.

// const estudiantes = [
//   { nombre: 'Juan', calificaciones: [85, 90, 95] },
//   { nombre: 'María', calificaciones: [92, 87, 98] },
//   { nombre: 'Pedro', calificaciones: [80, 85, 90] },
//   { nombre: 'Ana', calificaciones: [95, 92, 96] },
// ];

// const estudiantesPromedio90 = estudiantes.filter(estudiante => {
//   const promedio = estudiante.calificaciones.reduce((acumulador, calificacion) => acumulador + calificacion, 0) / estudiante.calificaciones.length;
//   return promedio >= 90;
// });

// const promedioCalificaciones = estudiantesPromedio90.reduce((acumulador, estudiante) => {
//   const promedio = estudiante.calificaciones.reduce((acumulador, calificacion) => acumulador + calificacion, 0) / estudiante.calificaciones.length;
//   return acumulador + promedio;
// }, 0) / estudiantesPromedio90.length;

// console.log(promedioCalificaciones);

// 25. Ejercicio de bucles:
// Escribe un bucle que imprima la serie de Fibonacci hasta el décimo término. (La serie de Fibonacci comienza con 0 y 1, y cada término siguiente es la suma de los dos anteriores).

// let a = 0;
// let b = 1;

// console.log(a); // Imprimir el primer término: 0
// console.log(b); // Imprimir el segundo término: 1

// for (let i = 3; i <= 10; i++) {
//   const c = a + b; // Calcular el siguiente término sumando los dos anteriores
//   console.log(c); // Imprimir el siguiente término
//   a = b; // Actualizar el valor de a al término anterior
//   b = c; // Actualizar el valor de b al término actual
// }

// 26. Ejercicio de condicionales:
// Escribe una función que tome una cadena como argumento y devuelva "Es un palíndromo" si la cadena es igual al revés, y "No es un palíndromo" si no lo es.

// function esPalindromo(cadena) {
//   //convierte en arreglo de caracteres, invierte el orden de los elementos, une los elementos del arreglo en una cadena
  
//   const cadenaInvertida = cadena.split('').reverse().join('');
//   if (cadena === cadenaInvertida) {
//     return "Es un palíndromo";
//   } else {
//     return "No es un palíndromo";
//   }
// }

// // Ejemplo de uso:
// console.log(esPalindromo("radar")); // "Es un palíndromo"
// console.log(esPalindromo("hello")); // "No es un palíndromo"
// console.log(esPalindromo("level")); // "Es un palíndromo"

// 27. Ejercicio de map:
// Dado un arreglo de números, utiliza el método map para crear un nuevo arreglo que contenga el doble de cada número.

// const numeros = [1, 2, 3, 4, 5, 6, 7];
// const resultado = numeros.map(numero => numero * 2);
// console.log(resultado);

// 28. Ejercicio de filter:
// Dado un arreglo de palabras, utiliza el método filter para crear un nuevo arreglo que contenga solo las palabras que tengan más de 4 caracteres.

// const palabras = ["casa", "perro", "árbol", "sol", "mesa"];
// const resultado = palabras.filter(palabra => palabra.length > 4);

// console.log(resultado);

// 29. Ejercicio de reduce:
// Dado un arreglo de números, utiliza el método reduce para calcular el producto de los números pares.

// const numeros = [1, 2, 3, 4, 5, 6];

// const productoPares = numeros.reduce((acumulador, numero) => (numero % 2 === 0)? acumulador * numero : acumulador, 1);
// console.log(productoPares);

// 30. Ejercicio combinado:
// Dado un arreglo de objetos que representan empleados, utiliza el método filter para crear un nuevo arreglo que contenga solo los empleados con un salario mayor a $5000. Luego, utiliza el método map para crear un nuevo arreglo que contenga solo los nombres de los empleados seleccionados.

// const empleados = [
//   { nombre: "Juan", salario: 4500 },
//   { nombre: "María", salario: 5200 },
//   { nombre: "Pedro", salario: 6000 },
//   { nombre: "Ana", salario: 4800 }
// ];

// const empleadosConSalarioMayor5000 = empleados.filter(empleado => empleado.salario > 5000);
// const nombresEmpleados = empleadosConSalarioMayor5000.map(empleado => empleado.nombre);

// console.log(nombresEmpleados);

// 31. Ejercicio combinado:
// Dado un arreglo de números, utiliza el método filter para crear un nuevo arreglo que contenga solo los números que sean divisibles por 5 y mayores a 10. Luego, utiliza el método reduce para calcular la suma de los números seleccionados.

// const numeros = [1, 2, 3, 4, 5, 10, 15, 20, 7];

// const nuevoDivisible5 = numeros.filter(function(numero){
//   if((numero%5===0)&&(numero>10)){
//     return numero;
//   }
//   return 0;
// });

// const suma = nuevoDivisible5.reduce((contador, numero) => contador+numero, 0);

// console.log("suma: " +suma);

// 32. Ejercicio combinado:
// Dado un arreglo de objetos que representan productos, utiliza el método filter para crear un nuevo arreglo que contenga solo los productos en stock con un precio menor a $100. Luego, utiliza el método reduce para calcular el precio total de los productos seleccionados.

// const productos = [
//   { nombre: "Producto 1", precio: 99, enStock: true },
//   { nombre: "Producto 2", precio: 120, enStock: true },
//   { nombre: "Producto 3", precio: 80, enStock: false },
//   { nombre: "Producto 4", precio: 90, enStock: true },
//   { nombre: "Producto 5", precio: 87, enStock: true }
// ];

// const productosFiltrados = productos.filter(producto => producto.enStock && producto.precio < 100);

// const precioTotal = productosFiltrados.reduce((total, producto) => total + producto.precio, 0);

// console.log(productosFiltrados);
// console.log(precioTotal);

// 33. Ejercicio de bucles:
// Escribe un bucle que imprima los números impares del 1 al 50 en la consola.

// for (let i = 0; i <= 50; i++) {
//   if (i % 2 !== 0)
//     console.log(i);
// }

// 34. Ejercicio de condicionales:
// Escribe una función que tome dos números como argumentos y devuelva el mayor de los dos.

// let numero1 = 21;
// let numero2 = 20;

// console.log("numero mayor: ", numeroMayor(numero1, numero2));

// function numeroMayor(valor1, valor2){
//   return (valor1 > valor2)?valor1: valor2;
// }

// 35. Ejercicio de map:
// Dado un arreglo de palabras, utiliza el método map para crear un nuevo arreglo que contenga la primera letra de cada palabra.

// const palabras = ["codigo", "html", "css", "javascript"];
// const palabrasPrimeraLetra = palabras.map(palabra => palabra[0]);

// console.log(palabrasPrimeraLetra);

// 36. Ejercicio de filter:
// Dado un arreglo de números, utiliza el método filter para crear un nuevo arreglo que contenga solo los números divisibles por 3.

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numeroDiviTres = numeros.filter(numero => (numero%3 === 0));

// console.log(numeroDiviTres);

// 37. Ejercicio de reduce:
// Dado un arreglo de palabras, utiliza el método reduce para concatenar todas las palabras en una sola cadena.

// const palabras = ["codigo", "html", "css", "javascript"];
// const cadena = palabras.reduce((acumulador, palabra) => acumulador + palabra);

// console.log(cadena);

// 38. Ejercicio combinado:
// Dado un arreglo de objetos que representan estudiantes, utiliza el método filter para crear un nuevo arreglo que contenga solo los estudiantes que tienen una calificación mayor a 90. Luego, utiliza el método map para crear un nuevo arreglo que contenga solo los nombres y calificaciones de esos estudiantes.

// const estudiantes = [
//   { nombre: "Juan", calificacion: 85 },
//   { nombre: "María", calificacion: 92 },
//   { nombre: "Carlos", calificacion: 87 },
//   { nombre: "Ana", calificacion: 95 },
//   { nombre: "Luis", calificacion: 90 }
// ];

// const estudiantesDestacados = estudiantes
//   .filter(estudiante => estudiante.calificacion > 90)
//   .map(estudiante => ({ nombre: estudiante.nombre, calificacion: estudiante.calificacion }));

// console.log(estudiantesDestacados);

// 39. Ejercicio combinado:
// Dado un arreglo de números, utiliza el método filter para crear un nuevo arreglo que contenga solo los números positivos. Luego, utiliza el método reduce para calcular la suma de los números seleccionados.

// const numeros = [-25, 1, 2, 3, 4, 5, 6, 7, 8, 9, -100];
// const numerosPositivos = numeros.filter(numero => numero > 0);
// const suma = numerosPositivos.reduce((acumulador, numero)=>acumulador+numero, 0);

// console.log(suma);

// 40. Ejercicio combinado:
// Dado un arreglo de objetos que representan productos, utiliza el método filter para crear un nuevo arreglo que contenga solo los productos con un precio mayor a $50. Luego, utiliza el método reduce para calcular el promedio de los precios de los productos seleccionados.

// const productos = [
//   { nombre: "Camisa", precio: 30 },
//   { nombre: "Pantalón", precio: 60 },
//   { nombre: "Zapatos", precio: 80 },
//   { nombre: "Bolso", precio: 40 },
//   { nombre: "Sombrero", precio: 70 }
// ];

// const productosSeleccionados = productos.filter(producto => producto.precio > 50);
// const totalPrecios = productosSeleccionados.reduce((acumulador, producto) => acumulador + producto.precio, 0);
// const promedioPrecios = totalPrecios / productosSeleccionados.length;

// console.log(promedioPrecios);


// 41. Ejercicio de funciones:
// Crea una función llamada saludar que tome un nombre como argumento y devuelva un mensaje de saludo, por ejemplo: "¡Hola, [nombre]!"

// function saludar(nombre) {
//   return "¡Hola, " + nombre + "!";
// }

// var nombre = "Juan";
// var mensajeSaludo = saludar(nombre);
// console.log(mensajeSaludo);

// 42. Ejercicio de funciones flecha:
// Convierte la función saludar en una función flecha.

// var nombre = "Juan";
// var mensajeSaludo = ()=>"¡Hola, " + nombre + "!";

// console.log(mensajeSaludo(nombre));

// 43. Ejercicio de funciones anónimas:
// Crea una función anónima que tome dos números como argumentos y devuelva su suma.

// const suma = function (num1, num2) {
//   return num1 + num2;
// };

// const resultado = suma(2, 3);
// console.log(resultado);

// 44. Ejercicio de funciones:
// Crea una función llamada calcularPromedio que tome un arreglo de números como argumento y devuelva el promedio de esos números.

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function calcularPromedio(var_numeros){
//   return var_numeros.reduce((acumulador, numero)=>acumulador+numero, 0)/var_numeros.length;
// }
// console.log("Promedio:", calcularPromedio(numeros));

// 45. Ejercicio de funciones flecha:
// Convierte la función calcularPromedio en una función flecha.

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const calcularPromedio = (var_numeros) => { 
//   return var_numeros.reduce((acumulador, numero) => acumulador + numero, 0)/ numeros.length;
// };
// console.log("Promedio:", calcularPromedio(numeros));

// 46. Ejercicio de funciones anónimas:
// Crea una función anónima que tome un arreglo de palabras como argumento y devuelva un nuevo arreglo con la longitud de cada palabra.

// const palabras = ["codigo", "html", "css", "javascript"];
// const obtenerLongitudPalabras = function(var_palabras) {
//   return palabras.map(function(var_palabras) {
//     return var_palabras.length;
//   });
// };

// const longitudes = obtenerLongitudPalabras(palabras);
// console.log(longitudes);

// 47. Ejercicio de funciones:
// Crea una función llamada esPar que tome un número como argumento y devuelva true si el número es par, y false si no lo es.

// function esPar(numero) {
//   return numero % 2 === 0;
// }

// console.log(esPar(4)); // Imprime: true
// console.log(esPar(7)); // Imprime: false

// 48. Ejercicio de funciones flecha:
// Convierte la función esPar en una función flecha.

// const esPar = numero => numero % 2 === 0;

// console.log(esPar(4)); // Imprime: true
// console.log(esPar(7)); // Imprime: false

// 49. Ejercicio de funciones anónimas:
// Crea una función anónima que tome un arreglo de números como argumento y devuelva un nuevo arreglo con solo los números pares.

// const obtenerNumerosPares = (numeros) => {
//   const numerosPares = numeros.filter((numero) => numero % 2 === 0);
//   return numerosPares;
// };

// // Ejemplo de uso
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numerosPares = obtenerNumerosPares(numeros);
// console.log(numerosPares);

// 50. Ejercicio de funciones:
// Crea una función llamada convertirAMayusculas que tome una cadena como argumento y devuelva la cadena en mayúsculas.

// function convertirAMayusculas(cadena){
//   return cadena.toString().toUpperCase();
// }

// const mayuscula = convertirAMayusculas("maria");
// console.log(mayuscula);