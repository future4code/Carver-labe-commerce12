import React, {Component} from 'react';
import styled from 'styled-components';


const Paragrafo = styled.p`
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
color: black;


`

const ContainerFiltros = styled.div`
  width: 250px;
  padding: 10px;
  border: 5px solid gray;
  

`
const Titulo = styled.h1`
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-size: 25px;
font-weight: 600;
color: black;

`

const Input = styled.input`
margin:0;


`




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
    //     <listaDePost
    //       imagem = {produto.imagem}
    //       titulo = {produto.titulo}
    //       preco = {produto.preco}
    //     />
    //   )
    // })
  
    

    return (

      
       <ContainerFiltros>
        <Titulo>Filtros</Titulo>
        <Paragrafo> Valor Mínimo</Paragrafo>
        <Input min="100" type="number"
          value={this.state.inputValorMaximo}
          onChange={this.onChangeMaximo}
          placeholder="Pesquisa"
        />
        <Paragrafo> Valor Máximo</Paragrafo>
        <Input max="1000" type="Number"
          value={this.state.inputaValorMinimo}
          onChange={this.onChangeMinimo}
          placeholder="Pesquisa"
        />
        <Paragrafo> Buscar Produtos</Paragrafo>
        <Input
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

