import styled from 'styled-components'
import React from 'react';
import { CarrinhoItem } from './CarrinhoItem';

const StyledContainerCarrinho = styled.div`
  border: 1px solid black;
  padding: 8px;
  display: grid;
  gap: 8px;
  justify-content: end;
  justify-items: center;
`

const CardListaCarrinho = styled.div`
   display: grid;
   gap: 8px;
`

export default class Carrinho extends React.Component {
    //     valorTotalCarrinho = () =>{
    //         let valorTotal = 0
    //         for (let produto of this.props.produtosCarrinho) {
    //             valorTotal += produto.preco * produto.quantidade
    //         }
    //         return valorTotal
    //         }

    render() {
        return (
            <StyledContainerCarrinho>
                <h3>Carrinho:</h3>
                <p>Valor total: R${this.valorTotalCarrinho}</p>
            <CardListaCarrinho>
                
            </CardListaCarrinho>
            



            </StyledContainerCarrinho>

        )
    }
}