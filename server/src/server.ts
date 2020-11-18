import express from 'express';

//Tudo vai partir da variável app chamando a função express.... Rotas, requisições...
const app = express();

app.use(express.json()); // o app irá introduzir o plugin express.json que fará a conversão do request.body p/ Java

// quando o usuário acessar (get) a rota users irá executar a Arrow Function
// request recebe informações sobre a requisição, como cabeçalho e corpo. Quando vai criar um usuário é aqui que estão os dados dele que vira pelo FE;
// response é a resposta que a API irá devolver (backend)
// iremos sempre devolver ao front objetos e arrays em json

// app.get('/users', (request, response) => {
//     console.log(request.body);

//     const users = [
//         { name: 'Diego', age: 25},
//         { name: "Leo", age: 29},
//     ];

//     return response.json(users);
// });


// **Route Params **
// app.delete('/users/:id', (request, response) => {
//     console.log(request.params);

app.get('/', (request, response) => {
    return response.json({message: 'Hello World'});
});

app.listen(3333); //A aplicação irá ouvir endereços/requisições HTTP na porta 3333. A porta padrão é 80;



