import { PokeContext } from "../context/PokeContext";
import { useState } from "react";
import axios from 'axios'


export const PokeProvider = (props) => {
    // se necessário mudar os nomes dos estados e requisições
    const [detalhesPokemon, setDetalhesPokemon] = useState({})
    const [coresPokemon, setCoresPokemon] = useState([])

    //requisições
    //pega um pokemon específico, vai receber o id por parâmetro na página de detalhes, ou onde for chamada
    const GetPokemonDetails = (idPokemon) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/lugia/`)
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
        .catch(err => {
            console.log(err)
        })
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

