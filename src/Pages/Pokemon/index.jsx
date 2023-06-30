import { useEffect, useState } from "react"
import { useParams } from "react-router"
const searchURL = import.meta.env.VITE_SEARCH
const pokemonImage = import.meta.env.VITE_GET_IMAGE
const pokemonBackImage = import.meta.env.VITE_GET_BACK_IMAGE

import "./style.css"


const PokemonImageURL = (index) => {
  return `${pokemonImage}${index}.png` 
}  

const PokemonBackImageUrl = (index) => {
  return `${pokemonBackImage}${index}.png`
}

const Pokemon = () => {
  const {id} = useParams()
  const [pokemon, setPokemon] = useState({})
  




  useEffect(() => {
    (async () => {
      console.log('searching pokemon')
      const res = await fetch(`${searchURL}${id}`)
      const data = await res.json()
      const ress = await fetch(data.forms[0].url)
      const dataa = await ress.json()
      setPokemon(() => (dataa))
      
      
      
    })()
  }, [])

  return (
    <div className="container-individual-pokemon">
      {console.log(pokemon)}
      <h1> {pokemon.name} </h1>
      <div className="images">
        <img src={PokemonImageURL(pokemon.id)} alt={pokemon.name} />
        <img src={PokemonBackImageUrl(pokemon.id)} alt={pokemon.name} />
      </div>
      <p> id: {pokemon.id}</p>
      <p> É mega?: {pokemon.is_mega ? <span> sim </span>: <span> Não </span>} </p>
      <p> Serve somente para batalhas: {pokemon.is_battle_only ? <span> sim </span>: <span> Não </span>} </p>
    </div>
  )
}

export default Pokemon
