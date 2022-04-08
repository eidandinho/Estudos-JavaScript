/* function nome() {}
nome() */

var x = 1;
    function  soma() {
        x = x + 1;
    }
soma(); // O x que valia 1, começa a valer 2 pois a função soma foi invocada. - A função só é invocada quando colocar () no final dela.
console.log(x); //teste

// Toda variável criada dentro da função, só poderá ser usada dentro dela. Escopo de função

function qualquer() {
    var evandro = 'evandro';
}
qualquer();
console.log(qualquer); //teste

// Funções podem retornar valores com return e sendo invocadas

function qualquer2() {
    var evandro = 'evandro';
    return evandro;
}
qualquer2();
console.log(qualquer2()); //teste

var y = 7;
function tres() {
    return 3;
}
y + tres();
console.log(y + tres()); //teste


function soma1( x , y ) {
    return x + y;
}
soma1()
soma1(1, 2);
console.log(soma1());
console.log(soma1(1, 2));