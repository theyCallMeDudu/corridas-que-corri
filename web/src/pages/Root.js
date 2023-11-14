import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import PagesCorridaSearch from "./Corrida/Search/Search";

const Root = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'  element={<PagesCorridaSearch />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Root;