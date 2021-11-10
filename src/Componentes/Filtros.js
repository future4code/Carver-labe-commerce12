import React from "react";
import styled from "styled-components";

const CardProf = styled.div`
  display: flex;
  border: 1px solid gray;
  margin: 8px 0;
  padding: 0 8px;
  justify-content: space-between;
  align-items: center;
`;


const TextoCima = styled.p`


`

class App extends React.Component {
  state = {
    inputValorMaximo: "",     //nome
    inputaValorMinimo: "",     //idade
    instrutores: [
      
    ]
  };

  guardaMaximo = (event) => {
    this.setState({ inputValorMaximo: event.target.value });
  };

  guardaMinimo = (event) => {
    this.setState({ inputaValorMinimo: event.target.value });
  };

  adicionaProf = () => {
    // Criamos o novo professor baseado nos inputs do usuário
    const novoProf = {
      id: Math.random(),
      nome: this.state.inputNome,
      idade: Number(this.state.inputaValorMinimo)
    };

    // Criamos uma cópia do estado e adicionamos o novo prof
    const copia = [...this.state.instrutores, novoProf];
    // copia.push(novoProf)

    // Salvou as mudanças no estado
    this.setState({ instrutores: copia });
    this.setState({ inputValorMaximo: "", inputaValorMinimo: "" });
  };


  
  render() {
    const listaComponentes = this.state.instrutores.map((prof) => {
      return (
        <CardProf key={prof.id}>
          <b>{prof.nome}</b>
    
          <button onClick={() => this.deletaProf(prof.id)}>X</button>
        </CardProf>
      );
    });

    return (
      <div>
        <h1>FILTROS</h1>
        <p> Valor Mínimo</p>
        <input min="100" type="number"
          value={this.state.inputValorMaximo}
          onChange={this.guardaMaximo}
          placeholder="Valor min"
        />
        <p> Valor Máximo</p>
        <input max="1000" type="Number"
          value={this.state.inputaValorMinimo}
          onChange={this.guardaMinimo}
          placeholder="Valor Max"
        />
        <p> Busca Nome</p>
        <input
          value={this.state.inputIdade} //mudar para busca
          onChange={this.guardaIdade}
          placeholder="Produto"
        />
        
      </div>
    );
  }
}

export default App;
