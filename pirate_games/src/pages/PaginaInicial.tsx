import { FC } from "react";
import { PirateGamesContextProvider } from "./PirateGamesContext";
import { HeaderPirateGames } from "./PirateGames/components/Header/HeaderPirateGames";
import { FooterPirateGames } from "./PirateGames/components/Footer/FooterPirateGames";
import "./PantallaInicial.css";


const PaginaInicial: FC = () => {

    return (
        <PirateGamesContextProvider>
            <div>
                <HeaderPirateGames />
                <div>
                    <h1>Contenido</h1>
                </div>
                <FooterPirateGames />
            </div>
        </PirateGamesContextProvider>
    )
}

export { PaginaInicial }