import React from "react";
import styled from "styled-components";


const ItemCarrinho = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 4px;
  align-items: center;

`


export class CarrinhoItem extends React.Component {
    render() {
        return (
            <ItemCarrinho>
                <img>{this.props.produtoImagem}</img>
                <p>{this.props.produto.quantidade}x</p>
                <p>{this.props.produto.nome}</p>
                <button>Remover</button>


            </ItemCarrinho>
        )
    }
}