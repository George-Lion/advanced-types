"use strict";
//las tuplas nos sirven para hacer un array fuertermente tipado especificando el tipo de dato de cada elemento del array.
//tipado de un array normal:
const prices = [1, 2, 3, 4, 5, 6, 7, 'hola'];
prices.push('chao');
console.log(prices);
//tupla:
let user; //definimos el numero de elementos y su tipo.
user = ['ramon', 17];
user = ['false', 12];
user = [false, 12]; //error
user = [12, true]; //error
//destructuración:
user = ['hola', 19]; //correct
const [username, age] = user;
console.log(username);
console.log(age);
//Ejemplo 2:
let colorAndNumbers;
colorAndNumbers = ['red', 2, 'blue', 3, 4];
console.log(colorAndNumbers);
