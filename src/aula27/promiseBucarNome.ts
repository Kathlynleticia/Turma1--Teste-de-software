function buscarNome(): Promise<string> {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Juan");
        }, 4000);

    });
}

async function executar() {
    console.log("Início do programa...");
    const nome = await buscarNome();
    console.log(nome); 
    console.log("Fim do programa");
}

executar();

console.log(typeof Promise); 








