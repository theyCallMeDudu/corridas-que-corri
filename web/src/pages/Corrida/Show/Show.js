import React from "react";
import { useParams } from "react-router-dom";
import UIContainer from "../../../components/UI/Container/Container";
import CorridaShow from "../../../components/Corrida/Show/Show";

const PagesCorridaShow = () => {
    const { id } = useParams();
    
    return (
        <UIContainer>
            <CorridaShow id={id ? parseInt(id, 10) : null} />
        </UIContainer>
    );
}

export default PagesCorridaShow;