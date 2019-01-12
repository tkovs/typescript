// Object

// Object é o tipo que representa tipos de dados não primitivos, i.e. qualquer
// coisa que não é um número, string, boolean, symbol, null ou undefined.

// Com o tipo Object, APIs como Object.create podem ser melhor representadas.
// Por exemplo:

declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error
