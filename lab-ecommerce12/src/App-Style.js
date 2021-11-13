import styled from "styled-components"


const DivPai = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px;
    color: black;
    font-weight: bold;
`

const ContainerPosts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 10px;
    padding: 3px;
    border-right: 5px white solid;
    width: 750px;
    height: auto;
    font-family: 'Shippori Antique B1', sans-serif;
    
`

const DivOrdenacao = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 10px;
`

const GradeDePosts = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 50px;

`

const Carrinho = styled.p`
font-size: 15px;
text-align: justify;

`

export {DivPai, ContainerPosts, DivOrdenacao, GradeDePosts, Carrinho }