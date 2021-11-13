import styled from "styled-components"

const Paragrafo = styled.div`
font-family: 'Shippori Antique B1', sans-serif;
color: solid white;

`

const ContainerFiltros = styled.div`
width: 250px;
padding: 10px;
/* border: 5px solid red; */
border-right: 5px white solid;
padding: 20px;
 
`

const Titulo = styled.h1`
font-family: 'Shippori Antique B1', sans-serif;
font-size: 20px;
font-weight: 600;
color: solid white;

`

const Input = styled.input`
width: 100%;
padding: 12px 20px;
margin: 10px 0;
box-sizing: border-box;
/* border: 1px solid #555;   */
border: 4px groove white;
box-shadow: gray 3px 4px 10px; 

`
const Search = styled.div`
font-size: 15px;
display: inline-block;
vertical-align: bottom;
margin-bottom:20px;

`

export { Paragrafo, ContainerFiltros, Titulo, Input, Search }