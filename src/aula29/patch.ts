type Postagem = {
    id: number;
    title: string;
    body: string;
}

// PATCH: Atualiza apenas o título
async function atualizarTitulo(id: number): Promise<Postagem> {

    const corpoEnviado = {
        title: 'Minha primeira postagem agora tem um novo título'
    };

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(corpoEnviado)
    });

    console.log('Corpo enviado:')
    console.log(corpoEnviado)

    console.log(`STATUS: ${res.status}`)

    const resPatch = await res.json() as Promise<Postagem>;
    return resPatch;
}

const patch = await atualizarTitulo(1)

console.log('Corpo Recebido:')
console.log(patch)

// console.log(`Apenas o título: ${patch.title}`);
