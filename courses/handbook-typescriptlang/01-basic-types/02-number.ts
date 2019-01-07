// Number

// Assim como em Javascript, todos número em Typescript é um valor ponto
// flutuante. Typescript também suporta valores hexadecimais, decimais, octais
// e binários. Este tipo é nomeado number.
let decimal: number = 6;
let hex: number = 0xf00d;
let binario: number = 0b1010;
let octal: number = 0o744;
let flutuante: number = 665.5

console.log("Soma: " + (decimal + hex + binario + octal + flutuante).toString());