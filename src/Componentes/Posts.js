import React from "react"
import styled from "styled-components"

const Div = styled.div `
    border: 1px solid black;
    width: 250px;
    height: 340px;
    display: flex;
    flex-direction: column;

    p{
        font-size: 15px;
        margin: 5px 0;
    }

    button{
       align-self : center;
    }
`

const Div2 = styled.div`
    margin: 15px 10px 10px;
`


const Posts = (props) =>{
    return(
        <Div>
            <img src={props.imagem}/>
            <Div2>
            <p>{props.nome}</p>
            <p>R${Number(props.preco)}</p>
            </Div2>
            <button>Adicionar ao carrinho</button>
            
        </Div>
    )
}

export default Posts;