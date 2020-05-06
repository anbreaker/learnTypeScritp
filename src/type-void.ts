// type void for functions
// Explicit type

function showInfo(user: any): any {
  console.log(`User Info ${user.id} ${user.username} ${user.firstname}`);
  //   return 'hola';
}

showInfo({id: 1, username: 'Antúnez Durán', firstname: 'Francisco Javier'});

// Inferred type
function showFormattedInfo(user: any) {
  console.log(`User Info,
        id: ${user.id}
        username: ${user.username}
        firstname: ${user.firstname}`);
}

showFormattedInfo({id: 1, username: 'Antúnez Durán', firstname: 'Francisco Javier'});

// Type void as variable data type
let unusable: void;
// unusable = null; --> colocar "strict": false en tsconfig.json para poder hacer uso
unusable = undefined;

// Type never
function handleError(code: number, message: string): never {
  // Process your code
  // Generate a message
  throw new Error(`${message}. Code: ${code}`);
}

try {
  console.log('La funcion handleError no devuelve nada bajo esta linea');
  handleError(404, 'Not found');
} catch (error) {}

function sumNumbers(limit: number): never {
  let sum = 0;
  while (true) {
    sum++;
  }
  // return sum;
}

// sumNumbers(10);
// --> Llamada a un bucle infinito no acabaria nunca, typescript no compila, al verlo.
