import React, { useState } from "react"
import {useNavigate} from 'react-router-dom'
import {goToHome} from '../coordinator/coordinator'
import Logo from '../assets/logo.png'
import ExemploPokemon from '../assets/exemploPokemon.png'
import { CapturarSoltar } from "../components/CapturarSoltar"
import {GlobalStyle2, HeaderContainer, MainContainer, Imagem, BotaoGoToHome, TituloPagina, DetalhesSection, ImagensContainer, ImagensContainerMenor, ImagemElemento, StatsSection, MovesSection, CardPequeno, Id, Name, BotaoUm, BotaoDois} from "./detailsPokeStyled"

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

