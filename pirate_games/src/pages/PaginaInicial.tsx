import React, { FC } from "react";
import { PirateGamesContextProvider } from "./PirateGamesContext";
import { HeaderPirateGames } from "./PirateGames/components/HeaderPirateGames";
import { FooterPirateGames } from "./PirateGames/components/FooterPirateGames";


const PaginaInicial: FC = () => {

    return(
        <PirateGamesContextProvider>
            <div className="container">
                <header><HeaderPirateGames/></header>
                <div>
                    <h1>Contenido de la pagina</h1>
                </div>
                <footer><FooterPirateGames/></footer>
            </div>
        </PirateGamesContextProvider>
    )
}

export {PaginaInicial}