import React from 'react'
import styled from 'styled-components'

const Div = styled.div 
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


const Div2 = styled.div
    margin: 15px 10px 10px;


class App extends React.Component {
  state = {
    listaDePosts: [
      {
        id: Math.random(),
        imagem: "https://picsum.photos/250/230",
        nome: "Post 1",
        preco: 300
      },
      {
        id: Math.random(),
        imagem: "https://picsum.photos/250/230?1",
        nome: "Post 2",
        preco: 1000
      },
    ]
  }

  render() {
    return(
    <div>

      {this.state.listaDePosts.map((post) =>{
        return(
          <Div>
            <img src={post.imagem}/>
            <Div2>
            <p>{post.nome}</p>
            <p>R${Number(post.preco)}</p>
            </Div2>
            <button>Adicionar ao carrinho</button>
          </Div>
        )
      })}

    </div>

    );
  }
}

export default App;