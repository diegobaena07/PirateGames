import { FC } from "react";
import { PirateGamesContextProvider } from "./PirateGamesContext";
import { HeaderPirateGames } from "./PirateGames/components/Header/HeaderPirateGames";
import { FooterPirateGames } from "./PirateGames/components/Footer/FooterPirateGames";
import { InicioPirateGames } from "./PirateGames/pages/InicioPirateGames/InicioPirateGames";
import "./PantallaInicial.css";

const PaginaInicial: FC = () => {

    return (
        <PirateGamesContextProvider>
            <div className="fondo">
                <HeaderPirateGames />
                <div className="body-inicial">
                    <InicioPirateGames />
                </div>
            </div>
        </PirateGamesContextProvider>
    )
}

export { PaginaInicial }