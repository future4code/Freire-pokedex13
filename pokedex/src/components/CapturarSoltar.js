import React, { useState } from 'react'
import styled from 'styled-components'

// Uso do componente de capturar/soltar: 
// 1- importar o componente: import { CapturarSoltar } from "../components/CapturarSoltar"
// 2- criar um estado local dentro do seu componente: const [isCapturando, setIsCapturando] = useState(false)
// 3- chamar a função ao clicar no botão de captura: 
//     Quando a função muda o estado do passo 2 para true o componente é renderizado 
//     e após 2 segundo o estado é mudado para false e ele some

//         const handleCaptura = () => {
//             setIsCapturando(true)
//             setTimeout(() => {
//                 setIsCapturando(false)
//             }, 2000)
//         }

// 4- dentro do return, passar: {isCapturando && <CapturarSoltar acao={'soltar'} />}
//     vai verificar se 'isCapturando' é true, e renderiza.
//      escolhendo entre acao={'soltar'} e acao={'capturar'}
//      pode ser colocado em qualquer container não vai atrabalhar

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