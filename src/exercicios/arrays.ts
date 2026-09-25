/*
Complete o código abaixo criando o type Alimentos com as propriedades e seus respectivos tipos de dados. 
Em seguida, adicione mais 3 alimentos ao array listaDeAlimentos, seguindo a mesma estrutura dos objetos já existentes.

Complete a função responsável por calcular o valor total dos preços dos alimentos.
Para isso, utilize o acumulador e o preco de cada alimento para realizar a soma. 
A cada repetição, o resultado da soma deve ser retornado para continuar o cálculo até o final da lista.

Não use chatGPT, acredite, é mais prazeroso encontrar a solução sem ajuda de IA. Tem gosto de aprendizado! 
*/

type alimentos = {
    //COMPLETE AQUI
}

const listaDeAlimentos: alimentos[] = [
    //COMPLETE AQUI
    {nome: "Feijão", preco: 8.99, peso: 1, estoque: 50},
    
    {nome: "Macarrão", preco: 5.99, peso: 1, estoque: 200},
   
    {nome: "Sal", preco: 2.99, peso: 1, estoque: 400},
]


const nomeAlimentos = listaDeAlimentos.map(function(alimentos) {
    return alimentos.nome;
});


const filtrarAlimentos = listaDeAlimentos.filter(function(alimentos) {
    return alimentos.estoque > 150;
})
.map(function(alimentos) {
    return alimentos.nome;
});

const somarPrecoAlimentos = listaDeAlimentos.reduce(function(acumulador, alimentos) {
    return // COMPLETE AQUI
}, 0).toFixed(2);


console.log(nomeAlimentos);
console.log(filtrarAlimentos)
console.log(somarPrecoAlimentos)


