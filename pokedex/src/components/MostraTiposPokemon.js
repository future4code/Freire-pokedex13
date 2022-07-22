import React from 'react'
import styled from 'styled-components'
// import cards de tipos
import { BlocoBug, BlocoDark, BlocoDragon, BlocoEletric, BlocoFairy, BlocoFlying, BlocoFighting, BlocoFire, BlocoGhost, BlocoGrass, BlocoGround, BlocoIce, BlocoNormal, BlocoPoison, BlocoPsychic, BlocoRock, BlocoSteel, BlocoWater } from "../pages/cardTypeStyled"
//import imagens
import bugTypeImg from '../assets/bug.png'
import darkTypeImg from '../assets/dark.png'
import dragonTypeImg from '../assets/dragon.png'
import eletricTypeImg from '../assets/eletric.png'
import fairyTypeImg from '../assets/fairy.png'
import fightingTypeImg from '../assets/fighting.png'
import fireTypeImg from '../assets/fire.png'
import flyingTypeImg from '../assets/flying.png'
import ghostTypeImg from '../assets/ghost.png'
import grassTypeImg from '../assets/grass.png'
import groundTypeImg from '../assets/ground.png'
import normalTypeImg from '../assets/normal.png'
import poisonTypeImg from '../assets/poison.png'
import psychicTypeImg from '../assets/psychic.png'
import rockTypeImg from '../assets/rock.png'
import steelTypeImg from '../assets/steel.png'
import waterTypeImg from '../assets/water.png'

const TypesContainer = styled.div` 
    display: flex;
    column-gap: 1rem;
    margin: 0.5rem 0;
`

const MostraTiposPokemon = (props) => {
    //recebe a lista de tipos do pokemon que está nos detalhes por props
    const listaTipos = props.listaTipos

    //faz o map para cada tipo do pokemon
    const listaTiposMontados = listaTipos?.map(tipo => {
        //verifica qual é o tipo e chama um card de acordo
        if(tipo.type.name === 'bug') {
            return(
                <BlocoBug key={tipo.type.url}>
                    <div><img src={bugTypeImg} /></div>
                    <span>Bug</span>
                </BlocoBug>
            )
        }
        else if(tipo.type.name === 'dark') {
            return (
                <BlocoDark key={tipo.type.url}>
                    <div><img src={darkTypeImg} /></div>
                    <span>Dark</span>
                </BlocoDark>
            )
        }
        else if(tipo.type.name === 'dragon') {
            return (
                <BlocoDragon key={tipo.type.url}>
                    <div><img src={dragonTypeImg} /></div>
                    <span>Dragon</span>
                </BlocoDragon>
            )
        }
        else if(tipo.type.name === 'eletric') {
            return (
                <BlocoEletric key={tipo.type.url}>
                    <div><img src={eletricTypeImg} /></div>
                    <span>Eletric</span>
                </BlocoEletric>
            )
        }
        else if(tipo.type.name === 'fairy') {
            return (
                <BlocoFairy key={tipo.type.url}>
                    <div><img src={fairyTypeImg} /></div>
                    <span>Fairy</span>
                </BlocoFairy>
            )
        }
        else if(tipo.type.name === 'fighting') {
            return (
                <BlocoFighting key={tipo.type.url}>
                    <div><img src={fightingTypeImg} /></div>
                    <span>Fighting</span>
                </BlocoFighting>
            )
        }
        else if(tipo.type.name === 'flying') {
            return (
                <BlocoFlying key={tipo.type.url}>
                    <div><img src={flyingTypeImg} /></div>
                    <span>Flying</span>
                </BlocoFlying>
            )
        }
        else if(tipo.type.name === 'fire') {
            return (
                <BlocoFire key={tipo.type.url}>
                    <div><img src={fireTypeImg} /></div>
                    <span>Fire</span>
                </BlocoFire>
            )
        }
        else if(tipo.type.name === 'ghost') {
            return (
                <BlocoGhost key={tipo.type.url}>
                    <div><img src={ghostTypeImg} /></div>
                    <span>Ghost</span>
                </BlocoGhost>
            )
        }
        else if(tipo.type.name === 'grass') {
            return (
                <BlocoGrass key={tipo.type.url}>
                    <div><img src={grassTypeImg} /></div>
                    <span>Grass</span>
                </BlocoGrass>
            )
        }
        else if(tipo.type.name === 'ground') {
            return (
                <BlocoGround key={tipo.type.url}>
                    <div><img src={groundTypeImg} /></div>
                    <span>Ground</span>
                </BlocoGround>
            )
        }
        else if(tipo.type.name === 'ice') {
            return (
                <BlocoIce key={tipo.type.url}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-snow" viewBox="0 0 16 16">
                            <path d="M8 16a.5.5 0 0 1-.5-.5v-1.293l-.646.647a.5.5 0 0 1-.707-.708L7.5 12.793V8.866l-3.4 1.963-.496 1.85a.5.5 0 1 1-.966-.26l.237-.882-1.12.646a.5.5 0 0 1-.5-.866l1.12-.646-.884-.237a.5.5 0 1 1 .26-.966l1.848.495L7 8 3.6 6.037l-1.85.495a.5.5 0 0 1-.258-.966l.883-.237-1.12-.646a.5.5 0 1 1 .5-.866l1.12.646-.237-.883a.5.5 0 1 1 .966-.258l.495 1.849L7.5 7.134V3.207L6.147 1.854a.5.5 0 1 1 .707-.708l.646.647V.5a.5.5 0 1 1 1 0v1.293l.647-.647a.5.5 0 1 1 .707.708L8.5 3.207v3.927l3.4-1.963.496-1.85a.5.5 0 1 1 .966.26l-.236.882 1.12-.646a.5.5 0 0 1 .5.866l-1.12.646.883.237a.5.5 0 1 1-.26.966l-1.848-.495L9 8l3.4 1.963 1.849-.495a.5.5 0 0 1 .259.966l-.883.237 1.12.646a.5.5 0 0 1-.5.866l-1.12-.646.236.883a.5.5 0 1 1-.966.258l-.495-1.849-3.4-1.963v3.927l1.353 1.353a.5.5 0 0 1-.707.708l-.647-.647V15.5a.5.5 0 0 1-.5.5z" />
                        </svg>
                    </div>
                    <span>Ice</span>
                </BlocoIce>
            )
        }
        else if(tipo.type.name === 'normal') {
            return (
                <BlocoNormal key={tipo.type.url}>
                    <div><img src={normalTypeImg} /></div>
                    <span>Normal</span>
                </BlocoNormal>
            )
        }
        else if(tipo.type.name === 'poison') {
            return (
                <BlocoPoison key={tipo.type.url}>
                    <div><img src={poisonTypeImg} /></div>
                    <span>Poison</span>
                </BlocoPoison>
            )
        }
        else if(tipo.type.name === 'psychic') {
            return (
                <BlocoPsychic key={tipo.type.url}>
                    <div><img src={psychicTypeImg} /></div>
                    <span>Psychic</span>
                </BlocoPsychic>
            )
        }
        else if(tipo.type.name === 'rock') {
            return (
                <BlocoRock key={tipo.type.url}>
                    <div><img src={rockTypeImg} /></div>
                    <span>Rock</span>
                </BlocoRock>
            )
        }
        else if(tipo.type.name === 'steel') {
            return (
                <BlocoSteel key={tipo.type.url}>
                    <div><img src={steelTypeImg} /></div>
                    <span>Steel</span>
                </BlocoSteel>
            )
        }
        else if(tipo.type.name === 'water') {
            return (
                <BlocoWater key={tipo.type.url}>
                    <div><img src={waterTypeImg} /></div>
                    <span>Water</span>
                </BlocoWater>
            )
        }
    })

    return(
        <TypesContainer>
            {listaTiposMontados}
        </TypesContainer>
    )
}

export default MostraTiposPokemon