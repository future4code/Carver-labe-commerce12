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
  state = { 
    inputValorMaximo: "",     
    inputValorMinimo: "", 
    inputProduto: "",    
          
    
  };

  onChangeMaximo = (event) => {
    this.setState({ inputValorMaximo: event.target.value }); 
  };

  onChangeMinimo = (event) => {
    this.setState({ inputValorMinimo: event.target.value });
  };

  onChangeProduto = (event) => {
    this.setState({ inputProduto: event.target.value });
  };
 


 

  render() {  


  

    // const filtroDePosts = this.state.listaDePosts.map((listaDePosts) => {
    //   return(
    //     <listaDePosts
    //       id = {listaDePosts.id}
    //       imagem = {listaDePosts.imagem}
    //       nome = {listaDePosts.nome}
    //       preco = {listaDePosts.preco}
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
          value={this.state.inputValorMinimo}
          onChange={this.onChangeMinimo}
          placeholder="Pesquisa"
        />
        <Paragrafo> Buscar Produtos</Paragrafo>
        <div>
        <Input
          defaultValue=""
          type="text"
          // ref={this.state.inputProduto} 
          onChange={this.onChangeProduto}
          placeholder="Digite aqui"
          />
          

          </div>
        
          <button onClick = {this.filtroDePosts}>Procurar</button>
          
        {
         
       } 
   
        
      </ContainerFiltros>
           
      

      
    );

    

  



}



  
  
}

export default App;

