import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import dadosUsina from './dadosUsina.json'
function Demanda() {
  const [selectValue, setSelectValue] = useState("Selecione a variável");  
  //list: lista de valores do select:
  const list = [
    {id: 'Selecione a variável', name: 'Selecione a variável'},
    {id: 'Tensão elétrica em volts', name: 'tensao_V'},
    {id: 'Corrente elétrica em amperes', name: 'corrente_A'},
    {id: 'Potência gerada em kilowatts', name: 'potencia_kW'},
    {id: 'Temperatura em graus Celsius', name: 'temperatura_C'},
  ];
  /*dados é a variável que armazena o arquivo dadosUsina.json, props vai ser o Array de elementos 
  dentro de dadosUsina.json, props irá recebe todo o Array e depois compara o valor selecionado no 
  select com o valor da lista, se for iguais ira retornar retornar a lista com o Array escolhido 
  no select.*/
  const dados = dadosUsina.map(props => {
    if(list[1].id === selectValue){
        return props.tensao_V
      } else if(list[2].id === selectValue){
        return props.corrente_A
      } else if(list[3].id === selectValue){
        return props.potencia_kW
      } else if(list[4].id === selectValue){
        return props.temperatura_C
      } else if(list[0].id === selectValue){
        return props
      }
      return list

  })
  //tempo: Variavel que recebe o Array de tempo em horas
  const tempo = dadosUsina.map(props => {
    return props.tempo_h.toFixed(2)
  })
  return (    
    <div>
      {/* value está recebendo o valor selecionado.
      (e) é o evento.
      onchange é um método que depois que há alguma 
      mudança executa determinada ação.
      list.map() manipulando a lista,
      pegando o item.id que são os ids da listas.
      pegando o item.name que são os nomes das listas. 
      */}
      <select value={selectValue} onChange={e => setSelectValue(e.target.value)}>
        {list.map((item) => (
          <option value={item.id}>{item.name}</option>
        ))}        
      </select>
          {/* Tipo de gráfico: Line = Linha */}
      <Line
          //Quando usa duas chaves
          //é objeto.
          data={{
            //labels são os valores de x no gráfico.
            labels: tempo,
            //Personalizar os dados.
            datasets: [{
              //data são os valores de y no gráfico.
              data: dados,
              //Nome do gráfico:
              label: selectValue,
              //Cor da linha do gráfico:
              borderColor: 'rgb(220,220,220)',
              //Cor dos pontos do gráfico:
              backgroundColor: "rgb(0,0,0)"
            }]
          }}
          //Tamanho do gráfico
          height={100}
          //Largura do gráfico
          width={300}
        />
        
    </div>
  )
}

export default Demanda;