/*
Crie uma função chamada criarProduto que receba nome, preço e quantidade em estoque de um produto.
A função deve retornar um objeto contendo essas três informações.
*/

type Produto = {
    nome: string, 
    preco: number; 
    estoque: number
};


const produto = criarProduto("Teclado com led", 150, 59);
console.log(produto);
