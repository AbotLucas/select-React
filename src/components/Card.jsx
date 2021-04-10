import React from 'react'
import './card.css'

function Card({ character }) {
    return (
        <div className='myCard'>
            <img src={character.image} alt={character.name} className='myCard__img' />
            <h3 className='myCard__title'>{character.name}</h3>
            <p className='myCard__txt'>{`${character.status} | ${character.species}`}</p>
        </div>
    )
}

export default Card
