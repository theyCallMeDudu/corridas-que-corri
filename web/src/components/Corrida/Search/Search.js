import React, { useEffect, useState } from "react";
import axios from 'axios';
import './Search.css';
import CorridaList from "../List/List";

const CorridaSearch = () => {
    const [corridas, setCorridas] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const params = {};
    
        if (search) {
            // Utilizando uma expressão regular para buscar o termo no título da corrida
            const regex = new RegExp(search, 'i'); // 'i' torna a busca case-insensitive
    
            axios.get('https://corridas-que-corri-api.firebaseapp.com/db.json')
                .then((response) => {
                    let corridasFiltradas = response.data.corridas.filter(corrida => regex.test(corrida.title));
                    setCorridas(corridasFiltradas);
                    console.log(corridasFiltradas);
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            axios.get('https://corridas-que-corri-api.firebaseapp.com/db.json')
                .then((response) => {
                    setCorridas(response.data.corridas);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [search]);

    return (
        <div className="corrida-search">
            <header className="corrida-search__header">
                <h1>🏃 Corridas que corri</h1>
            </header>
            <input
                type="search"
                className="corrida-search__input"
                placeholder="Buscar"
                value={search}
                onChange={(evento) => setSearch(evento.target.value)} />
                <CorridaList corridas={corridas} loading={!corridas.length} />
        </div>
    );
}

export default CorridaSearch;