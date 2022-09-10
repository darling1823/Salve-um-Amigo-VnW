import styled, {createGlobalStyle} from 'styled-components'
import {Link} from 'react-router-dom'

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,200;0,300;0,400;1,300;1,400&family=Lobster&display=swap');
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
    background-color: #F7B538;
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
    opacity: 0.5;
    z-index: -1;
    width: 45vw;
`
export const LEFT = styled.img`
    position: absolute;
    opacity: 0.5;
    left: -17.5vw;
    z-index: -1;
    width: 45vw;
`

export const RIGHT = styled.img`
    position: absolute;
    opacity: 0.5;
    right: -17.5vw;
    z-index: -1;
    width: 45vw;
`

export const H1 = styled.h1`
    z-index: 1;
    font-family: 'Lobster', cursive;
    color: #00000;
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
    opacity: 0.9;
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

export const HOMEBG = styled.figure`
    overflow: hidden;
    width: 99vw;
    display: flex;
    justify-content: center;
    align-items: center;
`