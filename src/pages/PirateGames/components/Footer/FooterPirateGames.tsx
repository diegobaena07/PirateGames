import { FC, useContext } from "react";
import "./FooterPirateGames.css";
import { PirateGamesContext } from "../../PirateGamesContext";

const FooterPirateGames: FC = () => {

    const { setShowModal } = useContext(PirateGamesContext)

    return (
        <footer>
            <div className="backFooter">
                <img className="logoFooter" src="./LOGO.png" alt="" />
                <div className="redes_sociales">
                    <a href="" className="iconos_redes"></a>
                    <a href="" className="iconos_redes"></a>
                    <a href="" className="iconos_redes"></a>
                </div>
                <ul className="menu_footer">
                    <li className="opciones"><a href="#">Inicio</a></li>
                    <li className="opciones"><a href="#">Como Descargar</a></li>
                    <li className="opciones"><a href="#" onClick={() => setShowModal(true)}>Contactanos</a></li>
                </ul>
                <span className="copyright">&copy;2020, Pirate Games.</span>
            </div>
        </footer>
    )
}

export { FooterPirateGames }