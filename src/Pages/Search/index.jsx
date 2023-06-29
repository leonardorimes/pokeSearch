import { useEffect, useState } from "react"
import { useSearchParams  } from "react-router-dom"
import Card from "../../Components/Card"

const searchURL = import.meta.env.VITE_SEARCH
const pokemonImage = import.meta.env.VITE_GET_IMAGE

const Search = () => {
  const [searchParams] = useSearchParams()
  const [pokemons, setPokemons] = useState([])
  const query = searchParams.get("q")

  
  const PokemonImageURL = (index) => {
    return `${pokemonImage}${index}.png` 
  }  
  
  

  useEffect(() => {

      const searchWithQueryURL = `${searchURL}${query}`;
     
      const getSearchedPokemons = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setPokemons(data)
      }
      getSearchedPokemons(searchWithQueryURL)
      
    }, [query])
    
    console.log(pokemons)
  return (
      <div className="container">
        <h2 className="title"> Resultados para: <span className="query-text"> {query} </span> </h2>
        <div className="pokemon-container">
            {pokemons.length === 0 && <p> Carregando </p>}
            {pokemons.map((pokemon, index) => (
                <div key={index}>
                    <Card
                        name={pokemon.forms[0].name}
                        id={pokemon.id}
                        img={PokemonImageURL(index)}
                        url={pokemon.forms[0].url}
                    >

                        
                    </Card>
                </div>
            ))}
        </div>
        </div>
  )
  
  }

export default Search
