import React, { useState } from "react"
import {useNavigate} from 'react-router-dom'
import {goToHome} from '../coordinator/coordinator'
import styled, { createGlobalStyle } from "styled-components"
import Logo from '../assets/logo.png'
import PokeBg from '../assets/poke.png'
import ExemploPokemon from '../assets/exemploPokemon.png'
import { CapturarSoltar } from "../components/CapturarSoltar"

const GlobalStyle2 = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

const HeaderContainer = styled.header`
    color: black;
    min-height: 16vh;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
`
const Imagem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const BotaoGoToHome = styled.span` 
    font-size: 24px;
    font-weight: 700;
    text-decoration: underline;
`

const MainContainer = styled.main` 
    width: 100%;
    min-height: 84vh;
    background-color: #5E5E5E;
`

const TituloPagina = styled.h2` 
    font-size: 48px;
    font-weight: 700;
    padding: 3.5rem 0 2.5rem 3.5rem;
    color: white;
`

const DetalhesSection = styled.section` 
    margin: 0 1.563rem;
    background: url(${PokeBg}), #729F92;
    background-repeat: no-repeat;
    background-size: 50% 100%, cover;
    background-position: right;
    width: calc(100% - 3.126rem);
    height: 42rem;
    border-radius: 37.89px;
    box-shadow: 0px 2px 5px black;
    padding: 1.625rem 2.75rem;
    display: flex;
`

const ImagensContainer = styled.section` 
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
`
const ImagensContainerMenor = styled.div` 
    width: 282px;
    height: 282px;
    background-color: white;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ImagemElemento = styled.img` 
    width: 150px;
    height: 150px;
`

const StatsSection = styled.section` 
    margin-left: 2.85rem;
    height: 100%;
    width: 343px;
    background-color: white;
    border-radius: 8px;
`

export function DetailsPage() {
    const navigate = useNavigate()
    const [isCapturando, setIsCapturando] = useState(false)

    const handleCaptura = () => {
        setIsCapturando(true)
        setTimeout(() => {
            setIsCapturando(false)
        }, 2000)
    }

    return(
        <div>
            <GlobalStyle2 />
            <HeaderContainer>
                <BotaoGoToHome onClick={() => goToHome(navigate)}>{'<'} todos pokemons</BotaoGoToHome>
                <Imagem>
                    <img src={Logo} alt='logo pokedex'/>
                </Imagem>
                <button onClick={() => handleCaptura()}>Excluir</button>
            </HeaderContainer>
            <MainContainer>
                <TituloPagina>Detalhes</TituloPagina>
                <DetalhesSection>
                    <ImagensContainer>
                        <ImagensContainerMenor>
                            <ImagemElemento src={ExemploPokemon} />
                        </ImagensContainerMenor>
                        <ImagensContainerMenor>
                            <ImagemElemento src={ExemploPokemon} />
                        </ImagensContainerMenor>
                    </ImagensContainer>
                    <StatsSection>
                        <h2>Base stats</h2>
                    </StatsSection>
                    {isCapturando && <CapturarSoltar acao={'soltar'} />}
                </DetalhesSection>
            </MainContainer>
        </div>
    )
}

