// Never 

// O tipo never representa o tipo de valores que nunca acontecem. Por exemplo,
// never é o tipo de retorno de uma function expression ou uma arrow function
// que sempre dispara uma exceção ou uma que nunca retorna.
// Variáveis podem adquirir o tipo never quando tratadas por qualquer tipo de
// guards onde nunca podem ser verdadeiras.

// The never type is a subtype of, and assignable to, every type; however, no
// type is a subtype of, or assignable to, never (except never itself). Even any
// isn’t assignable to never.
// O tipo never é um subtipo de, e atribuíel a, qualquer tipo; contudo, nenhum
// tipo é um subtipo de, ou atribuível a, never. Nem any é atribuível a never.

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
