// Enum

// Uma adição útil no conjunto de tipos de dados padrões do JavaScript.
// Um enum é um meio de dar nomes a um conjunto de valores numéricos.
enum Color {Red, Green, Blue};
let c: Color = Color.Green;

// Por padrão, enums começam enumerando seus membros iniciando em 0. Este valor
// pode ser alterado manualmente.
enum Color2 {Red = 1, Green, Blue};
let c2: Color2 = Color2.Green;

// Ou, ainda, pode-se manualmente definir todos os valores no enum:
enum Color3 {Red = 1, Green = 2, Blue = 4};
let c3: Color3 = Color3.Green;

// Um recurso útil de enums é que você pode ir de um valor numérico para o nome
// do valor em um enum.
let colorName: string = Color[Color.Green];

console.log(colorName);
