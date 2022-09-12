import React, {useEffect, useState} from 'react'
import axios from 'axios'
import * as S from './Style'
import BG from '../data/dogsbg.jpg'
import Dog from '../data/littleone.png'

const Dogs = () => {

    const [dog, setDog] = useState(null)

    const [open, setOpen] = useState(false)

    const [name, setName] = useState([])

    const API = 'https://dog.ceo/api/breeds/image/random'

    const getDogs = () => {
        axios
            .get(API)
            .then((response)=>{
                setDog(response.data)
            })
            .catch((error)=>{
                console.log('Sorry, we made a mistake! Give us a little moment to solve!', error)
            })
    }

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
                <button onClick={()=>{getDogs(); setOpen(!open)}}>Clique aqui!</button>
                {open && Friend()}
            </S.Container>
        </S.SECTION>
    )
}

export default Dogs