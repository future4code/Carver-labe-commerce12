import styled from "styled-components"


const DivPai = styled.div`
    display: flex;
    margin: 0px
`
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


export {DivPai,Div,Div2}