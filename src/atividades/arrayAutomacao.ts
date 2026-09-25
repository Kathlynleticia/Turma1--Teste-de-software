/* Crie o arquivo automatizaveis.ts contendo um if/else que classifique um cenário de teste como 
"automatizar" ou "não automatizar" e um loop que percorra os cenários e informe quantos são automatizáveis.
*/

//Sem Prompt

const cenarios = ["automatizar", "não automatizar", "automatizar", "automatizar"];

let automatizaveis = 0;
let naoAutomatizaveis = 0;

for (let i = 0; i < cenarios.length; i++) {

    if (cenarios[i] === "automatizar") {
        automatizaveis = automatizaveis + 1;
    } else {
        naoAutomatizaveis = naoAutomatizaveis + 1;
    }

}

console.log(`Automatizáveis: ${automatizaveis}`);
console.log(`Não automatizáveis: ${naoAutomatizaveis}`);