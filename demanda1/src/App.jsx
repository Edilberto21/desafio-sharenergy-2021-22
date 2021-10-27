import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import dadosUsina from './dadosUsina.json'
function Example() {
  
  const [selectValue, setSelectValue] = useState(1);  
  //Lista de valores do select:
  const list = [
    {id: 'Selecione a variável', name: 'Selecione a variável'},
    {id: 'tempo_h', name: 'tempo_h'},
    {id: 'tensao_V', name: 'tensao_V'},
    {id: 'corrente_A', name: 'corrente_A'},
    {id: 'potencia_kW', name: 'potencia_kW'},
    {id: 'temperatura_C', name: 'temperatura_C'},
  ];
  const dados = dadosUsina.map(props => {
    if (list[1].id === selectValue) {
        return props.tempo_h
      } else if(list[2].id === selectValue){
        return props.tensao_V
      } else if(list[3].id === selectValue){
        return props.corrente_A
      } else if(list[4].id === selectValue){
        return props.potencia_kW
      } else if(list[5].id === selectValue){
        return props.temperatura_C
      } else {
        return 'Selecione a variável'
      }

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

      <Line
          //Quando usa duas chaves
          //é objeto.
          data={{
            //Labels são os valores de x no gráfico.
            labels: dados,
            //Personalizar os dados.
            datasets: [{
              data: dados,
              //Nome do gráfico:
              label: 'Gráficos',
              borderColor: 'rgb(0,0,139)',
              backgroundColor: "rgb(6,251,255)"
            }],
          }}
          //Tamanho
          height={100}
          //Largura
          width={300}
        />
    </div>
  )
}

export default Example;