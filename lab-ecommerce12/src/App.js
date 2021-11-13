import React from 'react'
import { DivPai, ContainerPosts, DivOrdenacao, GradeDePosts} from './App-Style'
import { Paragrafo, ContainerFiltros, Titulo, Input, Sear } from './Components/Filtros/Filtros-Style'
import Post from './Components/Post'


class App extends React.Component {
  state = {
    listaDePosts: [
      {
        id: Math.random(),
        imagem: "https://i.postimg.cc/7YgwtP6q/among.png",
        nome: "Toy Box Coleçao - Among Us",
        preco: 200
      },
      {
        id: Math.random(),
        imagem: "https://i.postimg.cc/Ss3k3JCx/among-us07.png",
        nome: "Pelúcia - Among Us",
        preco: 70
      },
      {
        id: Math.random(),
        imagem: "https://i.postimg.cc/MZfWRmJM/among-us05.png",
        nome: "Chaveiro - Among Us",
        preco: 15
      },
      {
        id: Math.random(),
        imagem: "https://i.postimg.cc/0jSPsP0d/among-us06.png",
        nome: "Estojo - Among Us",
        preco: 45
      },
      {
        id: Math.random(),
        imagem: "https://i.postimg.cc/Zq68CdY1/amongus8.jpg",
        nome: "Action Figure - Among Us",
        preco: 90
      },
      {
        id: Math.random(),
        imagem: "https://i.postimg.cc/cLp7xmWR/amongus9.jpg",
        nome: "Lego - Among Us",
        preco: 110
      }
    ],
    order: 1,
    qntDeProdutos: 0,
    inputValorMaximo: "",
    inputValorMinimo: "",
    inputProduto: "",

  }

  updateOrder = (event) => {
    this.setState({ order: event.target.value })
  }
//----------------------------------
  onChangeMaximo = (event) => {
    this.setState({ inputValorMaximo: event.target.value });
  };

  onChangeMinimo = (event) => {
    this.setState({ inputValorMinimo: event.target.value });
  };

  onChangeProduto = (event) => {
    this.setState({ inputProduto: event.target.value });
  };

  mudarQnt = () =>{
    this.setState({})
  }

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



        <ContainerPosts>
          
            <DivOrdenacao>
              <p>Quantidade de produtos: {this.state.qntDeProdutos}</p>
              <span>
                <label>
                  Ordenação:
                  <select name="order" value={this.state.order} onChange={this.updateOrder}>
                    <option value={1}>Crescente</option>
                    <option value={-1}>Decrescente</option>
                  </select>
                </label>
              </span>
            </DivOrdenacao>

          <GradeDePosts>
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
          </GradeDePosts>

        </ContainerPosts>

        {/* <ContainerFiltros>
          
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

        </ContainerFiltros> */}

      </DivPai>

    );
  }
}

export default App;

