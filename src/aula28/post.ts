type Postagem = {
    id: number;
    title: string;
    body: string;
};

// POST: cria novo post
async function criarPost(): Promise<Postagem> {   
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'Minha primeira postagem',
            body: 'Aqui tem uma descrição',
            userId: 1
        }),
    });

    console.log(`STATUS: ${res.status}`);

    const resPost = await res.json() as Promise<Postagem> 
    return resPost;
};


const post = await criarPost();

console.log('Corpo Recebido:');
console.log(post);

// console.log(`Apenas o título: ${post.title}`);
// console.log(`Apenas o corpo: ${post.body}`);
// console.log(`Apenas o id: ${post.id}`);