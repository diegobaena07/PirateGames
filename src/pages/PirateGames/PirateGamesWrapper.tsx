import { FC } from "react";
import { PirateGamesProvider } from "./PirateGamesContext";
import { PaginaInicial } from "./pages/PaginaInicial";

const PirateGamesWrapper: FC = () => {

    return (
        <>
        <PirateGamesProvider>
            <PaginaInicial/>
        </PirateGamesProvider>
        </>
    )

}

export { PirateGamesWrapper }