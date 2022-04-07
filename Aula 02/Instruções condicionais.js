var x = 3;
var y = 7;

    // Condição verdadeira
    if( x === 3 ){
        y = 3;
    }
    console.log(y); //teste

    if( x === y && x === 3 ){
        x = 5;
        y = 2;
    }
    console.log(x); //teste
    console.log(y); //teste

    if( x === 5 || y === 1){
        x = 1;
        y = 1;
    }
    console.log(x);
    console.log(y);

    // IF ignorado pois valor falso
    if( x === 2 ){
        x = 5;
        y = 5;
    }
    console.log(x);
    console.log(y);

    // Condição falsa, então entrou no else  mudando o valor de de y para 10. 
    if( x === 2 ){
        y = 2;
    } else {
        y = 10;
    }
    console.log(x);
    console.log(y);

    // Condição com else if, dando mais opções para o if.
    if( x === 2 ){
        y = 2;
    } else if( y === 3 ){
        x = 3;
    } else if( x === y ){
        x = 10;
        y = 100;
    } else {
        x = 0;
        y = 0;
    }
    console.log(x);
    console.log(y);