import React, { useState } from 'react'
import styled from 'styled-components'

const BgContainer = styled.div` 
    width: 100vw;
    height: 100vh;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    background-color: rgba(94, 94, 94, 0.8);
`

const ContainerMensagem = styled.div` 
    width: 451px;
    height: 222px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const TituloCard = styled.h2` 
    font-size: 48px;
    margin-bottom: 0.5rem;
`

const DescricaoCard = styled.p` 
    font-size: 16px;
    font-weight: bold;
`

export const CapturarSoltar = (props) => {
    const mensagemJsx ={
        titulo: '',
        descricao: ''
    }
    if(props.acao === 'capturar') {
        mensagemJsx.titulo = 'Gotcha!'
        mensagemJsx.descricao = 'O Pokémon foi adicionado a sua Pokédex'
    } else {
        console.log('chogou aqui')
        mensagemJsx.titulo = 'Oh, no!'
        mensagemJsx.descricao = 'O Pokémon foi removido da sua Pokédex'
    }

    return(
        <BgContainer>
            <ContainerMensagem>
                <TituloCard>{mensagemJsx.titulo && mensagemJsx.titulo}</TituloCard>
                <DescricaoCard>{mensagemJsx.descricao && mensagemJsx.descricao}</DescricaoCard>
            </ContainerMensagem>
        </BgContainer>
    )
}