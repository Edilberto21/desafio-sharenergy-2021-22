import React from "react";
/* Switch: Para saber qual rota vai ser chamada.
Route são as rotas. */
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Grafico from "../Grafico/Grafico"
import Crud from "../Crud/Crud"
import Home from "../Home/Home"
//Função direta pra ficar mais limpo
const Routes = () => {
    //Aqui vai usar o switch.
    return (
        <Switch>
            {/*path: Parâmetros que o usuário vai ver. 
            exact: Cair exatamento oque foi escrito no parâmetro*/}
            <Route path="/" exact><Home/></Route>
            <Route path="/Grafico"><Grafico/></Route>
            <Route path="/Crud"><Crud/></Route>
        </Switch>
    )
}
export default Routes