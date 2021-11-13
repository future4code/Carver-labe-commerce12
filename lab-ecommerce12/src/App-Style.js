import styled from "styled-components"


const DivPai = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px;
    background: url("https://ak.picdn.net/shutterstock/videos/6009377/thumb/1.jpg");
    background-repeat: repeat;
    color: white;
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
`

const GradeDePosts = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 50px;

`

export { DivPai, ContainerPosts, DivOrdenacao,GradeDePosts }