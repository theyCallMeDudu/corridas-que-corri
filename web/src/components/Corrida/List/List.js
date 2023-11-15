import React from "react";
import './List.css';
import CorridaCard from "../Card/Card";

const CorridaList = ({ loading, corridas }) => {
    if (loading) {
        return <div>Carregando...</div>
    }

    return (
        <div className="corrida-list">
            {corridas.map((corrida) => (
                <CorridaCard corrida={corrida} />
            ))}
        </div>
    );
}

export default CorridaList;