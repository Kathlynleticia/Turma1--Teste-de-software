function esperar(tempo: number): Promise<void> {
    return  Promise(function (resolve) {
        setTimeout(resolve, tempo);
    });
}

//SUBSTITUI A FUNÇÃO (function (resolve)) POR UMA FUNÇÃO CALLBACK

async function buscarExecucao(id: number): Promise<string> {
    await esperar(2000);

    if (id !== 1) {
        throw new Error("Execução não encontrada!");
    }

    return "Execução encontrada!";
}

async function executar(): Promise<void> {
    try {
        //COMPLETE AQUI
    } catch (erro) {
        //COMPLETE AQUI
    }
}

executar();