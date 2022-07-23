import React, { useContext, useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { goToPokedex } from "../coordinator/coordinator"
import styled, { createGlobalStyle } from 'styled-components'
import Logo from '../assets/logo.png'
import { CardPoke } from "../components/CardPoke"
import { PokeContext } from "../context/PokeContext"
import { CapturarSoltar } from "../components/CapturarSoltar"


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

const DivExemp = styled.div` 
    display: none;
`

export function Home() {
    const navigate = useNavigate()
    const [isCapturando, setIsCapturando] = useState(false)

    const { GetPokemonDetails, getAllPokemonColors, setPokedexList, pokedexList, pokeList, pokeListDetails, coresPokemon} = useContext(PokeContext)

    useEffect(() => {
        // getPokemon()
        // getAllPokemonDetails()
        getAllPokemonColors()
    }, [])

    const handleCaptura = (event) => {
        setPokedexList(prevPokedexList => [...prevPokedexList, event.target.id])
        setIsCapturando(true)
        setTimeout(() => {
            setIsCapturando(false)
        }, 2000)
    }

    let listaPokemonJsx
    if(pokeListDetails?.length >= 20) {
        let count = 0
        listaPokemonJsx = pokeListDetails?.map(pokemon => {
            if(count < 21) {
                count++
                return (
                    <CardPoke
                        id={pokemon?.id}
                        nome={pokemon?.name}
                        key={pokemon?.id}
                        imagem={pokemon?.sprites?.other?.home?.front_default}
                        tipos={pokemon?.types}
                        paginaAtual={'home'}
                        detalhes={() => GetPokemonDetails(pokemon?.id)}
                        capturar={handleCaptura}
                    />
                )
            } else {
                return <DivExemp key={count+15}></DivExemp>
            }
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
                {isCapturando && <CapturarSoltar acao={'capturar'} />}        
            </Body>
        </Tela>
    )
}

