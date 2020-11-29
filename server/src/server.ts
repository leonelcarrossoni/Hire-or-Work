import express from 'express';
import routes from './routes';

//Tudo vai partir da variável app chamando a função express.... Rotas, requisições...
const app = express();

app.use(express.json()); // o app irá introduzir o plugin express.json que fará a conversão do request.body p/ Java
app.use(routes);

app.listen(3333); //A aplicação irá ouvir endereços/requisições HTTP na porta 3333. A porta padrão é 80;
