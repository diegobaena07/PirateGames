import { FC } from "react";
import './Header.css';

const HeaderPirateGames: FC = () => {
  return (
    <header>
      <div className="back">
        <label htmlFor="menu">
          <img src="./HeaderLetrasPirateGames.svg" />
        </label>
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
        </div>
        Prueba de Rama DEV 
        */}
      </div>
    </header>
  );
};

export { HeaderPirateGames };
