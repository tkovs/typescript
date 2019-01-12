// Type assertions

// Algumas vezes você vai se encontrar em uma situação em que você saberá mais
// sobre um valor do que o TypeScript. Geralmente, isto vai acontecer quando um
// você sabe que o tipo de alguma entidade poderia ser mais específico que o
// tipo atual.

// Type assertions são um modo de dizer ao compilador "confie em mim, eu sei o
// que eu estou fazendo." Um type assertion é como um type cast em outras
// linguagens, mas não performa checagens ou reestruturação dos dados. Sem 
// impacto em tempo de execução, é usado puramente pelo compilador. O
// TypeScript assume que você, o programador, realizou as checagens especiais
// necessárias.

// Type assertions tem duas formas. Uma é a sintaxe "angle-bracket":
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

// A outra usa a sintase "as"
let strLength2: number = (someValue as string).length;

// Os dois exemplos são equivalentes. Usar um sobre o outro é uma questão de
// preferência; contudo, ao usar TypeScript com JSX, apenas o estilo "as"
// permitido.
