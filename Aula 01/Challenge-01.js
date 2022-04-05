// Declarar uma variável chamada `myvar`, sem valor.
var myvar;

// Após declarada, atribua o valor 10 à variável `myvar`.
myvar = 10;

// Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 15 e 8.
var soma = 15 + 8;

// Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado.
soma++;
console.log(soma); //teste

// Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.
soma *= 3;
console.log(soma); //teste

// Qual é o valor da variável `soma` até aqui?
72

// Declare uma variável chamada `souninja`, atribuindo à ela o valor booleano que representa `verdadeiro`.
var souninja = true;
console.log(souninja); //teste

// Declare uma variável chamada `comida` que recebe um array com os valores 'arroz', 'feijão' e 'ovo'.
var comida = ['arroz', 'feijão', 'ovo'];

// Digite a instrução que imprime o valor de 'feijao', que está na variável `comida`.
comida[1];
console.log(comida[1]); //teste

// Digite o código que verifica se a variável `soma' é igual a variável `myvar` (testando também o tipo).
soma === myvar;
console.log(soma === myvar); //teste

// Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`.
myvar <= soma;
console.log(myvar <= soma); //teste

// Crie uma função chamada `divisao` que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.
function divisao(x, y){
    return x / y;
}

// Invoque a função criada acima, passando os parâmetros 10 e 2.
divisao(10, 2);