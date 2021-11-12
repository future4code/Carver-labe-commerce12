import React, { Component } from 'react';
import styled from 'styled-components';



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

export class Carrinho extends Component {
    state = {
     carrinho=[]
    };
    adicionarItemNoCarrinho = (id) => {
        const produtos = listaDePost.filter(produto => {
            return produto.id === id
        })
        const novoCarrinho = [...this.state.carrinho, produto[0]]
        a
        this.setState({
            carrinho=novoCarrinho
        })
    }    

    render() { 
        return (
            <ContainerCarrinho>
                <CarrrinhoTitulo>Carrinho:</CarrrinhoTitulo>
                <p>Valor: R$ {preco}</p>
             </ContainerCarrinho>
  )
 }
}


