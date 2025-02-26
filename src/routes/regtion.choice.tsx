import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RegionChoice } from "../pages/RegtionChoice";

const RegionRoute: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RegionChoice />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RegionRoute;