// Never 

// O tipo never representa o tipo de valores que nunca acontecem. Por exemplo,
// never é o tipo de retorno de uma function expression ou uma arrow function
// que sempre dispara uma exceção ou uma que nunca retorna.
// Variáveis podem adquirir o tipo never quando tratadas por qualquer tipo de
// guards onde nunca podem ser verdadeiras.

// Alguns exemplos de funções que retornam never:

// Função retornando never deve ter seu fim inacessível
function error(message: string): never {
    throw new Error(message);
}

// Never é o tipo de retorno inferido
function fail() {
    return error("Something failed");
}

// Função retornando never deve ter seu fim inacessível
function infiniteLoop(): never {
    while (true) {
    }
}
