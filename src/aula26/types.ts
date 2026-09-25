type Pessoa = {nome:string; idade:number}; // molde/contrato/modelo

function criarPessoa(nome:string, idade:number): Pessoa {
    return{nome, idade};
}

const p = criarPessoa("Kathlyn", 24);
console.log(p)
           


