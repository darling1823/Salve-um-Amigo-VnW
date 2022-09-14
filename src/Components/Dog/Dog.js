import React, {useEffect, useState} from 'react'
import axios from 'axios'
import * as S from './Style'
import BG from '../data/dogsbg.jpg'
import LilDog from '../data/littleone.png'

const Dogs = () => {

    const [dog, setDog] = useState(null)

    const [open, setOpen] = useState(false)

    const [name, setName] = useState([])

    const API = 'https://dog.ceo/api/breeds/image/random'

    const getDogs = () => {
        axios
            .get(API)
            .then((response)=>{
                setDog(response.data.message)
            })
            .catch((error)=>{
                console.log('Sorry, we made a mistake! Give us a little moment to solve!', error)
            })
    }

    const Friend = () => {
        return(
            <S.APIContainer>
                <S.FriendContainer>
                    <S.Friend src={dog} alt='Amigão!'/>
                </S.FriendContainer>
            </S.APIContainer>
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
                    <S.DogContainer>
                        <S.LilDog src={LilDog} alt='Dog'/>
                    </S.DogContainer>
                </S.Content>
                <S.BUTTON onClick={()=>{getDogs(); setOpen(true)}}>Clique aqui!</S.BUTTON>
                {open && Friend()}
            </S.Container>
        </S.SECTION>
    )
}

export default Dogs