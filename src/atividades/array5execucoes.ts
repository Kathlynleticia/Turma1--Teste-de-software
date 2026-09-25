type ExecucaoTeste = {
    nome: string;
    passou: boolean;
    tempo: number;
};

const execucoes: ExecucaoTeste[] = [
    { nome: "Login", passou: true, tempo: 2 },
    { nome: "Cadastro", passou: false, tempo: 5 },
    { nome: "Logout", passou: true, tempo: 1 },
    { nome: "Pagamento", passou: true, tempo: 8 },
    { nome: "Busca", passou: false, tempo: 4 }
];

const nomes = execucoes.map(function (teste) { // Retorna o nome de cada elemento.
    return teste.nome;
});

const testesAprovados = execucoes.filter(function (teste) { // Retorna apenas os elementos que "passou" no teste.
    return teste.passou === true;
});

const tempoTotal = execucoes.reduce(function (total, teste) { // Retorna o cálculo do tempo total de todos os elementos juntos.
    return total + teste.tempo;
}, 0);


//Filtra os nomes dos elementos que começam com a letra L e retorna uma lista dos nomes, apenas.
const nomesComL = execucoes
    .filter(function (teste) {
        return teste.nome.startsWith("L");
    })
    .map(function (teste) {
        return teste.nome;
});


console.log(nomes);
console.log(testesAprovados);
console.log(tempoTotal);
console.log(nomesComL);