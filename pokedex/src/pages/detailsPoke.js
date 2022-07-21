import React, { useState, useContext, useEffect } from "react"
import {useNavigate, useParams} from 'react-router-dom'

import {goToHome} from '../coordinator/coordinator'
import Logo from '../assets/logo.png'
import { PokeContext } from "../context/PokeContext"
import { CapturarSoltar } from "../components/CapturarSoltar"
import DetailsStatComponent from "../components/DetailsStatComponent"

import {GlobalStyle2, HeaderContainer, MainContainer, Imagem, BotaoGoToHome, TituloPagina, DetalhesSection, ImagensContainer, ImagensContainerMenor, ImagemElemento, StatsSection, MovesSection, CardPequeno, Id, Name, BotaoUm, BotaoDois, BotaoExcluir, TitleStatsSection, StatTotalContainer} from "./detailsPokeStyled"

export function DetailsPage() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [isCapturando, setIsCapturando] = useState(false)
    const {GetPokemonDetails, detalhesPokemon} = useContext(PokeContext)
    const statList = detalhesPokemon?.stats
    let totalStatsValue = 0

    //renderiza o car de captura ou soltar, depois de dois segundos apaga o card
    const handleCaptura = () => {
        setIsCapturando(true)
        setTimeout(() => {
            setIsCapturando(false)
        }, 2000)
    }

    const listaDeStatusJsx = statList?.map((status, index) => {
        totalStatsValue += status.base_stat
        return(
            <DetailsStatComponent 
                statName={status.stat.name}
                statValue={status.base_stat}
                key={index}
            />
        )
    })

    useEffect(() => {
        GetPokemonDetails()
    }, [])

    return(
        <div>
            <GlobalStyle2 />
            <HeaderContainer>
                <BotaoGoToHome onClick={() => goToHome(navigate)}>Todos pokemons</BotaoGoToHome>
                <Imagem>
                    <img src={Logo} alt='logo pokedex'/>
                </Imagem>
                <BotaoExcluir onClick={() => handleCaptura()}>Excluir do Pokédex</BotaoExcluir>
            </HeaderContainer>

            <MainContainer>
                <TituloPagina>Detalhes</TituloPagina>
                <DetalhesSection>
                    {/* imagens do pokemon de frente e costas */}
                    <ImagensContainer>
                        <ImagensContainerMenor>
                            <ImagemElemento src={detalhesPokemon?.sprites?.front_default} />
                        </ImagensContainerMenor>
                        <ImagensContainerMenor>
                            <ImagemElemento src={detalhesPokemon?.sprites?.back_default} />
                        </ImagensContainerMenor>
                    </ImagensContainer>

                    {/* seção de status */}
                    <StatsSection>
                        <TitleStatsSection>Base stats</TitleStatsSection>
                        {listaDeStatusJsx}
                        <StatTotalContainer>
                            <span>Total:</span>
                            <span>{totalStatsValue}</span>
                        </StatTotalContainer>
                    </StatsSection>

                    {/* Excluir pokemon da pokedex e mostra o aviso na tela */}
                    {isCapturando && <CapturarSoltar acao={'soltar'} />}

                    {/* seção de moves */}
                    <MovesSection>
                        <h2>Moves:</h2>
                    </MovesSection>
                    
                    <CardPequeno>
                        <Id>#01</Id>
                        <Name>Bulbasaur</Name>
                        <BotaoUm></BotaoUm>
                        <BotaoDois></BotaoDois>
                    </CardPequeno>

                    <div>
                        <img src={detalhesPokemon?.sprites?.other?.home?.front_default} alt='Imagen default do pokemon' />
                    </div>
                </DetalhesSection>
            </MainContainer>
        </div>
    )
}

