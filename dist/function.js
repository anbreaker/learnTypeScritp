"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createPicture(title, date, size) {
    // creacion de la fotografia
    console.log('Create Picture using', title, date, size);
}
createPicture('Cumple', '19-12-2019', '500x500');
// createPicture('Portugal', '19-02-2020'); --> error falta parametro
// Parametros opcionales (parametro seguido de ?)
function createPicture(title, date, size) {
    // creacion de la fotografia
    console.log('Create Picture using', title, date, size);
}
createPicture('Portugal', '19-02-2020');
// Flat Array function
let createPic = (title, date, size) => {
    return { title, date, size };
};
const picture = createPic('Curro', '20-03-10', '100x100');
console.log('picture', picture);
