import React from "react"
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from "react"
import { goToDetailsPage, goToHome } from "../coordinator/coordinator"
import Logo from '../assets/logo.png'
import Poke from '../assets/poke.png'
import Pokemon from '../assets/pokemon.png'
import { CardPoke } from "../components/CardPoke"
import { Tela, GlobalStyle, Header, Imagem, Body, Titulo, Bloco } from './pokedexStyled'


export function Pokedex() {

    const navigate = useNavigate()

    const [pokeList, setPokeList] = useState([])
    const [pokemons, setPokemons] = useState([])
    const [name, setName] = useState([])
    const [nr, setNr] = useState([])


    useEffect(() => {
        getPokemon();
    }, []);

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
                    <Titulo>Meus Pokémons</Titulo>
                    <Bloco>
                        <CardPoke />
                        <CardPoke />
                        <CardPoke />
                        <CardPoke />
                        <CardPoke />

                    </Bloco>
                </Body>
            </Tela>
        </div>
    )


}

