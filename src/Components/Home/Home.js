import React from 'react'
import Background from '../data/homebg.jpg'
import Dog from '../data/dog.png'
import Cat from '../data/cat.png'
import Help from '../data/help.png'
import * as S from './Style'

const Home = () => {
 return(
    <S.HomeContainer>
        <S.HomeBG>
            <img src={Background} alt='Background'/>
        </S.HomeBG>
        <S.Container>
            <S.H2>Quem somos?</S.H2>
            <S.HomeDiv>
                <S.HomeFig>
                    <S.IMG src={Dog} alt='Dog'/>
                </S.HomeFig>
                <S.P>Nós somos uma ONG focada em ajudar amigos peludos que estão perdidos por todo o país. Aqui conseguem conforto e carinho!</S.P>
            </S.HomeDiv>
            <S.H2>O que fazemos?</S.H2>
            <S.HomeDiv>
                <S.P>Abrigamos o máximo de amigos possíveis em nossos abrigos até que possam encontram uma nova casa!</S.P>
                <S.HomeFig>
                    <S.CAT src={Cat} alt='Cat'/>
                </S.HomeFig>
            </S.HomeDiv>
            <S.H2>Como você pode ajudar?</S.H2>
            <S.HomeDiv>
                <S.FigHelp>
                    <S.IMG src={Help} alt='Help'/>
                </S.FigHelp>
                <S.P>Além de fazer doações nos centros de abrigo, você também pode adotar um amigo através desse site!</S.P>
            </S.HomeDiv>
        </S.Container>
    </S.HomeContainer>
 )
}

export default Home