import { FC } from "react"
import { Carousel } from "../../components/Carousel/Carousel";
import { CaratulaJuego } from "../../components/CartaDeJuego/CaratulaJuego";
import { juegos, noticias } from "../TS/GeneralApi";
import "./InicioPirateGames.css";

const InicioPirateGames: FC = () => {
    return (
        <>
            <div className="body-cartas">
                <div className="back-carrusel">
                    <Carousel noticias={noticias} />
                </div>
                <div className="back-cartas">
                    <br />
                    <form className="search__container" onSubmit={(e) => e.preventDefault()} role="Buscar">
                        <input className="search__input" type="text" placeholder="Buscar..." required/>
                        <button type="submit" className="searchButton">
                            <i className="material-icons">search</i>
                        </button>
                    </form>
                    <div className="titulo-cartas">
                        <h3 className="titulo1">Juegos Agregados Recientemente</h3>
                    </div>
                    <div className="total-cartas">
                        {
                            juegos.map((item) => {
                                return (
                                    <div key={item.id} className="carta" onClick={(e) => (console.log(item.id))}>
                                        <CaratulaJuego
                                            imagen={item.imagen}
                                            nombre={item.nombre}
                                            region={item.region} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export { InicioPirateGames }