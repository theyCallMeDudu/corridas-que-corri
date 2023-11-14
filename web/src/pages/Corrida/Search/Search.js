import React, { useEffect, useState } from "react";
import CorridaCard from "../../../components/Corrida/Card/Card";
import axios from 'axios';

const PagesCorridaSearch = () => {
    const [corridas, setCorridas] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/corridas')
            .then((response) => {
                setCorridas(response.data);
            });
    }, []);

    return (
        <div
        className="App"
        style={{
            maxWidth: 300,
            margin: '40px auto'
        }}
        >
            {corridas.map((corrida) => (
                <CorridaCard corrida={corrida} />
            ))}
        </div>
    );
}

export default PagesCorridaSearch;