import { FC } from "react";
import { PirateGamesContextProvider } from "./PirateGamesContext";
import { HeaderPirateGames } from "./PirateGames/components/HeaderPirateGames";
import { FooterPirateGames } from "./PirateGames/components/FooterPirateGames";


const PaginaInicial: FC = () => {

    return (
        <PirateGamesContextProvider>
            <div>
                <HeaderPirateGames />
                <div>
                    <h1>Contenido</h1>
                </div>
            </div>
        </PirateGamesContextProvider>
    )
}

export { PaginaInicial }