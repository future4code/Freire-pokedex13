import styled, { createGlobalStyle } from "styled-components"
import PokeBg from '../assets/poke.png'


export const GlobalStyle = createGlobalStyle`
margin: 0;
padding: 0;
`

export const Tela = styled.div`
display: flex;
flex-direction: column;
width: 100vw;
`

export const Header = styled.div`
min-height: 16vh;
width: 100%;
display: flex;
justify-content: left;
align-items: center;
a{
    font-size: 24px;
    margin-left: 80px;
}
`

export const Imagem = styled.div`
display: flex;
align-items: center;
margin-left: 290px;
`

export const Body = styled.div`
width: 100%;
min-height:calc(100vh - 16vh);
background:#5E5E5E;
display: flex;
flex-direction: column;
`

export const Titulo = styled.h1`
margin: 60px 40px;
color: white;
`

export const Bloco = styled.div`
margin: 70px 30px;
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
align-items: center;

`
export const DivExemp = styled.div` 
    display: none;
`