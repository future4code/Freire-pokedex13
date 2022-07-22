import React from 'react'
import styled from 'styled-components'

const StatContainer = styled.div` 
    display: grid;
    grid-template-columns: 1fr 1fr 3fr;
    align-items: center;
    justify-content: center;
    margin: 0.5rem 0;
    padding: 0 0.4rem;
`

const StatBarDiv = styled.div` 
    width: 100%;
    height: 2rem;
    display: grid;
    align-content: center;
    grid-template-columns: repeat(150, 1fr);
`

const StatBarProgress = styled.div`
    height: 0.8rem;
    background-color: green;
    border-radius: 5px;
`

const StatNameStyled = styled.span` 
    min-width: 18%;
    text-align: right;
    font-size: 16px;
`

const StatValueStyled = styled.span` 
    margin: 0 1rem;
    text-align: center;
`

const DetailsStatComponent = (props) => {
    //decide a cor da barra de status
    let backgroundColor = ''
    if(props.statValue <= 50) {
        backgroundColor = '#80ff00'
    } else if(props.statValue > 50 && props.statValue < 85) {
        backgroundColor = '#bfd040'
    } else if(props.statValue >= 85 && props.statValue < 120 ){
        backgroundColor = '#c3601a'
    } else {
        backgroundColor = '#cf181a'
    }
    //calcula o progresso do status, max=100 // aparecerá warnings no console devido ao styled dentro do componente, mas não encontrei outra forma
    const StatBarProgessUp = styled(StatBarProgress)`
        grid-column: 1 / span ${props.statValue};
        background-color: ${backgroundColor};
    `

    return (
        <StatContainer>
            <StatNameStyled>{props.statName}</StatNameStyled>
            <StatValueStyled>{props.statValue}</StatValueStyled>
            <StatBarDiv>
                <StatBarProgessUp></StatBarProgessUp>
            </StatBarDiv>
        </StatContainer>
    )
}

export default DetailsStatComponent