// String

// Assim como em outras linguagens, o tipo string se refere a tipos de dados
// textuais. Assim como Javascript, Typescript também cerca strings com aspas
// duplas e aspas simples.
let color: string = "blue";
color = 'red';

// Template strings permitem declarar uma string com várias linhas e expressões
// anexadas. São cercadas pelo caracter crase (`), e as expressões anexadas
// ficam na forma ${expressao}. 
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.
I'll be ${ age + 1 } years old next month.`;

// Isto é o equivalente à seguinte declaração:
sentence = "Hello, my name is " + fullName + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";
