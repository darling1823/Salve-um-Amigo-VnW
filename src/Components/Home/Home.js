import React from 'react'
import Background from '../data/homebg.jpg'
import * as S from './Style'

const Home = () => {
 return(
    <div>
        <S.HOMEBG>
            <img src={Background} alt='Background'/>
        </S.HOMEBG>
        

    </div>
 )
}

export default Home