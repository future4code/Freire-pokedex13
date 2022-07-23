import React from "react"
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from "react"
import { goToDetailsPage, goToHome } from "../coordinator/coordinator"
import Logo from '../assets/logo.png'
import Poke from '../assets/poke.png'
import Pokemon from '../assets/pokemon.png'
import { CardPoke } from "../components/CardPoke"
import {Tela, GlobalStyle, Header, Imagem, Body, Titulo, Bloco} from './pokedexStyled'


export function Pokedex() {

    const navigate = useNavigate()

    const [pokeList, setPokeList] = useState([])
    const [pokemons, setPokemons] = useState([])
    const [name, setName] = useState([])
    const [nr, setNr] = useState([])

    const getPokemon = () => {
         axios
             .get(
                 "https://pokeapi.co/api/v2/pokemon/"
             )
             .then((res) => {
                 // console.log(res.data)
                 setPokeList(res.data.results)
                 console.log(res.data.results)
             })
             .catch((error) => {
                 console.log(error.response)
             })
     }

        useEffect(() => {
            getPokemon();
        }, []);

        const mapearPokemon = pokeList.map((pokemon) => {
            return (pokemon)
        }) 


      /*  const PokeIndiv = () 
           
                <PokeIndiv name={pokemon.name} url={pokemon.url} /> */ 







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

