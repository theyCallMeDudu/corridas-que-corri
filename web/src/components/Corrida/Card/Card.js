import React from 'react';
import './Card.css';

const CorridaCard = ({ corrida }) => (
    <div className='corrida-card'>
        <img 
            src={corrida.imageUrl}
            alt={corrida.title}
            className='corrida-card__image' />
        <div className='corrida-card__info'>
            <h1 className='corrida-card__title'>{corrida.title}</h1>
            <span className='corrida-card__distance'>{corrida.distance}km</span>
            <footer className='corrida-card__footer'>
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