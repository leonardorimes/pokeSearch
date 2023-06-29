import { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import logo from '../../assets/logo.png'
import {BiSearchAlt2} from 'react-icons/bi'

import './style.css'

const Header = () => {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(!search) return

    navigate(`/search?q=${search}`)
    setSearch("")

  }


  return (
    <header className='headerContainer'>

        <img src={logo} alt="logo-pokemon" />
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder='Busque um Pokemon'
                onChange={(e) => setSearch(e.target.value)}
                value={search}
            />

            <button type='submit'>
                <BiSearchAlt2 />
            </button>
        </form>

    </header>
  )
}

export default Header
