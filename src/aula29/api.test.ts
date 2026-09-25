import { describe, expect, test } from "vitest";

const BASE_URL = "https://jsonplaceholder.typicode.com";

describe("JSONPlaceholder — testes de integração", () => {
  test("GET /posts retorna lista com 100 posts", async () => {
    const response = await fetch(`${BASE_URL}/posts`);

    expect(response.status).toBe(200); 
    const posts = await response.json(); 
    expect(Array.isArray(posts)).toBe(true); 
    expect(posts).toHaveLength(100); 

  });

  test("POST /posts retorna status 201 e o recurso criado com id", async () => {
    const payload = { 
        title: "Novo post", 
        body: "Conteúdo",
        id: 101,
        userId: 1 
    }; 

    type Payload = typeof payload; 

    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",  
      headers: { "Content-Type": "application/json" }, 
      body: JSON.stringify(payload), 
    });

    expect(response.status).toBe(201);
    const post = await response.json() as Payload; 
    expect(post.id).toBeDefined(); 
    expect(post.title).toBe(payload.title); 
  });

  test("PUT /posts/1 retorna status 200 e o recurso completo atualizado", async () => {
    const payload = {
      userId: 1,
      id: 1,
      title: "Título atualizado via PUT",
      body: "Body atualizado",
    };

    type Payload = typeof payload;

    const response = await fetch(`${BASE_URL}/posts/1`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    expect(response.status).toBe(200);
    const post = await response.json() as Payload;
    expect(post.title).toBe(payload.title);
    expect(post.body).toBe(payload.body);
  });
 
  test("PATCH /posts/1 atualiza apenas o campo enviado", async () => {
    type Payload = {title: string, body: string, userId: number};

    const response = await fetch(`${BASE_URL}/posts/1`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "Só o título mudou" }),
    });

    expect(response.status).toBe(200);
    const post = await response.json() as Payload;
    expect(post.title).toBe("Só o título mudou");
    // body e userId ainda estão presentes (não foram removidos)
    expect(post.body).toBeDefined();
    expect(post.userId).toBeDefined();
  });

  test("DELETE /posts/1 retorna status 200 e body vazio", async () => {
    const response = await fetch(`${BASE_URL}/posts/1`, {
      method: "DELETE",
    });

    expect(response.status).toBe(200);
    const body = await response.json();
    expect(body).toEqual({});
  });
});



// describe('Validando status code e corpo', () => {
    
//     test('Get: Deve retornar status 200 e corpo', async () => {

//         const get = await buscarPost(1);
//         expect(get.status).toBe(200);

//         const corpo = await buscarPost(1);
//         expect(corpo).toBeDefined(); //esse valor não é undefined
//     });

//     test('Post: Deve retornar status 201 e corpo', async () => {

//         const post = await criarPost();
//         expect(post.status).toBe(201);

//         const corpo = await criarPost();
//         expect(corpo).toBeDefined();
//     });

//     test('Put: Deve retornar status 200 e corpo', async () => {

//         const put = await atualizarCompleto(1);
//         expect(put.status).toBe(200);

//         const corpo = await atualizarCompleto(1);
//         expect(corpo).toBeDefined();
//     });

//     test('Delete: Deve retornar status 200 e corpo', async () => {

//         const delet = await deletar(1);
//         expect(delet.status).toBe(200);  

//         const corpo = await deletar(1);
//         expect(corpo).toBeDefined();
//         //pect(corpo.body).toBeDefined();
//     });

//     test('Patch: Deve retornar status 200 e corpo', async () => {

//         const patch = await atualizarTitulo(1);
//         expect(patch.status).toBe(200);

//         const corpo = await atualizarTitulo(1);
//         expect(corpo).toBeDefined();
//     });
// })