import React, { useEffect, useState } from 'react'


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
    <div className='cardContainer'>
        <div className="cardHeader">
            <img src={img} alt={'imagem do pokemon' + {name}} />
            <span className='horizontal-line'></span>
        </div>
        <div className="cardDescription">
            <p> #{id} </p>
            <p>{name} </p>
            <p> Type: </p>
            <p>{typePokemon}</p> 
        </div>

        <a href="#"> Detalhes </a>

    </div>
  )
}

export default Card