import { FC } from "react";
import './Header.css';

const HeaderPirateGames: FC = () => {
  return (
    <header>
      <div className="back">
        <div className="logo">
          <label htmlFor="menu">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/PlayStation_logo_and_wordmark.svg/2560px-PlayStation_logo_and_wordmark.svg.png" />
          </label>
        </div>
        <div className="menu">
          <nav>
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Buscar</a>
                <ul>
                  <li><a href="#">Categorias</a></li>
                  <li><a href="#">Mas Populares</a></li>
                </ul>
              </li>
              <li><a href="#">Como Descargar</a></li>
              <li><a href="#">Contactanos</a></li>
            </ul>
          </nav>
        </div>
        {/* <div className="search">
          <input type="search" placeholder="¿Que Juego deseas buscar?" />
        </div> */}
      </div>
    </header>
  );
};

export { HeaderPirateGames };
