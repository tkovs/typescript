// Null and Undefined

// In TypeScript, both undefined and null actually have their own types named
// undefined and null respectively. Much like void, they’re not extremely useful
// on their own:

// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;

// By default null and undefined are subtypes of all other types. That means you
// can assign null and undefined to something like number.

// However, when using the --strictNullChecks flag, null and undefined are only assignable to void and their respective types. This helps avoid many common errors. In cases where you want to pass in either a string or null or undefined, you can use the union type string | null | undefined. Once again, more on union types later on.

//    As a note: we encourage the use of --strictNullChecks when possible, but for the purposes of this handbook, we will assume it is turned off.
