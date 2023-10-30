import { FC } from "react";
import "./FooterPirateGames.css";

const FooterPirateGames: FC = () => {

    return (
        <footer>
            <div className="backFooter">
                <img className="logoFooter" src="./img/LOGO.png" alt="" />
                <div className="redes_sociales">
                    <a href="" className="iconos_redes"></a>
                    <a href="" className="iconos_redes"></a>
                    <a href="" className="iconos_redes"></a>
                </div>
                <ul className="menu_footer">
                    <li className="opciones"><a href="#">Inicio</a></li>
                    <li className="opciones"><a href="#">Como Descargar</a></li>
                    <li className="opciones"><a href="#">Contactanos</a></li>
                </ul>
                <span className="copyright">&copy;2020, Pirate Games.</span>
            </div>
        </footer>
    )
}

export { FooterPirateGames }