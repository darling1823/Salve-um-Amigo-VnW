import React, {useState} from 'react'
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom'
import * as S from './Components/Home/Style'
import Background from './Components/data/dogcat.jpg'
import Home from './Components/Home/Home'
import Dogs from './Components/Dog/Dog'
import Cats from './Components/Cat/Cat'

const Menu = () => {
  const [open, setOpen] = useState(false)

  return(
    <S.DIV>
      <S.BUTTON onClick={()=>{setOpen(!open)}}>{open === true ? 'X' : '☰'}</S.BUTTON>
      {open && MenuMob()}
      <S.H1>Salve um Amigo</S.H1>
      <S.MID src={Background} alt='Background'/>
      <S.LEFT src={Background} alt='Background'/>
      <S.RIGHT src={Background} alt='Background'/>
      <nav>
        <S.UL>
          <li><S.LINK to='/'>Início</S.LINK></li>
          <li><S.LINK to='/dogs'>Cachorros</S.LINK></li>
          <li><S.LINK to='/cats'>Gatos</S.LINK></li>
        </S.UL>
      </nav>
    </S.DIV>
  )
}

const MenuMob = () => {
  return(
    <S.NAV>
      <S.ULMOB>
          <li><S.LINK to='/'>Início</S.LINK></li>
          <li><S.LINK to='/dogs'>Cachorros</S.LINK></li>
          <li><S.LINK to='/cats'>Gatos</S.LINK></li>
        </S.ULMOB>
    </S.NAV>
  )
}

const App = () => {
  return(
    <Router>
      <S.GlobalStyle/>
      <Menu/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dogs' element={<Dogs/>}/>
        <Route path='/cats' element={<Cats/>}/>
      </Routes>
    </Router>
  )
}

export default App