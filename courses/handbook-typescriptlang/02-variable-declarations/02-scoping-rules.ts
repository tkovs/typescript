// Declarações var têm algumas regras estranhas se comparadas a usada em
// outras linguagens
function f(shouldInitialize: boolean) {
    if (shouldInitialize) {
        var x = 10;
    }

    return x;
}

console.log(f(true));
console.log(f(false));

// A variável x foi declarada dentro de um bloco "if", e ainda assim ela foi
// acessada fora de seu bloco. Isso acontece porque declarações var são
// acessíveis em qualquer lugar contendo função, módulo, namespace ou escopo
// global contendo esse bloco. Algumas pessoas chamam isto de var-scoping ou
// function scoping. Parâmetros também são do escopo da função.

// Estas regras podem causar diversos tipos de erros. Um deles se dá pelo fato
// de não ser um problema declarar a mesma variável várias vezes:
function sumMatrix(matrix: number[][]) {
    var sum = 0;

    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];

        for (var i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }

    return sum;
}

var matrix: number[][] = [
    [1,2,3],
    [1,2,3],
    [1,2,3]
];

console.log(sumMatrix(matrix)); // 6