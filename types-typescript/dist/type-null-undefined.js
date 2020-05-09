"use strict";
// Type null and undefined
// Explicit type
let nullVariable;
nullVariable = null;
// nullVariable = 1; // Error!
let otherVariable = null;
otherVariable = 'test';
console.log(`nullVariable ${nullVariable}`);
console.log(`otherVariable ${otherVariable}`);
// Undefined
let undefinedVariable = undefined;
// undefinedVariable = 'test'; // Error
let otherUndefined = undefined;
otherUndefined = 1;
console.log(`undefinedVaribale ${undefinedVaribale}`);
console.log(`otherUndefined ${otherUndefined}`);
// Null y Undefined: Como subtipos
// --strictNullChecks
// Termnal --> tsc src/main.ts --strictNullChecks o habilitamos opcion en tsconfig.json
let albumName;
// albumName = null;
// albumName = undefined;
