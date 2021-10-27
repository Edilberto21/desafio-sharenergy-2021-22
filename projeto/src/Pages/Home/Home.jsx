import React from "react";
//Componente de formatação:
import { Conteinarpagina, Titulopagina } from "../../Components/Templates"
//Pode reaproveitar itens que está dendtro dela
const Home = () => {
    return (
        <Conteinarpagina>
            {/* Configurar o layoult de titulos */}
            <Titulopagina>
               Seja bem vindo 
            </Titulopagina>
        </Conteinarpagina>
    );
}
export default Home