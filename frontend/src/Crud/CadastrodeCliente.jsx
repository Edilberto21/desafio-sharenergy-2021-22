import "./CadastrodeCliente.css";
import React from "react"

function CadastrodeCliente() {
<form>
{/* onChange: sempre quando acontecer
algo na entrada do valor  mudará a função
que colocarmos*/}
{/* onClick: sempre quando aperta no botão chama
a função para addCliente */}
{/* Setando valores no target.value */}
<label>Número do cliente:</label>
<input
  type="number"
  onChange={(e) => { setnumeroCliente(e.target.value) }} />
<label>Nome do cliente:</label>
<input
  type="text"
  onChange={(e) => { setnomeCliente(e.target.value) }} />
<label>Id da usina:</label>
<input
  type="number"
  onChange={(e) => { setusinaId(e.target.value) }} />
<label>Percentual de participação:</label>
<input
  type="number"
  onChange={(e) => { setpercenDeParticipacao(e.target.value) }} />
<button onClick={addCliente}>Adicionando Cliente</button>
</form>
}
export default CadastrodeCliente