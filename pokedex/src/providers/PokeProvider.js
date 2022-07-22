import { PokeContext } from "../context/PokeContext";
import { useState } from "react";
import axios from 'axios'


export const PokeProvider = (props) => {
    const [detalhesPokemon, setDetalhesPokemon] = useState({})
    const [coresPokemon, setCoresPokemon] = useState([])

    //requisições
    const GetPokemonDetails = (idPokemon) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/11/`)
        .then(resp => {
            setDetalhesPokemon(resp.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const GetPokemonColors = (id) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon-color/${id}`)
        .then(resp => {
            setCoresPokemon(prevCoresPokemon => [...prevCoresPokemon, resp.data])
        })
        .catch()
    }

    const getAllPokemonColors = () => {
        for (let index = 1; index <= 10; index++) {
            GetPokemonColors(index)
        }
    }
    
    return <PokeContext.Provider value={{GetPokemonDetails, getAllPokemonColors, detalhesPokemon, coresPokemon}}>
        {props.children}
    </PokeContext.Provider>
}

