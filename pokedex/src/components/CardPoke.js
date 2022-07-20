import React from "react";
import styled from 'styled-components'
import Poke from '../assets/poke.png'
import Pokemon from '../assets/pokemon.png'

const Card = styled.div`
width: 440px;
height: 210px;
background-color: #729F92;
margin: 30px 10px;
border-radius: 12px;
color: white;
display: flex;
flex-direction: column;

`

const Id = styled.div`
width: 30px;
height: 19px;
margin: 25px 0px 0px 23px;
`

const Name = styled.div`
width: 159px;
height: 39px;
font-size: 32px;
margin: 0px 0px 0px 23px;

`

const Elements = styled.div`
width: 91px;
height: 31px;
background-color: aliceblue;
border-radius: 8px;
margin-left: 23px;
text-align: center;
`

const Botoes = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 56px;
  a{
    margin-left: 23px;
    :hover{
        cursor: pointer;
    }
  }
  button{
    width: 146px;
    height: 38px;
    border-radius: 8px;
    margin-right: 22px;
    background-color: #FFFFFF;
    border: 0;
    :hover{
        cursor: pointer;
    }
  }
`

const Pokebola = styled.div`
position: relative;
display: inline;
top: -198px;
right: -190px;
width: 0px;
`

const Pokemons = styled.div`
position: relative;
top: -471px;
right: -240px;
width: 0px;
`

export const CardPoke = () => {
    return <Card>
        <Id>#id</Id>
        <Name><b>Nome</b></Name>
        <Elements>teste</Elements>
        <Botoes>
            <div><a href='/details'><u>Detalhes</u></a></div>
            <div><button>Capturar!</button></div>
        </Botoes>
        <Pokebola>
            <img src={Poke} />
        </Pokebola>
        <Pokemons>
            <img src={Pokemon} />
        </Pokemons>
    </Card>
}