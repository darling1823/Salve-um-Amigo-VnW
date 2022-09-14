import styled from 'styled-components'

export const SECTION = styled.section`
    display: flex;
    justify-content: center;
    position: relative;
`

export const DIV = styled.div`
    margin-top: 2vw;
    margin-bottom: 2vw;
`
export const FIGURE = styled.figure`
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

export const BG = styled.img`
    width: 1500px;
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

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 1vw;
`