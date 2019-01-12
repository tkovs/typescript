// Null e Undefined

// No tipo script, null e undefined tem seus próprios tipos chamados null e
// undefined. Assim como o void, não são tão úteis.

// Nada mais pode ser atribuido a essas variáveis.
let u: undefined = undefined;
let n: null = null;

// Por padrão, null e undefined são subtipos de todos os outros tipos. Isto
// significa que pode-se atribuir null e undefined a algo como um número.

// Contudo, quando usar a flag --strictNullChecks, null e undefined são
// atribuidas apenas a seus respectivos tipos. Isto ajuda a evitar muitos erros
// comuns.
// Em casos que você quer passar ou string ou null ou undefined, você pode usar
// o tipo union string | null | undefined.

// Observação: Encoraja-se o uso de --strictNullChecks sempre que possível, mas
// para propósitos deste estudo, assumi-se que isto está desligado.
