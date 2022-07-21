import { PokeContext } from "../context/PokeContext";
import { useState } from "react";
import axios from 'axios'


export const PokeProvider = (props) => {
    const [detalhesPokemon, setDetalhesPokemon] = useState({})

    //requisições
    const GetPokemonDetails = (idPokemon) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/20/`)
        .then(resp => {
            console.log(resp.data)
            setDetalhesPokemon(resp.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return <PokeContext.Provider value={{GetPokemonDetails, detalhesPokemon}}>
        {props.children}
    </PokeContext.Provider>
}

