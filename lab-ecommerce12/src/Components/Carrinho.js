import React, { Component } from 'react';
import styled from 'styled-components';
import { CarrinhoItem } from './Carrinho.Item';




const ContainerCarrinho = styled.div
    `
  width: 250px;
  padding: 10px;
  border: 5px solid gray;
`

const CarrrinhoTitulo = styled.h1
    `
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-size: 25px;
font-weight: 600;
color: black;
`
// const listaDePosts = [
//     {
//       id: Math.random(),
//       imagem: "https://picsum.photos/200/200",
//       nome: "Post 1",
//       preco: 20
//     },
//     {
//       id: Math.random(),
//       imagem: "https://picsum.photos/200/200?1",
//       nome: "Post 2",
//       preco: 50
//     },
//     {
//       id: Math.random(),
//       imagem: "https://picsum.photos/200/200?2",
//       nome: "Post 1",
//       preco: 100
//     },
//     {
//       id: Math.random(),
//       imagem: "https://picsum.photos/200/200?3",
//       nome: "Post 2",
//       preco: 200
//     },
//   ]

export default class Carrinho extends Component {
    // //array vazio para adicionar produtos
    // state = {
    //     carrinho: []
    // }
    // adicionarItemNoCarrinho = (id) => {
    //     const produtosNoCarrinho = listaDePosts.filter((produto) => {
    //         return produto.id === id
    //     })
    

    //     const novoCarrinho = [...this.state.itensNoCarrinho, produtosNoCarrinho[0]]

    //     this.setState({ itensnoCarrinho: novoCarrinho })
    // }

render() {
    
        return (
            <ContainerCarrinho>

              <CarrrinhoTitulo>Carrinho:</CarrrinhoTitulo>
              

                  <p>Valor: R$</p>



            </ContainerCarrinho>
            )
        }
    }

