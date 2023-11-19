import "./Header.css";
import { FC, useContext } from "react";
import { PirateGamesContext } from "../../PirateGamesContext";

const HeaderPirateGames: FC = () => {

  const { setShowModal } = useContext(PirateGamesContext)

  return (
    <header>
      <div className="back">
        <div className="menu">
          <img src="./HeaderLetrasPirateGames.svg" className="logo" />
          <input type="checkbox" name="menu" id="menu" />
          <label htmlFor="menu">
            <img src="./menu_ICON.svg" className="icon-opciones" alt="" />
          </label>
          <nav className="opciones">
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Buscar</a>
                {/* <ul>
                  <li><a href="#">Categorias</a></li>
                  <li><a href="#">Mas Populares</a></li>
                </ul> */}
              </li>
              <li><a href="#">Como Descargar</a></li>
              <li><button className="btn_pirate" onClick={() => setShowModal(true)}><a>CONTACTANOS</a></button></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export { HeaderPirateGames };
