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
            params.title_like = search;
        }

        axios.get('http://localhost:5000/corridas', { params })
            .then((response) => {
                setCorridas(response.data);
            });
    }, [search]);

    return (
        <div className="corrida-search">
            <header className="corrida-search__header">
                <h1>🏃‍♂️ Corridas que corri</h1>
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