import React from "react";
//Componente de formatação:
//Pode reaproveitar itens que está dendtro dela
const Home = () => {
    return (
        <div>        
        <table>
        <caption>Ferramentas que usei para criar o projeto:</caption>
            <thead>
            <tr>
                <th>MongoDB</th>
                <th>Express</th>
                <th>Node</th>
                <th>React</th>
                <th>Mongoose</th>
                <th>Chart</th>
                <th>react-chartjs-2</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Banco de dados orientado a documentos livre</td>
                <td>Estrutura de aplicação web</td>
                <td>Funciona tipo um servidor para conectar o React com o MongoDB</td>
                <td>Frontend da aplicação</td>
                <td>Vai modelar os dados do MongoDB</td>
                <td>Ferramenta que usei para criar o gráfico</td>
                <td>Outra ferramenta que usei para criar o gráfico</td>
            </tr>
            </tbody>
        </table>
        </div>
    );
}
export default Home