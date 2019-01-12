// Any

// O tipo any pode receber qualquer tipo de valor, para os casos em que não
// se sabe o tipo do valor que se vai ler, por exemplo.
let notSure: any = 4;
notSure = "talvez uma string";
notSure = false;

// O tipo any é um bom meio se se trabalhar com código JS já existente. Pode-se
// esperar que Object cumpra um papel semelhante, como faz em outras
// linguagens. Porém, variáveis do tipo Object apenas permitem a você atribuir
// qualquer valor a elas - você não pode chamar arbitrariamente métodos nelas,
// ainda que eles existam.
notSure = 4;
notSure.ifItExists(); // ok, ifItExists pode existir em runtime
notSure.toFixed(); // okay, toFixed existe (mas o compilador não checa)

let prettySure: Object = 4;
prettySure.toFixed(); // Erro: Propriedade 'toFixed' não existe no tipo Object

// O tipo any é util também if você sabe parte de um tipo, mas não 
// completamente. Por exemplo, você tem um array mas o array tem um conjunto
// de diferentes tipos.
let list: any[] = [1, true, "free"];
list[1] = 100;