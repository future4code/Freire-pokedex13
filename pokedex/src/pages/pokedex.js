import React from "react"
import {useNavigate, useEffect} from 'react-router-dom'
import { goToDetailsPage, goToHome } from "../coordinator/coordinator"

export function Pokedex() {
    const navigate = useNavigate()

    return(
        <div>
            Pokedex
            <button onClick={() => goToHome(navigate)}>todos os pokemons</button>
            <button onClick={() => goToDetailsPage(navigate)}>detalhes</button>
        </div>
    )

    
}

