import React from 'react';
import './Card.css';

const CorridaCard = ({ corrida }) => (
    <div className='corrida-card'>
        <div className='corrida-card__image'>

        </div>
        <img 
            src={corrida.imageUrl}
            alt={corrida.title}
            className='corrida-card__image' />
        <div className='corrida-card__info'>
            <h1 className='corrida-card__title'>{corrida.title}</h1>
            <footer className='corrida-card__footer'>
                <span className='corrida-card__date'>{corrida.date}</span>
                <span className='corrida-card__distance'>{corrida.distance}km</span>
                <a 
                    href={'https://google.com'}
                    rel='nooperner'
                    className='corrida-card_link'               
                >
                    VER MAIS
                </a>
            </footer>
        </div>
    </div>
);

export default CorridaCard;