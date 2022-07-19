import React from "react"
import { useNavigate, useEffect } from 'react-router-dom'
import { goToDetailsPage, goToPokedex } from "../coordinator/coordinator"
import styled, { createGlobalStyle } from 'styled-components'
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
color: black;
min-height: 16vh;
width: 100%;
display: flex;
justify-content: right;
align-items: center;
`
const Imagem = styled.div`
display: flex;
align-items: center;
margin-right: 18vw;
`

const Pokedex = styled.button`
width: 287px;
height: 74px;
border-radius: 8px;
padding: 4px 10px;
background-color: #33A4F5;
border: 0;
margin-right: 40px;
font-size: xx-large;
color: white;
:hover{
    cursor: pointer;
}
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
background-color: #729F92;
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
    background-color: #FFFFFF;
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
            <div><button>Capturar!</button></div>
        </Botoes>
        <Pokebola>
            <img src={Poke} />
        </Pokebola>
        <Pokemons>
            <img src={Pokemon} />
        </Pokemons>
    </Card>
}

export function Home() {
    const navigate = useNavigate()

    return (
        <Tela>
            <GlobalStyle />
            <Header>
                <Imagem>
                    <img src={Logo} />
                </Imagem>
                <Pokedex onClick={() => goToPokedex(navigate)}>Pokédex</Pokedex>
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
    )


}

