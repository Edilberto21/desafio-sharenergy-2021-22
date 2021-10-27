import React from "react"
//Chamando o styled
import { AreaHeader } from "./styled"
//Link serve para navegar entre componentes por links.
import { Link } from "react-router-dom"
function Header() {
   return(
       //Componente que estiliza o header:
        <AreaHeader>
        {/* Classe que vamo configura */}
            <div className="container">
                <div className="logo">
                    <img src="logo.png"/>
                </div>
                {/* Menus */}
                <nav>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/Grafico">Gráfico</Link></li>
                        <li><Link to="/Crud">CRUD</Link></li>
                        <li><Link to="/Logica">Logica</Link></li>
                    </ul>
                </nav>
            </div>
        </AreaHeader>
    )
}
export default Header