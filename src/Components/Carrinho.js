import React, { Component } from 'react';
import styled from 'styled-components';
import { CarrinhoItem } from './Carrinho.Item';




const ContainerCarrinho = styled.div
  `
  width: 250px;
  padding: 10px;
  border: 5px solid gray;
`

// const CarrrinhoTitulo = styled.h1
//   `
// font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
// font-size: 25px;
// font-weight: 600;
// color: black;
// `
const listaDePosts = [
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
    preco: 50
  },
  {
    id: Math.random(),
    imagem: "https://picsum.photos/200/200?2",
    nome: "Post 1",
    preco: 100
  },
  {
    id: Math.random(),
    imagem: "https://picsum.photos/200/200?3",
    nome: "Post 2",
    preco: 200
  },
]

export default class Carrinho extends Component {
  valorTotalProduto = (preco, quantidade) => {
    const total = (preco * quantidade).toFixed(2);
    return total;
  };

  valorTotalCarrinho = (listaProdutos) => {
    let valorTotal = 0;
    for (let produto of listaProdutos) {
      valorTotal += produto.valor * produto.quantidade;
    }
    return (valorTotal).toFixed(2);
  };
  render() {
    const produtosNoCarrinho = this.props.carrinho.map((produto) => {
      return (
        <CardCompra key={produto.id}>
          <div>
            <img src={produto.image} alt={produto.nome} />
            <p>{produto.nome}</p>
            <BotaoDeletar src={Remover} alt="deletar produto" onClick={() => this.props.removerProduto(produto.id)} />
          </div>
          <div></div>
          <div>
            <di>
              <p>Quantidade: <button onClick={() => this.props.diminuirQuantidade(produto)}> - </button>  {produto.quantidade}  <button onClick={() => this.props.adicionarQuantidade(produto)}> + </button> </p>
            </di>
            <p>R$ {this.valorTotalProduto(produto.valor, produto.quantidade)}</p>
          </div>
        </CardCompra>
      );
    });

    const resultadoFinal =
      <div>
        <h1>SUA COMPRA</h1>
        <div>
          <div>
            <h2>Produto escolhido:</h2>
            <span> {this.props.totalItens(this.props.carrinho)} item(s) </span>
          </div>
          <h1>Total:</h1>
          <h2>R$ {this.valorTotalCarrinho(this.props.carrinho)}</h2>
        </div>
        <div>
          <button>FINALIZAR</button>

        </div>
      </div>


    const carrinhoVazio =
      <div>
        <img src={CarroVazio} alt="Carrinho vazio" />
        <h2>Carrinho Vazio</h2>
        <button onClick={this.props.paginaCarrinho}>VOLTAR PARA A PÁGINA INICIAL</button>
      </div>

    if (this.props.carrinho.length > 0) {
      return (
        <div>
          <div>

            <div>
              <h2>★ CARRINHO</h2>
            </div>
            {produtosNoCarrinho}
            <div>
              <button onClick={() => { this.props.limparCarrinho() }}>Limpar Carrinho</button>
            </div>

            <div>
              {resultadoFinal}
            </div>

          </div>
        </div>
      );
    } else {
      return (
        <ContainerCarrinho>
          {carrinhoVazio}
        </ContainerCarrinho>
      );
    }
  }
}

    //     return (
    //         <>

    //           <CarrrinhoTitulo>Carrinho:</CarrrinhoTitulo>


    //               <p>Valor: R$</p>



    //         </>
    //         )
    //     }
    // }
