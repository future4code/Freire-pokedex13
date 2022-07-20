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
    height: 42rem;
    border-radius: 37.89px;
    box-shadow: 0px 2px 5px black;
    padding: 1.625rem 2.75rem;
    display: flex;
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
    width: 150px;
    height: 150px;
`

export const StatsSection = styled.section` 
    margin-left: 2.85rem;
    height: 100%;
    width: 343px;
    background-color: white;
    border-radius: 8px;
`
export const MovesSection = styled.section`
    margin-left: 2.85rem;
    margin-top: 190px;
    height: 427px;
    width: 343px;
    background-color: white;
    border-radius: 8px;
    left: 771px;
    top: 184px;
`
export const CardPequeno = styled.div`
    margin-left: -343px;
    height: 210px;
    color: white;
    display: flex;
    flex-direction: column;
`
export const Id = styled.div`
width: 30px;
height: 19px;
margin: -5px 0px 0px -3px;
font-size: 16px;
/* margin: 10px 0px 0px 23px; */
`
export const Name = styled.div`
    width: 159px;
    height: 39px;
    font-size: 45px;
    margin: 0px 0px 0px -3px;
`
export const BotaoUm = styled.div`
    width: 100px;
    height: 30px;
    background-color: aliceblue;
    border-radius: 8px;
    border: dashed;
    margin-left: 1px;
    margin-top: 25px;
    text-align: center;
`
export const BotaoDois = styled.div`
    width: 100px;
    height: 30px;
    background-color: aliceblue;
    border-radius: 8px;
    border: dashed;
    margin-left: 110px;
    margin-top: -30px;
    text-align: center;
`