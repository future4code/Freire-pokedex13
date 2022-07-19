import React from "react"
import { useNavigate, useEffect } from 'react-router-dom'
import { goToDetailsPage, goToHome } from "../coordinator/coordinator"
import styled, { createGlobalStyle } from "styled-components"
import Logo from '../assets/logo.png'
import Poke from '../assets/poke.png'
import Pokemon from '../assets/pokemon.png'

const GlobalStyle = createGlobalStyle`
margin: 0;
padding: 0;
`

const Tela = styled.div`
display: flex;
flex-direction: column;
width: 100vw;
`

const Header = styled.div`
min-height: 16vh;
width: 100%;
display: flex;
justify-content: left;
align-items: center;
a{
    font-size: 24px;
    margin-left: 80px;
}
`

const Imagem = styled.div`
display: flex;
align-items: center;
margin-left: 290px;
`

const Body = styled.div`
width: 100%;
min-height:calc(100vh - 16vh);
background:#5E5E5E;
display: flex;
flex-direction: column;
`

const Titulo = styled.h1`
margin: 60px 40px;
color: white;
`

const Bloco = styled.div`
margin: 70px 40px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`

const Card = styled.div`
width: 440px;
height: 210px;
background-color: #71C3FF;
margin: 30px 0px;
border-radius: 12px;
color: white;
display: flex;
flex-direction: column;

`

const Id = styled.div`
width: 30px;
height: 19px;
margin: 25px 0px 0px 23px;
`

const Name = styled.div`
width: 159px;
height: 39px;
font-size: 32px;
margin: 0px 0px 0px 23px;

`

const Elements = styled.div`
width: 91px;
height: 31px;
background-color: aliceblue;
border-radius: 8px;
margin-left: 23px;
text-align: center;
`

const Botoes = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 56px;
  a{
    margin-left: 23px;
    :hover{
        cursor: pointer;
    }
  }
  button{
    width: 146px;
    height: 38px;
    border-radius: 8px;
    margin-right: 22px;
    background-color:#FF6262;
    opacity: 1;
    border: 0;
    :hover{
        cursor: pointer;
    }
  }
`

const Pokebola = styled.div`
position: relative;
display: inline;
top: -198px;
right: -190px;
width: 0px;
opacity: calc(1 - 0.17);
`

const Pokemons = styled.div`
position: relative;
top: -471px;
right: -240px;
width: 0px;
`

const cardPoke = () => {
    return <Card>
        <Id>#id</Id>
        <Name><b>Nome</b></Name>
        <Elements>teste</Elements>
        <Botoes>
            <div><a href='/details'><u>Detalhes</u></a></div>
            <div><button>Excluir</button></div>
        </Botoes>
        <Pokebola>
            <img src={Poke} />
        </Pokebola>
        <Pokemons>
            <img src={Pokemon} />
        </Pokemons>
    </Card>

}

export function Pokedex() {
    const navigate = useNavigate()

    return (
        <div>
            <Tela>
                <GlobalStyle />
                <Header>
                    <div>
                        <a href="/">{"<"} Todos Pokémons</a>
                    </div>
                    <Imagem>
                        <img src={Logo} />
                    </Imagem>
                </Header>
                <Body>
                    <Titulo>Todos Pokémons</Titulo>
                    <Bloco>
                        {cardPoke()}
                        {cardPoke()}
                        {cardPoke()}
                        {cardPoke()}
                        {cardPoke()}
                        {cardPoke()}
                        {cardPoke()}
                        {cardPoke()}
                        {cardPoke()}
                        {cardPoke()}
                        {cardPoke()}
                        {cardPoke()}

                    </Bloco>
                </Body>
            </Tela>
        </div>
    )


}

