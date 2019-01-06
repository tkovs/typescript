// Type assertions

// Sometimes you’ll end up in a situation where you’ll know more about a value
// than TypeScript does. Usually this will happen when you know the type of
// some entity could be more specific than its current type.

// Type assertions are a way to tell the compiler “trust me, I know what I’m
// doing.” A type assertion is like a type cast in other languages, but performs
// no special checking or restructuring of data. It has no runtime impact, and
// is used purely by the compiler. TypeScript assumes that you, the programmer,
// have performed any special checks that you need.

// Type assertions have two forms. One is the “angle-bracket” syntax:
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

// And the other is the as-syntax:
let strLength2: number = (someValue as string).length;

// The two samples are equivalent. Using one over the other is mostly a choice
// of preference; however, when using TypeScript with JSX, only as-style
// assertions are allowed.
