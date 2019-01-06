// Object

// object is a type that represents the non-primitive type, i.e. any thing that
// is not number, string, boolean, symbol, null, or undefined.

// With object type, APIs like Object.create can be better represented.
// For example:

declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error
