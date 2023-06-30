import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";


import './style.css'

const Card = ({name, id, img, url}) => {
  const [typePokemon, setTypePokemon] = useState([])
  
  const handleTypePokemon = async () => {
      const res = await fetch(url);
      const data = await res.json()
      
      
      setTypePokemon(data.types[0].type.name)
      
      
  }


  useEffect(() => {
    handleTypePokemon()
    
}, [name])


  
  return (
    <div className='cardContainer' id={typePokemon}>
        <div className="cardHeader">
            <img src={img} alt={'imagem do pokemon' + {name}} />
            <span className='horizontal-line'></span>
        </div>
        <div className="cardDescription">
            <p> #{id} </p>
            <h2>{name} </h2>
            <p> Type: </p>
            <p>{typePokemon}</p> 
        </div>

        <Link to={`/pokemon/${name}`}> Detalhes </Link>

    </div>
  )
}

export default Card