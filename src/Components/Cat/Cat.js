import React, {useState} from 'react'
import axios from 'axios'
import * as S from '../Cat/Style'
import BG from '../data/catsbg.jpg'
import Cat from '../data/catone.png'


const Cats = () => {

    const [cat, setCat] = useState(null)

    const [open, setOpen] = useState(false)

    const [name, setName] = useState([])


    const Friend = () => {
        return(
            <div>
            <figure>
                <img src={cat} alt='Amigão!'/>
            </figure>
            </div>
        )
    }

    const API = 'https://api.thecatapi.com/v1/images/search'

    const getCats = () => {
        axios
            .get(API)
            .then((response)=>{
                setCat(response.data.url)
            })
            .catch((error)=>{
                console.log('Sorry, we made a mistake! Give us a little moment to solve!', error)
            })
    }

    return(
        <S.SECTION>
            <S.FIGURE>
                <S.BG src={BG} alt='background' />
            </S.FIGURE>
            <S.Container>
                <S.H2>Amigos Felinos</S.H2>
                <S.Content>
                    <figure>
                        <img src={Cat} alt='Dog'/>
                    </figure>
                    <S.P>Nessa área, você pode conhecer todos os nossos queridos amigos felinos. Como queremos que todos tenham uma chance igual, aperte no botão a seguir para conhecer um de cada vez!</S.P>
                </S.Content>
                <button onClick={()=>{getCats(); setOpen(true)}}>Clique aqui!</button>
                {open && Friend()}
            </S.Container>
        </S.SECTION>
    )
}

export default Cats