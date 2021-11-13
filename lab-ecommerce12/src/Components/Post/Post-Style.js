import styled from "styled-components";

const Card = styled.div`
border: 4px groove white;
box-shadow: gray 3px 4px 10px;
width: 200px;
height: 300px;
display: flex;
flex-direction: column;
font-family: 'Shippori Antique B1', sans-serif;

button:hover{
    background: #7BC8F6;
    color: blue;
}

p{
    font-size: 14px;
    margin: 5px 0;
}

button{
   align-self : center;
}

img{
    width: 200px;
    height: 200px;
}
`

const TextosCard = styled.div`
    margin: 5px 10px;
`

export {Card, TextosCard};