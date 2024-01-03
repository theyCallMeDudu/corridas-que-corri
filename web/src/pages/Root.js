import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import PagesCorridaSearch from "./Corrida/Search/Search";
import PagesCorridaShow from "./Corrida/Show/Show";

const Root = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PagesCorridaSearch />}/>
                <Route path='/corrida/:id' element={<PagesCorridaShow />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Root;