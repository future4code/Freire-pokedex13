import React from "react"
import {useNavigate, useEffect} from 'react-router-dom'
import {goToHome} from '../coordinator/coordinator'
import styled from "styled-components"

const HeaderContainer = styled.header` 
    min-height: 16vh;
    width: 100%;
    background-color: gray;
`

const MainContainer = styled.main` 
    width: 100%;
    min-height: 84vh;
    background-color: yellow;
`

const TituloPagina = styled.h2` 
    font-size: 48px;
    font-weight: 700;
    font-family: 'Poppins';
    margin-top : 2rem;
`

export function DetailsPage() {
    const navigate = useNavigate()


    return(
        <div>
            <HeaderContainer>
                <button onClick={() => goToHome(navigate)}>todos pokemons</button>
            </HeaderContainer>
            <MainContainer>
                <TituloPagina>Detalhes</TituloPagina>

            </MainContainer>
        </div>
    )
}

