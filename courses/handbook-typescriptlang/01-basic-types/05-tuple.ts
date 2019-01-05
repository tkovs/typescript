// Tuple

// Tuple types allow you to express an array where the type of a fixed number
// of element is known, but need not be the same. For example, you may want to
// represent a value as a pair of a string and a number:

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10];
x = ["wpp", 9];
// Initialize it incorrectly
x = [10, "hello"];

// When accessing an element with a known index, the correct type is retrieved:
console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

// When accessing an element outside the set of known indices, a union type is
// used instead:
x[3] = "world"; // OK, 'string' can be assigned to 'string | number';
console.log(x[5].toString()); // OK, 'string' and 'number' both have 'toString'
x[6] = true; // Error, 'boolean' isn't 'string | number'
