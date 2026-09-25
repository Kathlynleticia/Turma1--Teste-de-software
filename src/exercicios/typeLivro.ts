/*
Complete o type e a função criarLivro. Depois, adicione mais um livro ao código.
*/


type Livros = {
    editora: string;
    //COMPLETE AQUI
    genero: string;
    
}

function criarLivro (editora: string, titulo: string, genero: string, anoDeLancamento: number): Livros {
    // COMPLETE AQUI
}

function descricaoPersonalizada(livro: Livros): string {
    return `O livro ${livro.titulo} da editora ${livro.editora} é do gênero ${livro.genero} e foi lançado em ${livro.anoDeLancamento}.`;
}

const primeiroLivro = criarLivro("DarkSide", "Crime Scene", "Crime", "2002");
console.log(primeiroLivro);

console.log(descricaoPersonalizada(primeiroLivro));

//CRIE MAIS UM OBJETO LIVRO E O MOSTRE