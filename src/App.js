import React from 'react'
import Posts from './Componentes/Posts';
import styled from 'styled-components';

const DivPai = styled.div`
  display: flex;
`

function App() {
  return (
    <DivPai>
      <Posts imagem = "https://picsum.photos/250/230" nome = "Produto 1" preco="200,00"/>
      <Posts imagem = "https://picsum.photos/250/230?1" nome = "Produto 2" preco="500,00"/>
    </DivPai>
  )
}

export default App;
