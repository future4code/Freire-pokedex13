import { PokeContext } from "../context/PokeContext";
import { useState } from "react";
import axios from 'axios'


export const PokeProvider = (props) => {
    // se necessário mudar os nomes dos estados e requisições
    const [pokeList, setPokeList] = useState([])
    const [pokeListDetails, setPokeListDetails] = useState([])
    const [detalhesPokemon, setDetalhesPokemon] = useState({})
    const [coresPokemon, setCoresPokemon] = useState([])

    //requisições
    const getPokemon = () => {
        axios
            .get(
                "https://pokeapi.co/api/v2/pokemon/"
            )
            .then((res) => {
                // console.log(res.data)
                setPokeList(res?.data?.results?.map(pokemon => {
                    return pokemon.name
                }))
            })
            .catch((error) => {
                console.log(error.response)
            })
    }

    const getAllPokemonDetails = () => {
        pokeList?.map(pokemon => {
            if(pokeListDetails.length < 21) {
                axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
                .then(resp => {
                    setPokeListDetails(prevPokeListDetails => [...prevPokeListDetails, resp.data])
                    return resp.data
                })
                .catch(err => {
                    console.log(err)
                    return err.response
                })
            }
        })
    }
    
    //pega um pokemon específico, vai receber o id por parâmetro na página de detalhes, ou onde for chamada
    const GetPokemonDetails = (idPokemon) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}/`)
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
    
    return <PokeContext.Provider value={{getPokemon, getAllPokemonDetails, GetPokemonDetails, getAllPokemonColors, pokeList, pokeListDetails, detalhesPokemon, coresPokemon}}>
        {props.children}
    </PokeContext.Provider>
}

