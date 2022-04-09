/* condição ? true e : false;
    substitui o if()

    serve para verificações pequenas
*/

// if ( 1 === 2 ) { true; } else { false; };
1 === 2 ? true : false;
console.log(1 === 2 ? true : false); //teste

var carro = 'string' ? 'porta' : 'janela'; //aqui o 'string' é um valor true, por isso ele vai retornar porta
console.log(carro);

var carro = false ? 'porta' : 'janela'; // o valor será janela pois false é falso
console.log(carro);