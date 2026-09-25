// DELETE: remove recurso
async function deletar(id: number): Promise<void> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { 
        method: 'DELETE' 
    });

    console.log(`STATUS: ${res.status}`) 
}       

deletar(1)

// Se quiser ver o que o chega no corpo da resposta, basta trocar para Promise<Response>
// adicionar return res; e declarar uma const delet = await deletar(1)