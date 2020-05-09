"use strict";
console.log('Hola TypeScript con Platzi');
// Number
// Explicit type
let phone;
phone = 1;
phone = 924234669;
// phone = 'hola'; // Error
// phone = '+367128815'; --> Error de tipo
// Number Inferred
let phoneNumber = 637128815;
phoneNumber = 123;
// phoneNumber = true; // Error por tipo
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
// Tipo: Boolean
// Tipado Explicito
let isPro;
isPro = true;
// isPro = 1;
// Inferido
let isUserPro = false;
isUserPro = true;
// isUserPro = 10; // Error!
// Strings
let username = 'Francisco Javier';
username = "Antúnez Durán";
// username = true; // Error: tipo string
// Template String
// Uso de back-tick `
let userInfo;
userInfo = `
    User Info:
    username: ${username}
    firstName: ${username + ' anbreaker'}
    phone: ${phone}
    isPro: ${isPro}
`;
console.log('userInfo', userInfo);
