import React, { useEffect, useState } from "react";
import useApi from "../../utils/useApi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Show.css';
import { Link } from "react-router-dom";

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
    const [loadCorrida, loadInfo] = useApi({
        url: `https://corridas-que-corri-api.firebaseapp.com/db.json`,
        method: 'GET',
        id: id,
        onCompleted: (response) => {
            let corridaEncontrada = response.data.corridas.find(corrida => corrida.id === id);
            let fotosCorridaEncontradas = response.data.fotosCorridas.filter(fotos => fotos.corridaId === id);
            if (corridaEncontrada !== null) {
                setValuesCorrida(corridaEncontrada);
            }

            if (fotosCorridaEncontradas !== null) {
                setValuesFotos(fotosCorridaEncontradas);
                console.log(valuesFotos, fotosCorridaEncontradas);
            }
        }
    });

    useEffect(() => {
        if (id) {
            loadCorrida();
        }
    }, [id]);

    // Configurações para o carrossel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

        return (
            <div className="corrida-search">
                <header className="corrida-search__header">
                    <Link to='/' className="corrida-show__link">
                        <h1>🏃 Corridas que corri</h1>
                    </Link>
                </header>
                
                <div className='corrida-show__card'>
                    {valuesCorrida && valuesFotos ? (
                        <>
                            <div className="corrida-show__header">
                                <div className="corrida-show__profile">
                                    {valuesCorrida.title && valuesCorrida.imageUrl && valuesCorrida.date && valuesCorrida.distance ? (
                                        <img 
                                            src={valuesCorrida.imageUrl}
                                            alt={valuesCorrida.title}
                                            className='corrida-card__image' 
                                        />
                                    ) : (
                                        <p>Aguardando dados...</p>
                                    )}

                                </div>
                                <div className='corrida-show__info'>
                                    <h1 className='corrida-show__title'>{valuesCorrida.title}</h1>
                                    <footer className='corrida-card__footer'>
                                        <span className='corrida-card__date'>{valuesCorrida.date}</span>
                                        <span className='corrida-card__distance'>{valuesCorrida.distance}km</span>
                                    </footer>
                                </div>
                            </div>
                            <div className="corrida-show__subtitle">
                                <h2>📸 Fotos da corrida</h2>
                            </div>
                            <div className='corrida-card__image'>
                                {/* Utilizando o Slider do react-slick */}
                                <Slider {...settings}>
                                    {valuesFotos.map((foto) => (
                                        <div key={foto.id}>
                                            <img 
                                                src={foto.imageUrl}
                                                alt={`Foto da corrida ${valuesCorrida.title}`}
                                                className='corrida-card__image' 
                                            />
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                            
                        </>
                    ) : (
                        <p>Carregando...</p>
                    )}
                    <div className="corrida-show__voltar">
                        <Link to='/' className="corrida-show__link">Voltar</Link>
                    </div>
                </div>
            
            </div>
        );
}

export default CorridaShow;