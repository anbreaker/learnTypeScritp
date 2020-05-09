"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// se podrian pisar los nombres de variables.
// [1, 'user]
let user;
user = [14, 'anbreaker'];
console.log('user', user);
console.log('username', user[1]);
console.log('username', user[1].length);
console.log('id', user[0]);
// Tuplas con varios valores
// id, username, isPro
let userInfo;
userInfo = [2, 'Jéssica', true];
console.log('userInfo', userInfo);
// Array de tuplas
let array = []; // Inicializacion en vacio
array.push([1, 'anbreaker']);
array.push([2, 'Jéssica']);
array.push([3, 'Curro']);
console.log('array', array);
// Uso de funciones Array
// Curro --> Currobato
array[2][1] = array[2][1].concat('bato');
console.log('array', array);
