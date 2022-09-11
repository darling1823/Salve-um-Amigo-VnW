import styled, {createGlobalStyle} from 'styled-components'
import {Link} from 'react-router-dom'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        font-family: 'Fira Sans', sans-serif;
    }
`

export const DIV = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 200px;
    position: relative;
    z-index: 0;
    overflow: hidden;
    @media screen and (max-width: 1024px){
        height: 150px;
    }
    @media screen and (max-width: 768px){
        height: 75px;
        border-bottom: solid 5px #780116;
    }
    @media screen and (max-width: 425px){
        height: 60px;
    }
    @media screen and (max-width: 320px){
        height: 50px;
    }
`
export const MID = styled.img`
    position: absolute;
    z-index: -1;
    width: 45vw;
`
export const LEFT = styled.img`
    position: absolute;
    left: -17.5vw;
    z-index: -1;
    width: 45vw;
`

export const RIGHT = styled.img`
    position: absolute;
    right: -17.5vw;
    z-index: -1;
    width: 45vw;
`

export const H1 = styled.h1`
    z-index: 1;
    font-family: 'Pacifico', cursive;
    color: #780116;
    font-size: 5vw;
    @media screen and (max-width: 1024px){
        font-size: 6vw;
    }
    @media screen and (max-width: 768px){
        color: #780116;
    }
    @media screen and (max-width: 425px){
        font-size: 8vw;
    }
    @media screen and (max-width: 320px){
        font-size: 9vw;
    }
`

export const UL = styled.ul`
    background-color: #780116;
    position: absolute;
    right: 0;
    bottom: 0;
   
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100vw;
    height: 35px;
    @media screen and (max-width: 1024px){
        height: 25px;
    }
    @media screen and (max-width: 768px){
        display: none;
    }
`

export const LINK = styled(Link)`
    text-decoration: none;
    opacity: 1;
    color: #DB7C26;
    font-family: 'Fira Sans', sans-serif;
    font-weight: 300;
    font-size: 1.5vw;
    &:hover{
        font-weight: 400;
        font-style: italic;
    }
    @media screen and (max-width: 1024px){
        font-size: 2vw;
    }
    @media screen and (max-width: 768px){
        color: #780116;
        font-size: 4vw;
    }
    @media screen and (max-width: 425px){
        font-size: 5vw;
    }
    @media screen and (max-width: 320px){
        font-size: 5.5vw;
    }
`

export const BUTTON = styled.button`
    display: none;
    @media screen and (max-width: 768px){
        display: initial;
        position: absolute;
        left: 0;
        width: 15vw;
        font-size: 5vw;
        height: 75px;
        background: #780116;
        border: none;
        color: #DB7C26;
    }
`

export const NAV = styled.nav`
    position: absolute;
    width: 85vw;
    left: 15vw;
    z-index: 2;
    height: 100%;
`

export const ULMOB = styled.ul`
    width: 100%;
    height: 100%;
    background: #DB7C26;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const HomeBG = styled.figure`
    overflow: hidden;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 0;
    @media screen and (max-width: 768px){
        display: none;
    }
`

export const HomeContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
`

export const Container = styled.div`
    z-index: 1;
    margin-top: 2vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75%;
    background: #F7B538;
    border: solid 5px #780116;
    border-radius: 10px;
    margin-bottom: 2vw;
    @media screen and (max-width: 768px){
        width: 100%;
        border-radius: 0px;
        background: none;
        overflow: hidden;
        border: none;
        border-bottom: solid 5px #780116;
    }
`

export const H2 = styled.h2`
    color: #D8572A;
    background: #780116;
    text-align: center;
    width: 100%;
    font-size: 3vw;
    font-family: 'Satisfy', cursive;
    @media screen and (max-width: 1024px){
        font-size: 3.5vw;
    }
    @media screen and (max-width: 768px){
        font-size: 4vw;
    }
    @media screen and (max-width: 425px){
        font-size: 5.5vw;
    }
    @media screen and (max-width: 320px){
        font-size: 6.5vw;
    }
`

export const HomeDiv = styled.div`
    display: flex;
    align-items: center;
    padding-top: 1vw;
    padding-bottom: 1vw;
    height: 400px;
    position: relative;
    @media screen and (max-width: 1024px){
        height: 300px;
    }
    @media screen and (max-width: 425px){
        height: 200px;
    }
    @media screen and (max-width: 320px){
        height: 150px;
    }
    
`

export const HomeFig = styled.figure`
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20vw;
    @media screen and (max-width: 768px){
        position: absolute;
        width: 100vw;
        height: 300px;
    }
    @media screen and (max-width: 425px){
        height: 200px;
    }
    @media screen and (max-width: 320px){
        height: 150px;
    }
`

export const IMG = styled.img`
    width: 400px;
    @media screen and (max-width: 1024px){
        width: 340px;
    }
    @media screen and (max-width: 768px){
        width: 800px;
        opacity: 0.3;
    }
    @media screen and (max-width: 425px){
        width: 500px;
    }
    @media screen and (max-width: 320px){
        width: 420px;
    }
`

export const P = styled.p`
    color: #DB7C26;
    font-size: 2vw;
    width: 45vw;
    @media screen and (max-width: 1024px){
        font-size: 2.5vw;
    }
    @media screen and (max-width: 768px){
        font-size: 3.5vw;
        width: 60vw;
        color: #780116;
    }
    @media screen and (max-width: 425px){
        font-size: 5vw;
        width: 70vw;
    }
    @media screen and (max-width: 320px){
        font-size: 5.5vw;
        width: 75vw;
    }
`

export const CAT = styled.img`
    width: 300px;
    @media screen and (max-width: 1440px){
        width: 290px;
    }
    @media screen and (max-width: 1024px){
        width: 200px;
    }
    @media screen and (max-width: 768px){
        width: 550px;
        opacity: 0.3;
    }
    @media screen and (max-width: 425px){
        width: 350px;
    }
    @media screen and (max-width: 320px){
        width: 290px;
    }
`

export const FigHelp = styled.figure`
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25vw;
    @media screen and (max-width: 1024px){
        width: 30vw;
    }
    @media screen and (max-width: 768px){
        position: absolute;
        width: 100vw;
        height: 300px;
    }
    @media screen and (max-width: 425px){
        height: 200px;
    }
    @media screen and (max-width: 320px){
        height: 150px;
    }
`