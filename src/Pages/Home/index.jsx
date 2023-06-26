import { useState, useEffect } from "react";



const pokemonURL = import.meta.env.VITE_API_Original151
const pokemonImage = import.meta.env.VITE_GET_IMAGE
const pokemonSearch = import.meta.env.VITE_SEARCH 



const Home = () => {
    const [originalPokemon, setOriginalPokemon] = useState([]);
    

    const getOriginalPokemon = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        setOriginalPokemon(data.results)
        
    }

    const PokemonImageURL = (index) => {
        return `${pokemonImage}${index+1}.png` 
    }   


    useEffect(() => {
        getOriginalPokemon(pokemonURL)
        
    }, [])

  return (
    <div>

        
         <h1> 
          Original Pokemon
        </h1>
        <div className="pokemon-container">
            {originalPokemon.length === 0 && <p> Carregando </p>}
            {originalPokemon.map((pokemon, index) => (
                <div key={index}>
                    <p>
                        
                       { <img src={PokemonImageURL(index)} />  }  
                    
                       {pokemon.name}
                    
                       
                        
                    </p>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Home
