import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import Poke from '../assets/poke.png'
import { goToDetailsPage } from "../coordinator/coordinator";
import MostraTiposPokemon from "./MostraTiposPokemon";

const Card = styled.div`
    width: 410px;
    height: 210px;
    background: url(${Poke}), #729F92;
    background-repeat: no-repeat;
    background-size: 50% 100%, cover;
    background-position: right;
    margin: 2rem 10px;
    border-radius: 12px;
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    gap: 1rem;
`

const ContainerLeft = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
` 

const Id = styled.div`
    width: 30px;
    height: 19px;
`

const Name = styled.div`
    width: 159px;
    height: 39px;
    font-size: 32px;
    margin-bottom: 0.5rem;
`

const ContainerRight = styled.div` 
    display: flex;
    flex-direction: column;
    height: 100%;
    box-sizing: border-box;
    justify-content: space-between;
`

const Botoes = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    button{
        width: 146px;
        height: 38px;
        border-radius: 8px;
        background-color: #FFFFFF;
        border: 0;
        :hover{
            cursor: pointer;
        }
    }
`

const BotaoExcluir = styled.div` 
    background-color: red;
    width: 100%;
    height: 100%;
    color: white;
    width: 146px;
    height: 38px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    :hover{
        cursor: pointer;
    }
`

const ImagenStyled = styled.img` 
    height: 150px;
    position: relative;
    bottom: 85px;
`

export const CardPoke = (props) => {
    const navigate = useNavigate()
    const [paginaAtual, setPaginaAtual] = useState(props.paginaAtual)

    const handleClickDetalhes = () => {
        props.detalhes()
        goToDetailsPage(navigate, props.id)
    }

    return <Card key={props.id}>
        <ContainerLeft>
            <div>
                <Id>#{props.id}</Id>
                <Name><b>{props.nome}</b></Name>
                <MostraTiposPokemon 
                    listaTipos={props.tipos}
                />
            </div>
            <div onClick={handleClickDetalhes}><u>Detalhes</u></div>
        </ContainerLeft>
        <ContainerRight>
            <ImagenStyled src={props.imagem} />
            <Botoes>
                {paginaAtual === 'home' ? <div><button onClick={props.capturar} id={props.id}>Capturar!</button></div> : <div><BotaoExcluir onClick={props.capturar} id={props.id}>Excluir!</BotaoExcluir></div>}
            </Botoes>
        </ContainerRight>
    </Card>
}