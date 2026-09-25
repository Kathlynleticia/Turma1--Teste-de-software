function buscarProduto(nome: string): /*COMPLETE AQUI */<string> {
    return new /*COMPLETE AQUI */(function (resolve) {
        setTimeout(function () {
            resolve(`Produto ${nome} encontrado!`);
        }, 2000);
    });
}

/*COMPLETE AQUI */ function mostrarProduto(): Promise<void> {
    const produto = /*COMPLETE AQUI */ buscarProduto("Teclado");

    console.log(produto);
}

mostrarProduto();