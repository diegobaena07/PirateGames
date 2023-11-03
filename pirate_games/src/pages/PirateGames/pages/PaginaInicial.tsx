import { FC } from "react";
import { HeaderPirateGames } from "../components/Header/HeaderPirateGames";
import { FooterPirateGames } from "../components/Footer/FooterPirateGames";
import { InicioPirateGames } from "./InicioPirateGames/InicioPirateGames";
import "./PantallaInicial.css";

const PaginaInicial: FC = () => {

    return (
        <div className="fondo">
            <HeaderPirateGames />
            <div className="body-inicial">
                <InicioPirateGames />
            </div>
            <FooterPirateGames />
        </div>
    )
}

export { PaginaInicial }