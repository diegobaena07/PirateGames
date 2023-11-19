import "./PantallaInicial.css";
import { FC, useContext } from "react";
import { HeaderPirateGames } from "../components/Header/HeaderPirateGames";
import { FooterPirateGames } from "../components/Footer/FooterPirateGames";
import { InicioPirateGames } from "./InicioPirateGames/InicioPirateGames";
import { PirateGamesContext } from "../PirateGamesContext";
import { Contactanos } from "./Contactanos/Contactanos";

const PaginaInicial: FC = () => {

    const { showModal } = useContext(PirateGamesContext)

    return (
        <>
            <div className="fondo">
                <HeaderPirateGames />
                <div className="body-inicial">
                    <InicioPirateGames />
                </div>
                <FooterPirateGames />
            </div>
            {showModal && <Contactanos/>}
        </>
    )
}

export { PaginaInicial }