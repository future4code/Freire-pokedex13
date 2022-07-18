import React from "react"
import {useNavigate, useEffect} from 'react-router-dom'
import {goToHome} from '../coordinator/coordinator'

export function DetailsPage() {
    const navigate = useNavigate()


    return(
        <div>
            Detalhes
            <button onClick={() => goToHome(navigate)}>todos pokemons</button>
        </div>
    )

    
}

