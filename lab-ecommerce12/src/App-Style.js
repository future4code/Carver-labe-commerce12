import styled from "styled-components"


const DivPai = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px;
`

const DivPosts = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    border: 2px red solid;
    width: 700px;
    height: auto;
`

const Card = styled.div`
border: 1px solid black;
width: 200px;
height: 300px;
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

const TextosCard = styled.div`
    margin: 15px 10px 10px;
`

export { DivPai, Card, TextosCard, DivPosts }