import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import dadosUsina from './dadosUsina.json'
class Dadotempoh extends Component {
render() {
    const dados = dadosUsina.map(props => {
      return props.tempo_h
    })
    
       return (

           <ReactEcharts
          
           option = {{
            title: {
              text: 'Gráficos de Tempo em Horas',
              left: 'center'
            },
            
            xAxis: {
              data: {},
            },
            yAxis: {
              
            },
            series: [
              {
                data: dados,
                type: 'line',
                label: {
                  position: 'bottom',
                  align: 'center',
                  textStyle: {
                    fontSize: 20,
                    fixed: true,
                  },
                },
              
              }
            ],
            tooltip: {
              show: true,
              formatter: function (params) {
                return (
                  params.dados
                );
              }
            }
            
          }}
           />
       );
   }
}
export default Dadotempoh;