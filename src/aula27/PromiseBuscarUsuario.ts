function delay(ms: number): Promise<void> {
return new Promise(resolve => setTimeout(resolve, ms));
}

async function buscarUsuario(id: number): Promise<string> {
await delay(5000); // simula chamada de rede
return `Usuário #${id}`;
}

console.log("Início do programa...");
const nome = await buscarUsuario(42);
console.log(nome); // "Usuário #42"
