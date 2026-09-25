type Postagem = {
    id: number;
    title: string;
    body: string;
};

//PUT - Atualiza (substitui) o post Completo
async function atualizarCompleto(id: number): Promise<Postagem> {

    const corpoEnviado = {
        title: 'Meu novo título da minha primeira postagem',
        body: 'Aqui tem um novo conteúdo', //retirar para ver o que a API retorna
        userId: 1
    };

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(corpoEnviado)
    });

    console.log('Corpo enviado:');  //Não podemos utilizar o tamplate string pois ele tenta converter objeto em string
    console.log(corpoEnviado)

    console.log(`STATUS: ${res.status}`);

    const resPut = await res.json() as Promise<Postagem>;
    return resPut;
}

const put = await atualizarCompleto(77);
console.log('Corpo Recebido:');
console.log(put);