import React, {Component} from 'react';
import styled from 'styled-components';


const ContainerFiltros = styled.div`
border: 2px solid black;

`
const Titulo = styled.h1`
color: red;

`

// const Paragrafo = styled.p`
// `



export class App extends Component {
  state = { //presente durante a execucao do app, qd atualiza a pag, muda
    inputValorMaximo: "",     
    inputValorMinimo: "", 
    inputProduto: "",    
          
    
  };

  onChangeMaximo = (event) => {
    this.setState({ inputValorMaximo: event.target.value }); //modifica o state
  };

  onChangeMinimo = (event) => {
    this.setState({ inputaValorMinimo: event.target.value });
  };

  onChangeProduto = (event) => {
    this.setState({ inputProduto: event.target.value });
  };

  filtrarItensMax = (event) => {
    this.setState({inputValorMaximo: event.target.value})
 };
  

  filtrarItensMin = (event) => {
    this.setState({inputaValorMinimo: event.target.value})
  };

  


 

  render() {  //o que aparece na tela, renderizado


       // const produtosFitrados = this.state.produtos.filter((produto) => {
    //   return // condicionais
    // })

    // const listaDeProdutosFiltrados = this.state.produtos.map((produto) => {
    //   return(
    //     <Produto
    //       imagem = {produto.imagem}
    //       titulo = {produto.titulo}
    //       preco = {produto.preco}
    //     />
    //   )
    // })
  
    

    return (

      <ContainerFiltros>
        <Titulo>Filtros</Titulo>
        <p> Valor Mínimo</p>
        <input min="100" type="number"
          value={this.state.inputValorMaximo}
          onChange={this.onChangeMaximo}
          placeholder="Pesquisa"
        />
        <p> Valor Máximo</p>
        <input max="1000" type="Number"
          value={this.state.inputaValorMinimo}
          onChange={this.onChangeMinimo}
          placeholder="Pesquisa"
        />
        <p> Buscar Produtos</p>
        <input
          defaultValue=""
          type="text"
          ref={this.state.inputProduto} 
          onChange={this.onChangeProduto}
          placeholder="Produto"
          />

        {
         
       } 
   
        
      </ContainerFiltros>
           
      

      
    );

    

  



}



  
  
}

export default App;

