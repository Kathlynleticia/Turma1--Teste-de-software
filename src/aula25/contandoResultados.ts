const resultados = ['Passou', 'Passou', 'Passou', 'Passou', 'Falhou'];
let aprovados = 0;
let reprovados = 0;

for(let i = 0; i < resultados.length; i++) {
    if (resultados[1] === 'Passou') {
        aprovados = aprovados + 1;
    } else {
        reprovados = reprovados + 1;
    }
};

console.log(`Aprovados: ${aprovados}, Reprovados: ${reprovados}`);