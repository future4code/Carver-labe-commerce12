import React from "react"
import {Card, TextosCard} from '../App-Style'


const Post = (props) => {
    return (
        <Card>
            <img src={props.imagem} />
            <TextosCard>
                <p>{props.nome}</p>
                <p>R${Number(props.preco)}</p>
            </TextosCard>
            <button onClick={this.props.adicionarProduto} key={this.props.id}>
          Adicionar ao Carrinho
        </button>
        </Card>
    )
}

export default Post;
