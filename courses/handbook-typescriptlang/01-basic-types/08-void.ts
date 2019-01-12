// Void

// O tipo void é meio que o oposto do tipo any: a ausência de ter qualquer
// tipo. Você pode normalmente ver isso como um tipo de retorno de funções que
// não retornam um valor.
function warnUser(): void {
    console.log("Esta mensagem é um aviso");
}
// Declarar variáveis do tipo voiid não é útil pois podem apenas receber void
// ou undefined
let unusable: void = undefined;