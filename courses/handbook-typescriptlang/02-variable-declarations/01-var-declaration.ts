// Declarar uma variável em Javascript tradicionalmente se deu da seguinte
// maneira
var a = 10; // Simplesmente declara-se uma variável a de valor 10

// Também pode-se declarar uma variável dentro de funções:
function sample() {
    var message = "Hello, world!";

    return message;
}

// Também pode-se acessar as mesmas variáveis em outras funções:
function f() {
    var a = 10;

    return function g() {
        var b = a + 1;
        a += 1;
        
        return b;
    }
}

var g = f();
console.log(g(), g(), g()); // 11, 12, 13