import { Juego } from "../../Interface/General";
import { Carousel } from "../../components/Carousel/Carousel";
import { CaratulaJuego } from "../../components/CartaDeJuego/CaratulaJuego";
import "./InicioPirateGames.css";
import { FC } from "react"

const juegos: Array<Juego> = [
    {
        id: 1,
        imagen: "https://img.asmedia.epimg.net/resizer/lqsy7mJHPWIbj45aTSL7gwZY4U8=/360x0/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/KJSGVNUE3ZJSFLZ5MUJVKHHILY.jpg",
        nombre: "Grand Theft Auto: San Andreas",
        region: "Ntfs-Pal",
    },
    {
        id: 2,
        imagen: "./img/Need for Speed Most Wanted.jpg",
        nombre: "Need for Speed Most Wanted",
        region: "Ntfs-Pal",
    },
    {
        id: 3,
        imagen: "./img/Naruto Ultimate Ninja 3.jpg",
        nombre: "Naruto Ultimate Ninja 3",
        region: "Ntfs-Pal",
    },
    {
        id: 4,
        imagen: "./img/PES 2020 3.0 FINAL.jpg",
        nombre: "PES 2020 3.0 FINAL",
        region: "Ntfs-Pal",
    },
    {
        id: 5,
        imagen: "./img/DBZ Budokai Tenkaichi 3.jpg",
        nombre: "DBZ Budokai Tenkaichi 3",
        region: "Ntfs-Pal",
    },
    {
        id: 6,
        imagen: "./img/Bully Canis Canem Edit.jpg",
        nombre: "Bully Canis Canem Edit",
        region: "Ntfs-Pal",
    },
];

const InicioPirateGames: FC = () => {
    return (
        <>
            <div className="body-cartas">
                <div className="back-carrusel">
                    <Carousel />
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
                                    <div key={item.id} className="carta">
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