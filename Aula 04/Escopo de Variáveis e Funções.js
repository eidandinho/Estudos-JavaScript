/*  Em JS existe dois tipos de escopos: Global e Local
    Escopo é o local onde a variável é declarada.

    Escopo local é uma variável dentro de uma função, e a global é fora da função, no topo do código.
    O escopo global pode atrapalhar bastante o código

    function = cria o escopo local e não pode ser acessado por fora dessa function

    paramêtros da function também são locais
*/

var myvar = 1; // escopo global
console.log(myvar);

function myFunction(){
    return myvar;
};
console.log(myFunction()); // dentro de uma função da pra acessar o escopo global

function myFunction2(){
    var myvar1 = true;
    return myvar1;
};

myFunction2();
console.log(myFunction2()); // função invocada e retorno do true;
console.log(myvar1); // variável não pode ser acessada dentro da function

function newFunction(){
    newVar = 'variavel global'; // se a variável for criado dentro de uma function mas não usada o 'var', ela se torna escopo global (não deve ser usada assim)
    return newVar;
}
newFunction();