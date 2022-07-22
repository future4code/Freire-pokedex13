import styled from 'styled-components'
import Poison from '../assets/poison.png'

/* EXEMPLO DE USO 

<BlocoPoison>
    <div>{Poison}</div>        =========>> Importar as imagens guardadas na pasta assets para colocar dentro da div
    <span>Poison</span>        =========>> Nome do elemento
</BlocoIce>


-EXCEÇÃO:
<BlocoIce>
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-snow" viewBox="0 0 16 16">
            <path d="M8 16a.5.5 0 0 1-.5-.5v-1.293l-.646.647a.5.5 0 0 1-.707-.708L7.5 12.793V8.866l-3.4 1.963-.496 1.85a.5.5 0 1 1-.966-.26l.237-.882-1.12.646a.5.5 0 0 1-.5-.866l1.12-.646-.884-.237a.5.5 0 1 1 .26-.966l1.848.495L7 8 3.6 6.037l-1.85.495a.5.5 0 0 1-.258-.966l.883-.237-1.12-.646a.5.5 0 1 1 .5-.866l1.12.646-.237-.883a.5.5 0 1 1 .966-.258l.495 1.849L7.5 7.134V3.207L6.147 1.854a.5.5 0 1 1 .707-.708l.646.647V.5a.5.5 0 1 1 1 0v1.293l.647-.647a.5.5 0 1 1 .707.708L8.5 3.207v3.927l3.4-1.963.496-1.85a.5.5 0 1 1 .966.26l-.236.882 1.12-.646a.5.5 0 0 1 .5.866l-1.12.646.883.237a.5.5 0 1 1-.26.966l-1.848-.495L9 8l3.4 1.963 1.849-.495a.5.5 0 0 1 .259.966l-.883.237 1.12.646a.5.5 0 0 1-.5.866l-1.12-.646.236.883a.5.5 0 1 1-.966.258l-.495-1.849-3.4-1.963v3.927l1.353 1.353a.5.5 0 0 1-.707.708l-.647-.647V15.5a.5.5 0 0 1-.5.5z" />
        </svg>
    </div>
    <span>Ice</span>
</BlocoIce>
 */

export const BlocoPoison = styled.div`
height: 31px;
width: 99px;
background-color: #AD61AE;
border-radius: 8px;
display: flex;
justify-content: space-between;
align-items: center;
div{
    height: 20px;
    width: 20px;
    margin-left: 8px;
}
span{
    color: white;
    margin-right: 8px;
}
`

export const BlocoGrass = styled.div`
height: 31px;
width: 91px;
background-color: #70B873;
border-radius: 8px;
display: flex;
justify-content: space-between;
align-items: center;
div{
    height: 19px;
    width: 17px;
    margin-left: 8px;
}
span{
    color: white;
    margin-right: 8px;
}
`

export const BlocoFire = styled.div`
height: 31px;
width: 74px;
background-color: #F44900;
border-radius: 8px;
display: flex;
justify-content: space-between;
align-items: center;
div{
    height: 21px;
    width: 16px;
    margin-left: 8px;
}
span{
    color: white;
    margin-right: 8px;
}
`

export const BlocoFlying = styled.div`
height: 31px;
width: 95px;
background-color: #F44900;
border-radius: 8px;
display: flex;
justify-content: space-between;
align-items: center;
div{
    height: 18px;
    width: 21px;
    margin-left: 8px;
}
span{
    color: white;
    margin-right: 8px;
}
`

export const BlocoWater = styled.div`
height: 31px;
width: 97px;
background-color: #33A4F5;
border-radius: 8px;
display: flex;
justify-content: space-between;
align-items: center;
div{
    height: 21px;
    width: 14px;
    margin-left: 8px;
}
span{
    color: white;
    margin-right: 8px;
}
`

export const BlocoBug = styled.div`
height: 31px;
width: 82px;
background-color: #316520;
border-radius: 8px;
display: flex;
justify-content: space-between;
align-items: center;
div{
    height: 21px;
    width: 18px;
    margin-left: 8px;
}
span{
    color: white;
    margin-right: 8px;
}
`

export const BlocoNormal = styled.div`
height: 31px;
width: 106px;
background-color: #8A8A8A;
border-radius: 8px;
display: flex;
justify-content: space-between;
align-items: center;
div{
    height: 18.5px;
    width: 18.5px;
    margin-left: 8px;
}
span{
    color: white;
    margin-right: 8px;
}
`

export const BlocoDark = styled.div`
height: 31px;
width: 86px;
background-color: #5C5365;
border-radius: 8px;
display: flex;
justify-content: space-between;
align-items: center;
div{
    height: 21px;
    width: 21px;
    margin-left: 8px;
}
span{
    color: white;
    margin-right: 8px;
}
`

export const BlocoDragon = styled.div`
height: 31px;
width: 106px;
background-color: #0A6CBF;
border-radius: 8px;
display: flex;
justify-content: space-between;
align-items: center;
div{
    height: 21px;
    width: 18.5px;
    margin-left: 8px;
}
span{
    color: white;
    margin-right: 8px;
}
`

export const BlocoEletric = styled.div`
height: 31px;
width: 105px;
background-color: #F4D23B;
border-radius: 8px;
display: flex;
justify-content: space-between;
align-items: center;
div{
    height: 21px;
    width: 13px;
    margin-left: 8px;
}
span{
    color: white;
    margin-right: 8px;
}
`

export const BlocoFairy = styled.div`
height: 31px;
width: 88px;
background-color: #EC8FE6;
border-radius: 8px;
display: flex;
justify-content: space-between;
align-items: center;
div{
    height: 21px;
    width: 21px;
    margin-left: 8px;
}
span{
    color: white;
    margin-right: 8px;
}
`

export const BlocoFighting = styled.div`
height: 31px;
width: 110px;
background-color: #CE4069;
border-radius: 8px;
display: flex;
justify-content: space-between;
align-items: center;
div{
    height: 21px;
    width: 18px;
    margin-left: 8px;
}
span{
    color: white;
    margin-right: 8px;
}
`

export const BlocoGhost = styled.div`
height: 31px;
width: 96px;
background-color: #5269AC;
border-radius: 8px;
display: flex;
justify-content: space-between;
align-items: center;
div{
    height: 21px;
    width: 21px;
    margin-left: 8px;
}
span{
    color: white;
    margin-right: 8px;
}
`

export const BlocoGround = styled.div`
height: 31px;
width: 107px;
background-color: #D97745;
border-radius: 8px;
display: flex;
justify-content: space-between;
align-items: center;
div{
    height: 21px;
    width: 15.5px;
    margin-left: 8px;
}
span{
    color: white;
    margin-right: 8px;
}
`

export const BlocoIce = styled.div`
height: 31px;
width: 75px;
background-color: #74CEC0;
border-radius: 8px;
display: flex;
justify-content: space-between;
align-items: center;
div{
    height: 21px;
    width: 18px;
    margin-left: 8px;
    svg{
        color: white;
    }
}
span{
    color: white;
    margin-right: 8px;
}
`

export const BlocoPsychic = styled.div`
height: 31px;
width: 107px;
background-color: #F67176;
border-radius: 8px;
display: flex;
justify-content: space-between;
align-items: center;
div{
    height: 21px;
    width: 19.5px;
    margin-left: 8px;
}
span{
    color: white;
    margin-right: 8px;
}
`

export const BlocoRock = styled.div`
height: 31px;
width: 88px;
background-color: #C7B78B;
border-radius: 8px;
display: flex;
justify-content: space-between;
align-items: center;
div{
    height: 16.5px;
    width: 21px;
    margin-left: 8px;
}
span{
    color: white;
    margin-right: 8px;
}
`

export const BlocoSteel = styled.div`
height: 31px;
width: 89px;
background-color: #BBBBBB;
border-radius: 8px;
display: flex;
justify-content: space-between;
align-items: center;
div{
    height: 18px;
    width: 21px;
    margin-left: 8px;
}
span{
    color: white;
    margin-right: 8px;
}
`