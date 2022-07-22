import React, { useState, useContext, useEffect } from "react"
import {useNavigate, useParams} from 'react-router-dom'
import styled from "styled-components"

import {goToHome} from '../coordinator/coordinator'
import Logo from '../assets/logo.png'
import { PokeContext } from "../context/PokeContext"
import { CapturarSoltar } from "../components/CapturarSoltar"
import DetailsStatComponent from "../components/DetailsStatComponent"

import {GlobalStyle2, HeaderContainer, MainContainer, Imagem, BotaoGoToHome, TituloPagina, DetalhesSection, ImagensContainer, ImagensContainerMenor, ImagemElemento, StatsSection, MovesSection, CardPequeno, Id, Name, BotaoUm, BotaoDois, BotaoExcluir, TitleStatsSection, StatTotalContainer, NameMovesContainer, ImagemContainer, PokemonImagem, MovesLista, MovesListaItem, DetalhesSectionDivision} from "./detailsPokeStyled"

export function DetailsPage() {
    const navigate = useNavigate()
    const [isCapturando, setIsCapturando] = useState(false)
    const {GetPokemonDetails, getAllPokemonColors, detalhesPokemon, coresPokemon} = useContext(PokeContext)
    
    const { id } = useParams()
    const statList = detalhesPokemon?.stats
    const moveList = detalhesPokemon?.moves?.slice(0, 7)
    const pokemonSpecies = detalhesPokemon?.species?.name
    let bgCardPokemonColor = ''
    let totalStatsValue = 0

    //Identificar a cor do pokemon pela espécie e cria um styled para definir a cor do card de detalhes
    if(coresPokemon.length >= 10) {
        coresPokemon.map(cor => {
            let speciesListColor = cor.pokemon_species
            speciesListColor.map(specie => {
                if(specie.name === pokemonSpecies) {
                    bgCardPokemonColor = cor.name
                }
            })
        })
    }
    // filtra algumas cores que não contrastavam com a cor das letras
    if(bgCardPokemonColor === 'white') {
        bgCardPokemonColor =   'black'
    } else if(bgCardPokemonColor === 'yellow') {
        bgCardPokemonColor = '#666000'
    } else if(bgCardPokemonColor === 'pink') {
        bgCardPokemonColor = '#882464'
    } else if(bgCardPokemonColor === 'green') {
        bgCardPokemonColor = '#729F92'
    }

    const DetalhesSectioAtualizado = styled(DetalhesSection)`
        background-color: ${bgCardPokemonColor};
    `

    //renderiza o car de captura ou soltar, depois de dois segundos apaga o card
    const handleCaptura = () => {
        setIsCapturando(true)
        setTimeout(() => {
            setIsCapturando(false)
        }, 2000)
    }

    // mapeia a lista de status e a lista de moves
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

    const ListaDeMovesJsx = moveList?.map((move, index) => {
        return (
            <MovesListaItem key={index}>
                {move.move.name.toUpperCase()}
            </MovesListaItem>
        )
    })

    useEffect(() => {
        GetPokemonDetails()
        getAllPokemonColors()
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
                <DetalhesSectioAtualizado>
                    {/* imagens do pokemon de frente e costas */}
                    <DetalhesSectionDivision>
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
                    </DetalhesSectionDivision>

                    {/* Excluir pokemon da pokedex e mostra o aviso na tela */}
                    {isCapturando && <CapturarSoltar acao={'soltar'} />}


                    <DetalhesSectionDivision>
                        <NameMovesContainer>
                            <CardPequeno>
                                <Id>#{detalhesPokemon?.id}</Id>
                                <Name>{detalhesPokemon?.name}</Name>
                                <BotaoUm></BotaoUm>
                                <BotaoDois></BotaoDois>
                            </CardPequeno>
                            <MovesSection>
                                <h2>Moves:</h2>
                                <MovesLista>
                                    {ListaDeMovesJsx}
                                </MovesLista>
                            </MovesSection>
                        </NameMovesContainer>
                        <ImagemContainer>
                            <PokemonImagem src={detalhesPokemon?.sprites?.other?.home?.front_default} alt='Imagen default do pokemon' />
                        </ImagemContainer>
                    </DetalhesSectionDivision>
                    {/* seção de moves */}
                </DetalhesSectioAtualizado>
            </MainContainer>
        </div>
    )
}

