console.log('Hola TypeScript con Platzi');

// Number
// Explicit type
let phone: number;
phone = 1;
phone = 924234669;
// phone = 'hola'; // Error
// phone = '+367128815'; --> Error de tipo

// Number Inferred
let phoneNumber = 637128815;
phoneNumber = 123;
// phoneNumber = true; // Error por tipo

let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// Tipo: Boolean
// Tipado Explicito
let isPro: boolean;
isPro = true;
// isPro = 1;

// Inferido
let isUserPro = false;
isUserPro = true;
// isUserPro = 10; // Error!

// Strings
let username: string = 'Francisco Javier';
username = "Antúnez Durán";
// username = true; // Error: tipo string

// Template String
// Uso de back-tick `
let userInfo: string;
userInfo = `
    User Info:
    username: ${username}
    firstName: ${username + ' anbreaker'}
    phone: ${phone}
    isPro: ${isPro}
`;
console.log('userInfo', userInfo);
