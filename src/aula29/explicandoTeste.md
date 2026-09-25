```
const BASE_URL = "https://jsonplaceholder.typicode.com";
```
Declarando constante que irá armazenar a URL base da API que estamos consumindo.

## GET

```
    const response = await fetch(`${BASE_URL}/posts`);

    expect(response.status).toBe(200); 
    const posts = await response.json(); 
    expect(Array.isArray(posts)).toBe(true); 
    expect(posts).toHaveLength(100); 

});
```
Esse código faz um teste de uma requisição GET para /posts. Primeiro, fetch() faz a requisição para a API e guarda a resposta na variável response. Depois, response.status pega o código HTTP retornado, e toBe(200) verifica se a resposta foi 200 (OK). Em seguida, response.json() pega os dados enviados pela API e transforma o JSON recebido em uma estrutura que pode ser usada no código, armazenando o resultado em posts. O Array.isArray(posts) verifica se esses dados são realmente um array, e toBe(true) confirma isso. Por fim, toHaveLength(100) verifica se o array retornado possui exatamente 100 elementos.


## POST

```
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
```

Esse código faz um teste de uma requisição POST para criar um novo post. Primeiro, payload guarda os dados que serão enviados para a API. O type Payload = typeof payload cria um tipo baseado na estrutura desse objeto. Depois, fetch() envia o payload para /posts usando o método POST; o Content-Type informa que o conteúdo enviado é JSON, e JSON.stringify(payload) transforma o objeto em uma string JSON. Em seguida, response.status verifica se a API retornou 201 (Created), indicando que o recurso foi criado. O response.json() pega o post retornado pela API, e as Payload informa ao TypeScript que esse objeto possui a estrutura de Payload. Por fim, toBeDefined() verifica se o post recebeu um id, e toBe(payload.title) verifica se o título retornado é igual ao título que foi enviado.

## PATCH

```
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
```
Esse código faz um teste de uma requisição PATCH para atualizar apenas o título de um post existente. Primeiro, Payload define a estrutura esperada para o post, com title, body e userId. Depois, fetch() envia uma requisição PATCH para /posts/1, informando que o conteúdo é JSON e enviando apenas o novo título no body. Em seguida, response.status verifica se a API retornou 200 (OK). O response.json() pega o post atualizado retornado pela API, e as Payload informa ao TypeScript que esse objeto possui a estrutura definida em Payload. Por fim, o teste verifica se o título foi realmente alterado e se body e userId continuam presentes no objeto.

## PUT 

```
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
```
Esse código faz um teste de uma requisição PUT para atualizar completamente o post de número 1. Primeiro, payload guarda todos os dados que serão enviados para substituir os dados do post. O type Payload = typeof payload cria um tipo baseado na estrutura desse objeto. Depois, fetch() envia a requisição PUT para /posts/1, informando que o conteúdo é JSON e usando JSON.stringify(payload) para transformar o objeto em uma string JSON. Em seguida, response.status verifica se a API retornou 200 (OK). O response.json() pega o post atualizado retornado pela API, e as Payload informa ao TypeScript que ele possui a estrutura de Payload. Por fim, os dois expect() verificam se o title e o body retornados são iguais aos valores que foram enviados no payload.


## DELETE

```
  const response = await fetch(`${BASE_URL}/posts/1`, {
      method: "DELETE",
  });

    expect(response.status).toBe(200);
    const body = await response.json();
    expect(body).toEqual({});
});
```
Esse código faz um teste de uma requisição DELETE para excluir o post de número 1. O fetch() envia a requisição para /posts/1 usando o método DELETE. Depois, response.status verifica se a API retornou 200 (OK), indicando que a exclusão foi realizada. Em seguida, response.json() pega o conteúdo retornado pela API e armazena em body. Por fim, toEqual({}) verifica se a resposta é exatamente um objeto vazio, indicando que não há mais dados do post sendo retornados.

POST, PUT e PATCH têm praticamente a mesma estrutura porque os três são métodos HTTP usados para enviar dados para a API. Por isso, normalmente todos utilizam fetch() com method, headers informando application/json e body: JSON.stringify(payload) para transformar os dados em JSON antes do envio. A principal diferença está no objetivo da requisição: o POST é usado para criar um novo recurso, o PUT para atualizar/substituir o recurso inteiro e o PATCH para atualizar apenas uma parte dele. Por isso, a estrutura do código é parecida, mas o conteúdo enviado e a finalidade mudam.