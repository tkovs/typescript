// Tuple

// Os tipos tupla permitem a você escrever um array onde o tipo de um número
// fixo de elementos é conhecido, mas não necessariamente o mesmo.

// Declare o tipo de tupla
let x: [string, number];
// Inicialize isto
x = ["Joao Vitor", 21];
x = ["Layse", 20];
// Initialize it incorrectly
x = [10, "Algodao Doce"];

// Ao acessar um elemento com um índice conhecido, o tipo correto é recuperado:
console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // Erro, o tipo 'number' não tem 'substr'

// Ao acessar um elemento fora do conjunto de índices conhecidos, o tipo union
// é utilizado
x[3] = "world"; // OK, string pode ser atribuido a 'string | number'
console.log(x[5].toString()); // OK, 'string' e 'number' têm 'toString'
x[6] = true; // Erro, 'boolean' não é do tipo 'string | number'
