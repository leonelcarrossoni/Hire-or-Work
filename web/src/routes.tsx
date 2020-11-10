import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import WorkerForm from './pages/WorkerForm';
import FindWorker from './pages/FindWorker';

function Routes () {
    return (
        //Necessário colocar por BrowserRouter por volta de todas as rotas
        // O exact faz uma verificação de igualdade. Para que mostre apenas se for exatamente "/"
        <BrowserRouter> 
            <Route path="/" exact component={Landing} /> 
            <Route path="/workerform" component={WorkerForm} />
            <Route path="/findworker" component={FindWorker} />
        </BrowserRouter>
    );
}

export default Routes;