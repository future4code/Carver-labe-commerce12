import React from 'react'
import styled from 'styled-components';

const ItemContainer = styled.div
`
  display: grid;
  grid-auto-flow: column;
  gap: 4px;
  align-items: center;
`


export class CarrinhoItem extends React.Component {
  render() {
    return <ItemContainer>
      <p>{this.props.itemCarrinho.quantidade}x</p>
      <p>{this.props.itemCarrinho.nome}</p>
      <button 
        onClick={() => 
            this.props.removerDoCarrinho(this.props.itemCarrinho.id)}
      >
        Remover
      </button>
    </ItemContainer>
  }
}