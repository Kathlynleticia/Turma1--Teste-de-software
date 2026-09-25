/*
Crie um type CasoDeTeste e três casos de uma suíte real.
Escreva as funções tipadas criarCaso, descrever e marcarAutomatizado. 
Variáveis de exemplo com e sem anotação, e rode npx tsx conferindo o typeof de cada uma na saída.
*/

// Criando um tipo
type CasoDeTeste = {
    id: number;
    titulo: string;
    descricao: string;
    automatizado: boolean;
};

//Usaremos esta função para criar objetos com estas propriedades
function criarCasoDeTeste(id: number, titulo: string, descricao: string,automatizado: boolean): CasoDeTeste {
    return {id, titulo, descricao, automatizado}
};

// Esta função serve para deixar o objeto com uma "cara" personalizada.
function descrever(caso: CasoDeTeste): string {
    return `ID: ${caso.id} - Título: ${caso.titulo} - Descrição: ${caso.descricao} - Automatizado: ${caso.automatizado}`
};

// Aqui tornamos a propriedade "automatizado", true.
function marcarAutomatizado(caso: CasoDeTeste): CasoDeTeste {
    caso.automatizado = true;
    return caso
};

//Primeiro Caso do Suíte Login
const primeiroCaso = criarCasoDeTeste(1, 'Login com usuário e senha válida', 'O usuário passa o usuário e senha correta', false);
console.log(primeiroCaso); // Se quiser mostrar o objeto

const descricaoDoPrimeiroCaso = descrever(primeiroCaso); 
console.log(descricaoDoPrimeiroCaso); // Se quiser trazer no formato que criou na função "descrever"

const marcarPrimeiroCasoAutomatizado = marcarAutomatizado(primeiroCaso);
console.log(marcarPrimeiroCasoAutomatizado); // Automatizado começa sendo falso, chamamos a função e tornamos ele true

//Segundo Caso do Suíte Login
const segundoCaso = criarCasoDeTeste(2, 'Login com usuário e senha inválida', 'O usuário passa o usuário e senha incorreta', false);
console.log(segundoCaso); 

const descricaoDoSegundoCaso = descrever(segundoCaso); 
console.log(descricaoDoSegundoCaso); 

const marcarSegundoCasoAutomatizado = marcarAutomatizado(segundoCaso);
console.log(marcarSegundoCasoAutomatizado); 

//Terceiro Caso do Suíte Login
const terceiroCaso = criarCasoDeTeste(3, 'Login com campo usuário ou senha vazio', 'O usuário deixa o campo vazio', false);
console.log(terceiroCaso); 

const descricaoDoTerceiroCaso = descrever(terceiroCaso); 
console.log(descricaoDoTerceiroCaso); 

const marcarTerceiroCasoAutomatizado = marcarAutomatizado(terceiroCaso);
console.log(marcarTerceiroCasoAutomatizado); 


// Declarando constantes com seus tipos
// const quantidade: number = 3;
// const nome: string = 'Login';
// const automatizado: boolean = false;

// Declarando constantese sem seus tipos
const quantidade = 3;
const nome = 'Login';
const automatizado = false;

console.log(typeof quantidade);
console.log(typeof nome);
console.log(typeof automatizado);




