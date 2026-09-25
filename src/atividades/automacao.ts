/* Crie o arquivo automatizaveis.ts contendo um if/else que classifique um cenário de teste como 
"automatizar" ou "não automatizar" e um loop que percorra os cenários e informe quantos são automatizáveis.
*/

// Utilizando Prompt
import promptSync from "prompt-sync";
const prompt = promptSync();

let automatizaveis = 0;
let naoAutomatizaveis = 0;

for (let i = 1; i <= 5; i++) {

    const cenario = prompt(`Digite o ${i}º cenário: `);
    const resposta = prompt("É automatizável? (sim/não): ").toLowerCase();

    if (resposta === "sim") {
        console.log(`${cenario} → Automatizar`);
        automatizaveis++;
    } else if (resposta === 'não' || resposta === 'nao') {
        console.log(`${cenario} → Não automatizar`);
        naoAutomatizaveis++;
    } else {
        console.log('Ocorreu um erro!')
    }
}

console.log(`Total de cenários automatizáveis: ${automatizaveis}`);
console.log(`Total de cenários não automatizáveis: ${naoAutomatizaveis}`);