import { useEffect, useState } from "react"
import { useSearchParams  } from "react-router-dom"
import Card from "../../Components/Card"

const searchURL = import.meta.env.VITE_SEARCH
const pokemonImage = import.meta.env.VITE_GET_IMAGE



const Search = () => {
  const [searchParams] = useSearchParams()
  const [pokemons, setPokemons] = useState({})
  const query = searchParams.get("q")

  
  const PokemonImageURL = (index) => {
    return `${pokemonImage}${index}.png` 
  }  

  const handleURL = ({pokemon}) => {
      console.log(pokemon)
    
  }


  useEffect(() => {
    (async () => {
      console.log('searching new pokemons')
      const res = await fetch(`${searchURL}${query}`)
      const data = await res.json()
      const ress = await fetch(data.forms[0].url)
      const dataa = await ress.json()
      /* fazer um fetch nessa url*/
      setPokemons(() => (dataa))
      
    })()
  }, [query])

 

  return (
  <div className="pokemon-container">
      {pokemons.length === 0 && <p> Carregando </p>}

      

      <Card name={pokemons.name} id={pokemons.id} img={PokemonImageURL(pokemons.id)}  url={handleURL(pokemons)} />


  </div>
  )

    }


export default Search
