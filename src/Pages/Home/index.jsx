import { useState, useEffect } from "react";



const pokemonURL = import.meta.env.VITE_API_Original151


const Home = () => {
    const [originalPokemon, setOriginalPokemon] = useState([]);
    const [originalPokemonImage, setOriginalPokemonImage] = useState([]);


    const getOriginalPokemon = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setOriginalPokemon(data.results)
        
    }

    // const getPokemonImage (url) => {

    // }

    useEffect(() => {
        getOriginalPokemon(pokemonURL)
        
    }, [])

  return (
    <div>

        {console.log(originalPokemon)}
         <h1> 
          Original Pokemon
        </h1>
        <div className="pokemon-container">
            {originalPokemon.length === 0 && <p> Carregando </p>}
            {originalPokemon.map((pokemon) => (
                <>
                    <p>
                        {pokemon.name}
                    </p>
                </>
            ))}
        </div>

    </div>
  )
}

export default Home
