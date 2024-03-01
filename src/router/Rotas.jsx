// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Sobre from "../pages/sobre/Sobre";
import Pag404 from "../pages/pag404/Pag404";
import Graficos from "../pages/graficos/Graficos";
import Relatar from "../pages/relatar/Relatar";
import Monitoramento from "../pages/monitoramento/Monitoramento";

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/monitoramento" element={ <Monitoramento /> } />
                <Route path="/sobre" element={ <Sobre /> } />
                <Route path="/graficos" element={ <Graficos /> } />
                <Route path="/relatar" element={ <Relatar /> } />
                <Route path="*" element={ <Pag404 /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas