// "+" e "-" - Conversão para números

+3;
console.log(+3); //teste

+'3'; // O 3 é uma string e vai converter para número
console.log(+'3'); //teste

+'evandro' // evandro é uma string, mas não vai converter para números aparecendo "NaN"
           // "NaN" é tipo número em JavaScript mas significa que o valor não é um número
console.log(+'evandro'); //teste

// O Operador "+" também serve para concatenar.

'eva' + 'ndro';
console.log('eva' + 'ndro');

'3' + 3; //sempre que tiver uma string, vai ser uma concatenação
console.log('3' + 3); //teste

3 + '3'; 
console.log(3 + '3'); //teste

// --------------------

// O operador unário "-" converte o valor para número e inverte o sinal

var x = 3;

-x;
console.log(-x); //teste - essa operação não causa efeito colateral, a variável X ainda continuará sendo 3.

-'3';
console.log(-'3'); //teste