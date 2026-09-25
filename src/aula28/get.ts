type Post = {
    id: number;
    title: string;
    body: string;
}

//GET: busca post por ID
async function buscarPost(id: number): Promise<Post> {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );  // Utilize novos endpoints /posts - /posts/1 - /posts/1/comments

    console.log(`STATUS: ${res.status}`)

    const resPost = await res.json() as Promise<Post>;
    return resPost
}

const get = await buscarPost(77); 

console.log('Corpo Recebido:')
console.log(get);

// console.log(`Apenas o título: ${get.title}`);
// console.log(`Apenas o corpo: ${get.body}`);
// console.log(`Apenas o id: ${get.id}`);






