import { React, Component } from 'react';
import './App';
import { Line } from 'react-chartjs-2'
import dadosUsina from './dadosUsina.json'
class App extends Component {

  render() {
    var strUser = document.getElementById("seletor").getElementsByTagName('option')
    
    strUser = dadosUsina.map(props => {
      return props.strUser 
    })
    console.log(strUser)
    return (
      <div>
        <select id="seletor">
          <option>tempo_h</option>
          <option>tensao_V</option>
          <option>corrente_A</option>
          <option>potencia_kW</option>
          <option>temperatura_C</option>
          
        </select>
      
      
      {/* Line é o tipo de gráfico do react-chartjs-2*/}
      <Line
          //Quando usa duas chaves
          //é objeto.
          data={{
              //Labels são os valores de x no gráfico.
              
              labels: strUser,
              //Personalizar os dados.
              datasets: [{
                  label: 'Tempo em Horas',
                  data: strUser,
                  fill: false,
                  borderColor: 'rgb(75, 192, 192)',
                  tension: 0.1,
                  backgroundColor: "rgba(52,152,219,0.4)"
              }]

          }}
          //Tamanho
          height={100}
          //Largura
          width={300}
      />
      
  </div>
    )

  }
}
export default App