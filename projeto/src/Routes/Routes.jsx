import React from "react";
/* Switch: Para saber qual rota vai ser chamada.
Route são as rotas. */
import { Switch, Route } from 'react-router-dom'
import Grafico from "../Pages/Grafico/Grafico"
import Home from "../Pages/Home/Home" 
//Função direta pra ficar mais limpo
const Rotas = () => {
    //Aqui vai usar o switch.
    return (
        <Switch>
            {/*path: Parâmetros que o usuário vai ver. 
            exact: Cair exatamento oque foi escrito no parâmetro*/}
            <Route path="/" exact><Home/></Route>
            <Route path="/Grafico" exact><Grafico/></Route>
        </Switch>
    )
}
export default Rotas