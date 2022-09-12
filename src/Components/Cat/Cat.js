import React, {useEffect, useState} from 'react'
import axios from 'axios'
import * as S from '../Dog/Style'
import BG from '../data/dogsbg.jpg'
import Dog from '../data/littleone.png'

const Cats = () => {

    const [dog, setDog] = useState(null)

    const [open, setOpen] = useState(false)

    const [name, setName] = useState([])


    const Friend = () => {
        return(
            <div>
            <figure>
                <img src={dog} alt='Amigão!'/>
            </figure>
            </div>
        )
    }

    return(
        <S.SECTION>
            <S.FIGURE>
                <S.BG src={BG} alt='background' />
            </S.FIGURE>
            <S.Container>
                <S.H2>Amigos Caninos</S.H2>
                <S.Content>
                    <S.P>Nessa área, você pode conhecer todos os nossos queridos amigos caninos. Como queremos que todos tenham uma chance igual, aperte no botão a seguir para conhecer um de cada vez!</S.P>
                    <figure>
                        <img src={Dog} alt='Dog'/>
                    </figure>
                </S.Content>
               
            </S.Container>
        </S.SECTION>
    )
}

export default Cats