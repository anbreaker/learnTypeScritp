"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//<type> // Angle Bracket syntax
let username;
username = 'anbreaker';
// Tenemos un string, Complidor de TS confia en mí:
let message = username.length > 5 ? `Welcome ${username}` : `username is too short`;
console.log('Message ->', message);
let usernameWithId = 'anbreakera 1415';
// Como obtener el username?
usernameWithId = usernameWithId.substring(0, 9);
console.log('username only', usernameWithId);
// Sintaxis 'as'
usernameWithId =
    username.length > 5 ? `Welcome ${username}` : `username is too short`;
console.log('username ->', username);
let helloUser;
helloUser = 'Hello Coder';
username = helloUser.substring(6);
console.log('username', username);
