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
import { Tela, GlobalStyle, Header, Imagem, Body, Titulo, Bloco, DivExemp } from './pokedexStyled'


export function Pokedex() {

    const navigate = useNavigate()

    // const [pokeList, setPokeList] = useState([])
    /* const [pokemons, setPokemons] = useState([])
    const [name, setName] = useState([])
    const [nr, setNr] = useState([]) */

    const { GetPokemonDetails, getAllPokemonColors, setPokedexList, pokedexList, pokeList, pokeListDetails, coresPokemon} = useContext(PokeContext)


    useEffect(() => {
        // getPokemon();
    }, []);

   /*  const handleCaptura = (event) => {
        setPokedexList(prevPokedexList => [...prevPokedexList, event.target.id])
        setIsCapturando(true)
        setTimeout(() => {
            setIsCapturando(false)
        }, 2000)
    } */

    let listaPokemonJsx
    // console.log(listaPokemonJsx)
    if(pokeListDetails?.length >= 20) {
        let count = 0
        listaPokemonJsx = pokeListDetails?.map(pokemon => {

          /*   pokedexList?.map(pokemondexId => {
                console.log(pokedexList)
                if(pokemon.id === Number(pokemondexId)){
                    console.log(pokemon?.id)
                    console.log("entrei",pokemondexId)
                    console.log(pokemon?.name)
                    console.log(pokemon?.sprites)
                    console.log(pokemon?.types)
                    return (
                        <CardPoke
                            id={pokemon?.id}
                            nome={pokemon?.name}
                            key={pokemon?.id}
                            imagem={pokemon?.sprites?.other?.home?.front_default}
                            tipos={pokemon?.types}
                            detalhes={() => GetPokemonDetails(pokemon?.id)}
                            // capturar={handleCaptura}
                        />
                    )
             }}) */

             console.log(pokedexList)
            
             if(count < 21) {
                 count++ 
                 
                 pokedexList?.map(pokemondexId => {
                    console.log(pokedexList)
                    if(pokemon.id === Number(pokemondexId)){
                        console.log(pokemon?.id)
                        console.log("entrei",pokemondexId)
                        console.log(pokemon?.name)
                        console.log(pokemon?.sprites)
                        console.log(pokemon?.types)
                        return (
                            <CardPoke
                                id={pokemon?.id}
                                nome={pokemon?.name}
                                key={pokemon?.id}
                                imagem={pokemon?.sprites?.other?.home?.front_default}
                                tipos={pokemon?.types}
                                detalhes={() => GetPokemonDetails(pokemon?.id)}
                                // capturar={handleCaptura}
                            />
                        )
                 }})
               
            } else {
                return <DivExemp key={count+15}></DivExemp>
            }
        })
    } else {
        console.log("saindo")
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
                    {listaPokemonJsx}
                    </Bloco>
                </Body>
            </Tela>
    )

}

