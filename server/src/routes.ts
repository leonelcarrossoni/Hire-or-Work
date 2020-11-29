import express from 'express';
import db from './database/connection';

const routes = express.Router();
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

routes.post('/users', async (request, response) => {
    
    // Para confirmar se os dados estão indo corretamente:
    // const data = request.body;
    // console.log(data);

    const {
        user,
        password,
        name,
        lastname,
        email,
        tel,
        birthday,
        birthplace,
        zipcode,
        homenumber,
        street,
        city,
        state,
        englishlevel,
        otherlanguage,
        languagelevel,
        insurance,
        utr,
        cscs,
        cscstype,
        functions,
        experiencelevel,
        bio,
        receiveemail,
        receivewhats     
        
    } = request.body;

//O try faz parte de uma Promise. Que aqui está contida dentro da função async await.
// Ele irá tentar executar a função db. mas caso haja algum problema, irá mostrar o erro.
    try{
        const insertUsersIds = await db('users').insert({
            user,
            email,
            password,
        });

        const user_id = insertUsersIds[0];

        await db('informations').insert({
            name,
            lastname,
            email,
            tel,
            birthday,
            birthplace,
            zipcode,
            homenumber,
            street,
            city,
            state,
            englishlevel,
            otherlanguage,
            languagelevel,
            insurance,
            utr,
            cscs,
            cscstype,
            bio,
            receiveemail,
            receivewhats,
            user_id
        })
    }

    catch(err){console.log(err)};   

    return response.send();
    
});

export default routes;