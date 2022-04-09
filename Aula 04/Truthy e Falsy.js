/*  Serve para avaliar valores
    Valores Truthy = representado pelo valor booleano true
    Valores Falsy = representado pelo valor booleano false

 Valores Falsy
- undefined
- null
- NaN
- 0
- -0
- '' ou "" 

Todos os outros são Truthy

*/

// Inversão de valores: !
!true
!false
console.log(!true); //teste
console.log(!false); //teste

// Descobrir a representação booleana: !!
!!true
!!0
!!2
!!'evandro'
!!''
!!""
!!NaN
!!false
!!'0'

//testes
console.log('-------');
console.log(!!true);
console.log(!!0);
console.log(!!2);
console.log(!!'evandro');
console.log(!!'');
console.log(!!"");
console.log(!!NaN);
console.log(!!false);
console.log(!!'0');