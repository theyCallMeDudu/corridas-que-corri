import React, { useEffect, useState } from "react";
import axios from "axios";

const initialValueCorrida = {
    title: '',
    date: '',
    imageUrl: '',
    distance: 0
}

const initialValueFotos = {
    id: '',
    corridaId: '',
    imageUrl: '',
}

const CorridaShow = ({ id }) => {
    const [valuesCorrida, setValuesCorrida] = useState(id ? null : initialValueCorrida);
    const [valuesFotos, setValuesFotos] = useState(id ? null : initialValueFotos);

    useEffect(() => {
        if (id) {
            axios.get(`https://corridas-que-corri-api.firebaseapp.com/db.json`)
                .then((response) => {
                    const corridaEncontrada = response.data.corridas.find(corrida => corrida.id === id);
                    const fotosCorridaEncontradas = response.data.fotosCorridas.filter(fotos => fotos.corridaId === id);
    
                    if (corridaEncontrada) {
                        setValuesCorrida(corridaEncontrada);
                        console.log(corridaEncontrada, corridaEncontrada.title, valuesCorrida);
                    } else {
                        setValuesCorrida(initialValueCorrida); // Caso não encontre a corrida, define como initialValue
                    }
    
                    if (fotosCorridaEncontradas.length > 0) {
                        setValuesFotos(fotosCorridaEncontradas);
                        console.log(fotosCorridaEncontradas);
                    } else {
                        setValuesFotos([]); // Define como um array vazio se não encontrar fotos
                    }
                })
                .catch((error) => {
                    console.error('Erro ao buscar os dados:', error);
                    setValuesCorrida(initialValueCorrida);
                    setValuesFotos([]);
                });
        }
    }, [id]);

    return (
        <div className='corrida-card'>
        <div className='corrida-card__image'>

        </div>
        {/* <img 
            src={valuesCorrida.imageUrl}
            alt={valuesCorrida.title}
            className='corrida-card__image' /> */}
        {/* <div className='corrida-card__info'>
            <h1 className='corrida-card__title'>{valuesCorrida.title}</h1>
            <footer className='corrida-card__footer'>
                <span className='corrida-card__date'>{valuesCorrida.date}</span>
                <span className='corrida-card__distance'>{valuesCorrida.distance}km</span>
            </footer>
        </div> */}
    </div>

    );
}

export default CorridaShow;