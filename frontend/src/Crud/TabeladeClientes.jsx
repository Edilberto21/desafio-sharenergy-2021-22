import "./TabeladeClientes.css";
import { useState, useEffect } from 'react'
import axios from 'axios'
import iconeadd from '../Image/iconadicionar.png'
import iconrem from '../Image/iconremover.png'
import cliente from '../Image/user.png'
function App() {
  const [numeroCliente, setnumeroCliente] = useState(0)
  const [nomeCliente, setnomeCliente] = useState("")
  const [usinaId, setusinaId] = useState(0)
  const [percentualDeParticipacao, setpercenDeParticipacao] = useState(0)
  const [listaClientes, setlistaClientes] = useState([])

  /*Com o axios fazemos pedidos para
  que ele possa fazer operações com o banco
  de dados com url do MongoDB. */
  const addCliente = () => {

    /*Foi criado /addCliente no index.js
    que é do servidor. */
    axios.post('http://localhost:3001/adicionar', {

      //Enviando para o backend
      numeroCliente: numeroCliente,
      nomeCliente: nomeCliente,
      usinaId: usinaId,
      percentualDeParticipacao: percentualDeParticipacao
    }).then((resposta) => {
      /* O que estou fazendo aqui
      Não quero ficar atualizando o banco 
      toda vez e nem a página, ai fazendo um set
      vai direto o cliente criado.*/
      setlistaClientes([...listaClientes, 
        {_id: resposta.data._id,numeroCliente: numeroCliente, nomeCliente: nomeCliente, usinaId: usinaId, percentualDeParticipacao: percentualDeParticipacao }])
    })
  }

  //Atualizado pelo id.
  const atualizarCliente = (id) => {
    const novonumeroCliente = prompt({nomeCliente})
    const novonomeCliente = prompt({numeroCliente})
    const novousinaId = prompt("Digite o novo id da Usina: ")
    const novopercentualDeParticipacao = prompt("Digite o percentual de participação do cliente: ")
    axios.put('http://localhost:3001/atualizar', {
      novonumeroCliente: novonumeroCliente, novonomeCliente: novonomeCliente, novousinaId: novousinaId, novopercentualDeParticipacao: novopercentualDeParticipacao, id: id
    /*Quando o valor no backend ser atualizado 
    o frontend também será atualizado. */
    }).then(() => {
      setlistaClientes(listaClientes.map((dados) => {
        return dados._id == id 
        ? {_id: id, numeroCliente: novonumeroCliente, nomeCliente: novonomeCliente, usinaId: novousinaId, percentualDeParticipacao: novopercentualDeParticipacao} 
        : dados;
      }))
    });
  }

  const removerCliente = (id) => {
    axios.delete(`http://localhost:3001/excluir/${id}`).then(() => {
      /* Filtrado os dados que estão na lista
      só os que não foram excluidos. */
      setlistaClientes(listaClientes.filter((dados) => {
        return dados._id != id
      }))
    })
  }

  /*useEffect: função para renderizar os dados
  que vão ser inseridos e mostrar na página.*/
  useEffect(() => {
    axios.get('http://localhost:3001/leitura', {

      //Resposta dos dados.  
    }).then(resposta => {

      /*Pegando os dados que foram inseridos
       no banco de dados.*/
      setlistaClientes(resposta.data)
    }).catch(() => {
      console.log("Erro")
    })
  }, [])
  return (
    <div className="App">
        {/* Mapeando elementos da lista. */}
        {listaClientes.map((dados) => {
          return (
            <table>
              <img src={cliente} />
              <thead>
                <th>Nome do Cliente</th>
                <th>Numero do Cliente</th>
                <th>Id da usina</th>
                <th>Percentual de participação</th>
              </thead>
              <tbody>
                <td>{dados.nomeCliente}</td>
                <td>{dados.numeroCliente}</td>
                <td>{dados.usinaId}</td>
                <td>{dados.percentualDeParticipacao}%</td>
                <td><button onClick={ () => {atualizarCliente(dados._id)}}><img src={iconeadd} /></button></td>
                <td><button onClick={ () => {removerCliente(dados._id)}}><img src={iconrem} /></button></td>
              </tbody>
            </table>
          )
        })}
    </div>
  )
}

export default App;
