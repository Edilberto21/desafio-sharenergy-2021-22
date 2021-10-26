import { React, Component } from 'react';
import './App';
import { Line } from 'react-chartjs-2'
import dadosUsina from './dadosUsina.json'
class App extends Component {

  render() {
    var getValue = document.getElementById('seletor')

    console.log(getValue)
    getValue = dadosUsina.map(props => {
      return props.getValue
    })
    return (
      <div>
        <select id="seletor">
          <option value="tempo_h">tempo_h</option>
          <option value="tensao_V">tensao_V</option>
          <option value="corrente_A">corrente_A</option>
          <option value="potencia_kW">potencia_kW</option>
          <option value="temperatura_C">temperatura_C</option>
          
        </select>
      
      
      {/* Line é o tipo de gráfico do react-chartjs-2*/}
      <Line
          //Quando usa duas chaves
          //é objeto.
          data={{
              //Labels são os valores de x no gráfico.
              
              labels: getValue.slice(0,151),
              //Personalizar os dados.
              datasets: [{
                  label: 'Tempo em Horas',
                  data: getValue,
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