import { useEffect, useState } from "react"
import { useSearchParams  } from "react-router-dom"
import Card from "../../Components/Card"
import { Link } from "react-router-dom";
import {AiOutlineArrowLeft} from 'react-icons/ai'


const searchURL = import.meta.env.VITE_SEARCH
const pokemonImage = import.meta.env.VITE_GET_IMAGE
import "./style.css"


const Search = () => {
  const [searchParams] = useSearchParams()
  const [pokemons, setPokemons] = useState({})
  const query = searchParams.get("q")

  
  const PokemonImageURL = (index) => {
    return `${pokemonImage}${index}.png` 
  }  






  useEffect(() => {
    (async () => {
      console.log('searching new pokemons')
      const res = await fetch(`${searchURL}${query}`)
      const data = await res.json()
      const ress = await fetch(data.forms[0].url)
      const dataa = await ress.json()
      setPokemons(() => (dataa))
      
    })()
  }, [query])

 

  return (
  <div className="pokemon-SearchContainer">
      {pokemons.length === 0 && <p> Carregando </p>}

      <Link to="/"><AiOutlineArrowLeft className="back" /></Link>

      <Card name={pokemons.name} id={pokemons.id} img={PokemonImageURL(pokemons.id)}   />


  </div>
  )

    }


export default Search
