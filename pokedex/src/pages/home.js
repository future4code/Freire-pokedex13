import React, { useContext, useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { goToDetailsPage, goToPokedex } from "../coordinator/coordinator"
import styled, { createGlobalStyle } from 'styled-components'
import Logo from '../assets/logo.png'
import Poke from '../assets/poke.png'
import Pokemon from '../assets/pokemon.png'
import { CardPoke } from "../components/CardPoke"
import { PokeContext } from "../context/PokeContext"
import axios from 'axios'
import { BlocoGrass, BlocoPoison, BlocoIce } from "./cardTypeStyled"
import Poison from "../assets/poison.png"


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
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

export function Home() {
    const navigate = useNavigate()

    const {getPokemon, getAllPokemonDetails, getAllPokemonColors, pokeListDetails, coresPokemon} = useContext(PokeContext)

    useEffect(() => {
        getPokemon()
        getAllPokemonDetails()
    }, [])
    console.log('teste')
    let listaPokemonJsx
    if(pokeListDetails?.length === 20) {
        listaPokemonJsx =  pokeListDetails?.map(pokemon => {   
            return (
                <CardPoke
                    id={pokemon?.id}
                    nome={pokemon?.name}
                    key={pokemon?.id}
                    imagem={pokemon?.sprites?.other?.home?.front_default}
                    tipos={pokemon?.types}
                />
            )
        })
    }

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
                    {listaPokemonJsx}
                </Bloco>               
            </Body>
        </Tela>
    )


}

