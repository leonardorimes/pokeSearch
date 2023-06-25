import React from 'react'
import logo from '../../assets/logo.png'
import {BiSearchAlt2} from 'react-icons/bi'

import './style.css'

const Header = () => {
  return (
    <header className='headerContainer'>
        <img src={logo} alt="logo-pokemon" />
        <form>
            <input 
                type="text"
                placeholder='Busque um Pokemon'
            />

            <button type='submit'>
                <BiSearchAlt2 />
            </button>
        </form>

    </header>
  )
}

export default Header
