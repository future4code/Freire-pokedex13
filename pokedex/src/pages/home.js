import React from "react"
import {useNavigate, useEffect} from 'react-router-dom'
import { goToDetailsPage, goToPokedex } from "../coordinator/coordinator"

export function Home() {
    const navigate = useNavigate()

    return(
        <div>
            Home/Lista pokemons
            <button onClick={() => goToPokedex(navigate)}>pokedex</button>
            <button onClick={() => goToDetailsPage(navigate)}>detalhes</button>
        </div>
    )

    
}

