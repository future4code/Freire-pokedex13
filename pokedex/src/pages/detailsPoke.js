import React, { useState, useContext, useEffect } from "react"
import {useNavigate, useParams} from 'react-router-dom'
import {goToHome} from '../coordinator/coordinator'
import Logo from '../assets/logo.png'
import { PokeContext } from "../context/PokeContext"
import ExemploPokemon from '../assets/exemploPokemon.png'
import { CapturarSoltar } from "../components/CapturarSoltar"
import {GlobalStyle2, HeaderContainer, MainContainer, Imagem, BotaoGoToHome, TituloPagina, DetalhesSection, ImagensContainer, ImagensContainerMenor, ImagemElemento, StatsSection, MovesSection, CardPequeno, Id, Name, BotaoUm, BotaoDois, BotaoExcluir} from "./detailsPokeStyled"

export function DetailsPage() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [isCapturando, setIsCapturando] = useState(false)
    const {GetPokemonDetails, detalhesPokemon} = useContext(PokeContext)

    const handleCaptura = () => {
        setIsCapturando(true)
        setTimeout(() => {
            setIsCapturando(false)
        }, 2000)
    }

    useEffect(() => {
        GetPokemonDetails()
    }, [])

    return(
        <div>
            <GlobalStyle2 />
            <HeaderContainer>
                <BotaoGoToHome onClick={() => goToHome(navigate)}>{'<'} Todos pokemons</BotaoGoToHome>
                <Imagem>
                    <img src={Logo} alt='logo pokedex'/>
                </Imagem>
                <BotaoExcluir onClick={() => handleCaptura()}>Excluir do Pokédex</BotaoExcluir>
            </HeaderContainer>
            <MainContainer>
                <TituloPagina>Detalhes</TituloPagina>
                <DetalhesSection>
                    <ImagensContainer>
                        <ImagensContainerMenor>
                            <ImagemElemento src={detalhesPokemon?.sprites?.front_default} />
                        </ImagensContainerMenor>
                        <ImagensContainerMenor>
                            <ImagemElemento src={ExemploPokemon} />
                        </ImagensContainerMenor>
                    </ImagensContainer>
                    <StatsSection>
                        <h2>Base stats</h2>
                    </StatsSection>
                    {isCapturando && <CapturarSoltar acao={'soltar'} />}
                    <MovesSection>
                        <h2>Moves:</h2>
                    </MovesSection>
                    <CardPequeno>
                        <Id>#01</Id>
                        <Name>Bulbasaur</Name>
                        <BotaoUm></BotaoUm>
                        <BotaoDois></BotaoDois>
                    </CardPequeno>
                </DetalhesSection>
            </MainContainer>
        </div>
    )
}

