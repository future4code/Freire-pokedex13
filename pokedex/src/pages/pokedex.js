import React from "react"
import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import axios from "react"
import { goToDetailsPage, goToHome } from "../coordinator/coordinator"
import Logo from '../assets/logo.png'
import Poke from '../assets/poke.png'
import Pokemon from '../assets/pokemon.png'
import { CardPoke } from "../components/CardPoke"
import { PokeContext } from "../context/PokeContext"
import { CapturarSoltar } from "../components/CapturarSoltar"
import { Tela, GlobalStyle, Header, Imagem, Body, Titulo, Bloco, DivExemp } from './pokedexStyled'


export function Pokedex() {

    const navigate = useNavigate()
    const [isCapturando, setIsCapturando] = useState(false)

    // const [pokeList, setPokeList] = useState([])
    /* const [pokemons, setPokemons] = useState([])
    const [name, setName] = useState([])
    const [nr, setNr] = useState([]) */
    let pokedexFromLocal = JSON.parse(localStorage.getItem('pokedex'))

    const { GetPokemonDetails, getAllPokemonColors, setPokedexList, pokedexList, pokeList, pokeListDetails, coresPokemon} = useContext(PokeContext)


    useEffect(() => {
        // getPokemon();
        pokedexFromLocal = JSON.parse(localStorage.getItem('pokedex'))
    }, [pokedexList]);

    const handleExcluir = (e) => {
        const localPokedex = JSON.parse(localStorage.getItem('pokedex'))
        let localPokedexAtualiza

        //A pokedex é filtrada e mantém apenas os item com id diferente
        localPokedexAtualiza = localPokedex.filter(idPokedex => e.target.id !== idPokedex)

        localStorage.setItem('pokedex', JSON.stringify(localPokedexAtualiza))
        setPokedexList(localPokedexAtualiza)
        setIsCapturando(true)
        setTimeout(() => {
            setIsCapturando(false)
        }, 2000)
    }

    let listaPokemonPokedexJsx
    if(pokedexFromLocal?.length > 0) {
        listaPokemonPokedexJsx = pokedexFromLocal.map(idPokemonPokex => {
            for(let i = 0; i < pokeListDetails?.length; i++) {
                if(Number(idPokemonPokex) === pokeListDetails[i]?.id) {
                    return (
                        <CardPoke
                            id={pokeListDetails[i]?.id}
                            nome={pokeListDetails[i]?.name}
                            key={pokeListDetails[i]?.id}
                            imagem={pokeListDetails[i]?.sprites?.other?.home?.front_default}
                            tipos={pokeListDetails[i]?.types}
                            paginaAtual={'pokedex'}
                            detalhes={() => GetPokemonDetails(pokeListDetails[i]?.id)}
                            capturar={handleExcluir}
                        />
                    )
                }
            }
        })
    }

    return (
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
                    <Titulo>Meus Pokémons</Titulo>
                    <Bloco>
                        {listaPokemonPokedexJsx}
                    </Bloco>
                    {isCapturando && <CapturarSoltar acao={'soltar'} />}
                </Body>
            </Tela>
    )

}

