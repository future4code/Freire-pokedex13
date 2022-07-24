import PokeBg from '../assets/poke.png'
import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle2 = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

export const HeaderContainer = styled.header`
    color: black;
    min-height: 16vh;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
`
export const Imagem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const BotaoGoToHome = styled.span` 
    font-size: 24px;
    font-weight: 700;
    text-decoration: underline;
`

export const BotaoExcluir = styled.button` 
    height: 57px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
    background-color: #FF6262;
    color: white;
    border-radius: 8px;
    border: none;
    font-size: 16px;
    font-weight: bold;
    &:hover {
        cursor: pointer;
        background-color: #f4625b;
    }
`

export const BotaoAdicionar = styled.button` 
    height: 57px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
    background-color: green;
    color: white;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    &:hover {
        cursor: pointer;
        background-color: #33f353;
    }
`

export const MainContainer = styled.main` 
    width: 100%;
    min-height: 84vh;
    background-color: #5E5E5E;
`

export const TituloPagina = styled.h2` 
    font-size: 48px;
    font-weight: 700;
    padding: 3.5rem 0 2.5rem 3.5rem;
    color: white;
`

export const DetalhesSection = styled.section` 
    margin: 0 1.563rem;
    background: url(${PokeBg}), #729F92;
    background-repeat: no-repeat;
    background-size: 50% 100%, cover;
    background-position: right;
    width: calc(100% - 3.126rem);
    min-height: 42rem;
    border-radius: 37.89px;
    box-shadow: 0px 3px 5px black;
    padding: 1.625rem 2.75rem;
    display: flex;
    flex-wrap: wrap-reverse;
    row-gap: 2.3rem;
    justify-content: center;
`

export const DetalhesSectionDivision = styled.div` 
    display: flex;
    height: calc(42rem - 3.25rem);
    width: 100%;
    max-width: 650px;
    justify-content: space-between;
`

export const ImagensContainer = styled.section` 
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
`
export const ImagensContainerMenor = styled.div` 
    width: 282px;
    height: 282px;
    background-color: white;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ImagemElemento = styled.img` 
    width: 275px;
    height: 275px;
`

export const StatsSection = styled.section` 
    margin-left: 2.85rem;
    height: 100%;
    min-width: 320px;
    background-color: white;
    border-radius: 8px;
    padding: 1.15rem;
`

export const TitleStatsSection = styled.h2`
    font-size: 1.5rem;
`
export const StatTotalContainer = styled.div` 
    display: grid;
    grid-template-columns: 1fr 1fr 3fr;
    align-items: center;
    justify-content: center;
    margin: 0.5rem 0;
    padding: 0 0.4rem;
    text-align: center;
    font-weight: bold;
`

export const NameMovesContainer = styled.section`
    margin-left: 2.85rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width: 1366px) {
        margin-left: 0;
    }
`

export const MovesSection = styled.section`
    padding: 1.1rem;
    height: 453px;
    min-width: 292px;
    background-color: white;
    border-radius: 8px;
`

export const MovesLista = styled.ul` 
    list-style-type: none;
`

export const MovesListaItem = styled.li` 
    margin: 0.5rem;
    padding: 10px;
    border-radius: 12px;
    border: 1px dashed #d8d8d8;
    font-size: 16px;
    background-color: #ECECEC;
    width: fit-content;
`

export const CardPequeno = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
`
export const Id = styled.div`
    width: 30px;
    font-size: 16px;
`
export const Name = styled.div`
    min-width: 159px;
    font-size: 45px;
    &:first-letter {
        text-transform: uppercase;
    }
`

export const ImagemContainer = styled.div`
    max-width: 292px;
    @media screen and (max-width: 1366px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const PokemonImagem = styled.img`
    width: 100%;
    width: 292px;
    height: 375px;
    position: relative;
    bottom: 14rem;
    @media screen and (max-width: 1366px) {
        position: initial;
        bottom: 0;
        margin-left: 1rem;
    }
`