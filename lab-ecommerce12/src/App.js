import React from 'react'
import { DivPai, DivPosts } from './App-Style'
import { Paragrafo, ContainerFiltros, Titulo, Input } from './Filtros-Style'
import Post from './Components/Post'
import Filtros from './Components/Filtros'


class App extends React.Component {
  state = {
    listaDePosts: [
      {
        id: Math.random(),
        imagem: "https://picsum.photos/200/200",
        nome: "brinquedo",
        preco: 20
      },
      {
        id: Math.random(),
        imagem: "https://picsum.photos/200/200?1",
        nome: "Brinquedo",
        preco: 100
      },
      {
        id: Math.random(),
        imagem: "https://picsum.photos/200/200?2",
        nome: "Post 1",
        preco: 500
      },
      {
        id: Math.random(),
        imagem: "https://picsum.photos/200/200?3",
        nome: "produto",
        preco: 200
      },
    ],
    order: 1,
    inputValorMaximo: "",
    inputValorMinimo: "",
    inputProduto: "",

  }

  updateOrder = (event) => {
    this.setState({ order: event.target.value })
  }



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
    return (
      <DivPai>


        <ContainerFiltros>
          <Titulo>Filtros</Titulo>
          <Paragrafo> Valor Máximo</Paragrafo>
          <Input
            type="number"
            value={this.state.inputValorMaximo}
            onChange={this.onChangeMaximo}
            placeholder="Preço Máximo"
          />
          <Paragrafo> Valor Mínimo</Paragrafo>
          <Input
            type="Number"
            value={this.state.inputValorMinimo}
            onChange={this.onChangeMinimo}
            placeholder="Preço Mínimo"
          />
          <Paragrafo> Buscar Produtos</Paragrafo>

          <div>
            <Input
              defaultValue=""
              type="text"
              onChange={this.onChangeProduto}
              placeholder="Digite aqui"
            />
          </div>

        </ContainerFiltros>



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
            {this.state.listaDePosts.filter(listaDePosts => {
              return listaDePosts.nome.toLowerCase().includes(this.state.inputProduto.toLowerCase())
            })

              .filter(listaDePosts => {
                return this.state.inputValorMinimo === "" || listaDePosts.preco >= this.state.inputValorMinimo
              })
              .filter(listaDePosts => {
                return this.state.inputValorMaximo === "" || listaDePosts.preco <= this.state.inputValorMaximo
              })
              .sort((primeiroPost, segundoPost) => {
                return this.state.order * (primeiroPost.preco - segundoPost.preco)
              })
              .map((post) => {
                return (
                  <Post imagem={post.imagem} nome={post.nome} preco={post.preco} />
                )
              })}
          </div>
        </DivPosts>

        <Filtros />
      </DivPai>

    );
  }
}

export default App;

