//Array Métodos con programación funcional
//Uso del map
// const frutas = ["🍌", "🍏", "🍓"];

// const nuevoArray = frutas.map((item) =>{
//     return item
// });

// La palabra item puede tomar cualquier nombre
// const nuevoArray = frutas.map((item) => item);

//Al agregar un elemento no modifica el array inicial pero no el creado por map, porque el map guardó los elementos por valor no por referencia y creó un nuevo array
// frutas.push("🍉");

// console.log(nuevoArray);


//Cuál será la diferencia de usar map si esto también funciona?
// const copiaArray = frutas;
// frutas.push("🍉");
// console.log(copiaArray);


//Colección de usuarios
// const users = [
//     { name: "John", age: 34 },
//     { name: "Amy", age: 20 },
//     { name: "camperCat", age: 10 },
// ];

// const names = users.map((user) => user.name);
// console.log(age);


//Ejercicios con números
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const numerosPorDos = numeros.map((num) => num * 2);
// console.log(numerosPorDos);







//Uso del filter
// const users = [
//     { uid: 1, name: "John", age: 34 },
//     { uid: 2, name: "Amy", age: 20 },
//     { uid: 3, name: "camperCat", age: 10 },
//     { uid: 4, name: "OskarGuaro", age: 36 },
// ];

// const mayores = users.filter((user) => user.age > 30);
// console.log(mayores);

//Eliminar elementos del array, si un usuario se va
// const userEliminado = users.filter((user) => user.uid !== 4);
// console.log(userEliminado);







//Uso de find, some, findIndex
// const users = [
//     { uid: 1, name: "John", age: 34 },
//     { uid: 2, name: "Amy", age: 20 },
//     { uid: 3, name: "camperCat", age: 10 },
//     { uid: 4, name: "OskarGuaro", age: 36 },
// ];

//Lo devuelve como elemento (Objeto) y no como array
// const amy = users.find((user) => user.uid === 2);
// console.log(amy);

//Destructuring para traer solo la edad del usuario que cumple la condición
// const {age} = users.find((user) => user.uid === 2);
// console.log(age);


//Uso de some comprueba si algún elemento del array cumple con la condición para verificar errores
// const existe = users.some((user) => user.uid === 2);
// console.log(existe);
// const existe2 = users.some((user) => user.uid === 5);
// console.log(existe2);


//Uso de findIndex, devuelve el índice del primer elemento del array que cumple con la condición
// const indice = users.findIndex((user) => user.uid === 2);
// console.log(indice);
//Trae el usuario que cumple con la condición del indice
// console.log(users[indice]);

//Si la condición no existe findIndex devuelve un -1, por lo cual sirve para validar
// const indice = users.findIndex((user) => user.uid === 7);
// console.log(indice);







//Uso de slice devuelve la copia del array en un nuevo array, no se modiica el array original
// const arr = ["Cat", "Dog", "Tiger", "Zebra"];
            // 0     [1      2]        3


//Le indicamos con "1" el indice que está incluido y con "3" el indice final no incluido en el nuevo array
// const arrayNuevo = arr.slice(1, 3);
// console.log(arrayNuevo);






//Uso de concat (concatenación) para unir dos o más arrays sin mutar el original porque crea uno nuevo
// const array1 = ["a", "b", "c"];
// const array2 = ["d", "e", "f"];

// const array3 = array1.concat(array2);

//Otro método es el Spread syntax, que hace lo mismo que concat, pero con este podemos cambiar el orden de los elementos y agregar mas elementos (más dinámico)

// const array3 = [...array1, ...array2];
// const array3 = [...array2, "-", ...array1];

// console.log(array3);







//Uso de reduce (función reductora) sobre cada elemento de un array devolviendo como resultado un único valor
// const numeros = [1, 2, 3, 4, 5];

//Suma todos los elemntos del array acc actua como el acumulador y el valorActual es valor del array y en consola vemos el valor final, tiene muchas funciones
// const sumarTodos = numeros.reduce((acc, valorActual) => acc + valorActual);
// console.log(sumarTodos);


// const arrayNumeros = [
//     [0, 1],
//     [2, 3],
//     [4, 5],
// ];

// const soloNumeros = arrayNumeros.reduce(
//     (acc, current) => acc.concat(current)
// );

// console.log(soloNumeros);


//Otra forma de llegar al mismo resultado con Spread syntax
// const arrayPlano = [].concat(...arrayNumeros);
// console.log(arrayPlano);


//Otra forma con el método flat, aunque se debe tener cuidado porque es nuevo
// const arrayPlano = arrayNumeros.flat();
// console.log(arrayPlano);

//el método flat es experimental y funciona con niveles de profundidad [[]]
// const arrayNumeros = [1, 2, [3, 4], 5, 6];
// const arrayNumeros = [1, 2, [3, 4, [5, 6]]];
// const arrayPlano = arrayNumeros.flat(2); //el (2) indica el nivel de profundidad

// console.log(arrayPlano);








//Método split y join, en casos que son un string separados por comas
// const cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

//Entre los paréntesis () indicamos el separador ",", si no le indicamos separador por defecto deja la coma
// const arrayMeses = cadenaMeses.split(",");
// console.log(arrayMeses);

//El método join hace lo contrario del split, convierte un array en una cadena de texto, también indicamos el separador que queremos usar
// const nuevoTexto = arrayMeses.join("-");
// console.log(nuevoTexto);
