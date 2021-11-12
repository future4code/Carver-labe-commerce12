import React from 'react'
import { DivPai, DivPosts } from './App-Style'
import Post from './Components/Post'
import Filtros from './Components/Filtros'
import Carrinho from './Components/Carrinho'


class App extends React.Component {
  state = {
    listaDePosts: [
      {
        id: Math.random(),
        imagem: "https://picsum.photos/200/200",
        nome: "Post 1",
        preco: 20
      },
      {
        id: Math.random(),
        imagem: "https://picsum.photos/200/200?1",
        nome: "Post 2",
        preco: 100
      },
      {
        id: Math.random(),
        imagem: "https://picsum.photos/200/200?2",
        nome: "Post 1",
        preco: 50
      },
      {
        id: Math.random(),
        imagem: "https://picsum.photos/200/200?3",
        nome: "Post 2",
        preco: 200
      },
    ],
    order: 1
  }

  updateOrder = (event) =>{
    this.setState({order: event.target.value})
  }
  render() {
    return (
      <DivPai>
        <Filtros />

        <DivPosts>
          <div>
            <p>Quantidade de produtos: { }</p>
            <span>
              <label>
                Ordenação:
                <select name="order" value={this.state.order} onChange={this.updateOrder}>
                  <option value={1}>Crescente</option>
                  <option value={-1}>Decrescente</option>
                </select>
              </label>
            </span>

          </div>
        
          <div>
            {this.state.listaDePosts.sort((primeiroPost,segundoPost) =>{
              return this.state.order * (primeiroPost.preco - segundoPost.preco)
            })
            .map((post) => {
            return (

            )
          })}
          </div>
        </DivPosts>

      </DivPai>

    );
  }
}

export default App;

