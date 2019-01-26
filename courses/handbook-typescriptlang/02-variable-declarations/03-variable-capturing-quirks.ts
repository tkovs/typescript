for (var i = 0; i < 10; i++) {
    setTimeout(function() { console.log(i); });
}

// Saída:
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10

// Esperado:
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

// Cada função passada para o setTimeout se refere à mesma variável i do
// mesmo escopo.
// Uma solução é usar IIFE (Immediately Invoked Function Express) para capturar
// o i em cada iteração
for (var i = 0; i < 10; i++) {
    // capture the current state of 'i'
    // by invoking a function with its current value
    (function(i) {
        setTimeout(function() { console.log(i); }, 100 * i);
    })(i);
}