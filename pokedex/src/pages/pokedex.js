import React from "react"
import { useNavigate, useEffect } from 'react-router-dom'
import { goToDetailsPage, goToHome } from "../coordinator/coordinator"
import styled, { createGlobalStyle } from "styled-components"
import Logo from '../assets/logo.png'
import Poke from '../assets/poke.png'
import Pokemon from '../assets/pokemon.png'
import { CardPoke } from "../components/CardPoke"

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
margin: 70px 30px;
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
align-items: center;
`

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
                       <CardPoke/>
                       <CardPoke/>
                       <CardPoke/>
                       <CardPoke/>
                       <CardPoke/>                     

                    </Bloco>
                </Body>
            </Tela>
        </div>
    )


}

