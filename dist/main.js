"use strict";
console.log('Hello world!');
// Number Explicit
let phone;
// phone = '+367128815'; --> Error de tipo
phone = 924234669;
// Number Inferred
let phoneMovil = 637128815;
// let phoneMovil = true; --> Error esta definido antes
let hex = 0xf00d;
let binary = 0b101;
let octal = 0o744;
// Type: Boolean
let isPro;
isPro = true;
// isPro = 1; --> Error
// String
let username = 'anbreaker';
username = 'Javier';
// username = true; --> Error
// Template String with use of back-tick ``
let userInfo;
userInfo = `
    User info:
    username: ${username}
    firtsname: ${username + ' anbreaker'}
    phone: ${phone}
    isPro: ${isPro}
`;
console.log('userInfo', userInfo);
// type Any --> For dynamic variables
// Explicit type
let idUser;
idUser = 1; // Number
idUser = '1'; // String
console.log('iduser ', idUser);
console.log(typeof idUser);
// Inferred type
let otherId;
otherId = '1';
otherId = 1;
// otherId = true;
console.log('otherId ', otherId);
console.log(typeof otherId);
let suprise = 'Hello typescript';
// suprise.sayHello(); // Error
const res = suprise.substring(10);
console.log(`res ${res}`);
// type void for functions
// Explicit type
function showInfo(user) {
    console.log(`User Info ${user.id} ${user.username} ${user.firstname}`);
    //   return 'hola';
}
showInfo({ id: 1, username: 'Antúnez Durán', firstname: 'Francisco Javier' });
// Inferred type
function showFormattedInfo(user) {
    console.log(`User Info,
        id: ${user.id}
        username: ${user.username}
        firstname: ${user.firstname}`);
}
showFormattedInfo({ id: 1, username: 'Antúnez Durán', firstname: 'Francisco Javier' });
// Type void as variable data type
let unusable;
unusable = null;
unusable = undefined;
