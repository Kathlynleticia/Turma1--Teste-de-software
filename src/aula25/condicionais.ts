const statusCode: number = 201;

if(statusCode === 200) {
    console.log('OK: recurso retornado');
} else if(statusCode === 201) {
    console.log('Created: recurso criado');
} else {
    console.log(`Status inesperado: ${statusCode}`);
}

//Operador ternário: decisão curta em uma linha só
const resultado = statusCode < 400 ? 'Passou' : 'Falhou';
console.log(resultado); 


