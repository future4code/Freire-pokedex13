import { PokeContext } from "../context/PokeContext";
import { useEffect, useState } from "react";
import axios from 'axios'
import useSWR from "swr";

export const PokeProvider = (props) => {
    // se necessário mudar os nomes dos estados e requisições
    const [pokeList, setPokeList] = useState([])
    const [pokeListDetails, setPokeListDetails] = useState([])
    const [detalhesPokemon, setDetalhesPokemon] = useState({})
    const [coresPokemon, setCoresPokemon] = useState([])
    const [pokedexList, setPokedexList] = useState([])

    useEffect(() => {
        setPokedexList(JSON.parse(localStorage.getItem('pokedex')))
    }, [])

    const getAllPokemonDetails = (url) => {
        for(let i = 0; i <= 21; i++){
            axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then(resp => {
                if(pokeListDetails?.length < 22) {
                    setPokeListDetails(prevPokeListDetails => [...prevPokeListDetails, resp?.data])
                    return resp?.data
                }
                // localStorage.setItem("id", resp?.data)
            })
        }
    }

    const fetcher = (url) => {
        axios
            .get(
                url
            )
            .then((res) => {
                // console.log(res.data)
                setPokeList(res?.data?.results?.map(pokemon => {
                    return pokemon?.name
                }))
            })
            getAllPokemonDetails()
    }

    const {data, error} = useSWR(`https://pokeapi.co/api/v2/pokemon/`, fetcher)

    if(!pokeListDetails) {
        return <div>Carregando...</div>
    }

    //pega um pokemon específico, vai receber o id por parâmetro na página de detalhes, ou onde for chamada
    const GetPokemonDetails = (idPokemon) => {
        console.log("esse é o id ", idPokemon)
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
    
    return <PokeContext.Provider value={{ getAllPokemonDetails, GetPokemonDetails, getAllPokemonColors, setPokedexList, pokedexList, pokeList, pokeListDetails, detalhesPokemon, coresPokemon}}>
        {props.children}
    </PokeContext.Provider>
}

