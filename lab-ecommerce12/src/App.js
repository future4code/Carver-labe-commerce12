import React from 'react'
import {DivPai,Div,Div2} from './App-Style'
import Filtros from './Components/Filtros'


class App extends React.Component {
  state = {
    listaDePosts: [
      {
        id: Math.random(),
        imagem: "https://picsum.photos/250/230",
        nome: "Post 1",
        preco: 20
      },
      {
        id: Math.random(),
        imagem: "https://picsum.photos/250/230?1",
        nome: "Post 2",
        preco: 50
      },
      {
        id: Math.random(),
        imagem: "https://picsum.photos/250/230",
        nome: "Post 1",
        preco: 100
      },
      {
        id: Math.random(),
        imagem: "https://picsum.photos/250/230?1",
        nome: "Post 2",
        preco: 200
      },
    ]
  }

  render() {
    return(
    <DivPai>
      <Filtros/> 
      {this.state.listaDePosts.map((post) =>{
        return(
          <Div>
            <img src={post.imagem}/>
            <Div2>
            <p>{post.nome}</p>
            <p>R${Number(post.preco)}</p>
            </Div2>
            <button>Adicionar ao carrinho</button>
          </Div>
        )
      })}

    </DivPai>

    );
  }
}

export default App;

