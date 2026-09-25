//FUNÇÕES COM PARÂMETRO E RETORNO
function somar(a: number, b: number): number {
    return a + b
};

const resultado = somar(10, 5);
console.log(resultado);

//FUNÇÕES COM PARÂMETRO SEM RETORNO
function mostrarNome(nome: string): void{
    console.log(`Olá ${nome}!`);
};

mostrarNome('Lucas');

//FUNÇÕES SEM PARÂMETRO COM RETORNO
function pegarIdade(): number { 
    return 25;
};

const idade = pegarIdade();
console.log(idade);

//FUNÇÕES SEM PARÂMETRO SEM RETORNO
function mostrarMensagem(): void { 
    console.log('Olá! Seja bem-vinda(o)');
};

mostrarMensagem();