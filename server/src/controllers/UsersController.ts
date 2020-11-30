import { Request, Response } from 'express';

import db from '../database/connection';

interface FunctionItem {
    occupation: string;
    experiencelevel: number;
};

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

export default class UsersController {

    async create (request: Request, response: Response) {
        
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
            occupations,
            occupation,
            experiencelevel,
            bio,
            receiveemail,
            receivewhats     
            
        } = request.body;

        //trx serve para comunicar que todas estas operações devem ser feitas ao mesmo tempo antes de entrar no db.
        // Para cancelar isto trocar o trx por db. E.g. await db('users')

        const trx = await db.transaction();

    //O try faz parte de uma Promise. Que aqui está contida dentro da função async await.
    // Ele irá tentar executar a função db. mas caso haja algum problema, irá mostrar o erro.
        try{
            const insertUsersIds = await trx('users').insert({
                user,
                email,
                password,
            });

            const user_id = insertUsersIds[0];

            await trx('informations').insert({
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
            });

            const functions_id = occupations.map((functionItem: FunctionItem) => {
                return {
                    user_id,
                    occupation: functionItem.occupation,
                    experiencelevel: functionItem.experiencelevel,
                };
            })

            await trx('experiences').insert(functions_id);


            // É neste momento que as alterações são realmente feitas no banco de dados
            await trx.commit();
            return response.status(201).send(); // 201 = Criado com sucesso
        } catch(err) {
            await trx.rollback(); // Vai desfazer qualquer alteração que tenha sido feita no banco nesta transação
            console.log(err);
            return response.status(400).json({
                error: 'Unexpected error while creating a new class'
            })
        };    
    }
}