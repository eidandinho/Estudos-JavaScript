// Objeto em JavaScript - Organizar dados, referenciar objetos da vida real.

var objeto = {  propiedade: 'valor',
                propiedade2: 10,
                propiedade3: true,
};
console.log(objeto); // teste
console.log(objeto.propiedade); //teste

var carro = {   cor: 'vermelho',
                motor: '2.0',
                portas: 4,
};
console.log(carro); //teste
console.log(carro.cor); //teste
console.log(carro.motor); //teste

// ---- Conjunto de Propriedades

var pessoa = {  nome: 'Evandro',
                idade: 23,
                peso: 65,
                altura: 1.65,
};
console.log(pessoa); //teste
console.log(pessoa.idade); //teste
console.log(pessoa.altura); //teste

pessoa.sexo = 'masculino'; // nova propriedade para o objeto pessoa
pessoa.cor = 'branco' // nova propriedade para o objeto pessoa
console.log(pessoa); // teste

pessoa.andar = function() {
    return 'Pessoa andando'
}
console.log(pessoa.andar()); // teste - método

pessoa.aniversario = function(){
    pessoa.idade++;
}
console.log(pessoa.aniversario()); // teste
console.log(pessoa); // teste

pessoa.sobrenome = 'Lima'
pessoa.nomeCompleto = function(){
    return pessoa.nome + ' ' + pessoa.sobrenome;
}
console.log(pessoa.nomeCompleto()); // teste