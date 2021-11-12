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
            <button>Adicionar ao carrinho</button>
        </Card>
    )
}

export default Post;
