import { Carousel } from "../../components/Carousel/Carousel";
import { CaratulaJuego } from "../../components/CartaDeJuego/CaratulaJuego";
import "./InicioPirateGames.css";
import { FC } from "react"


const InicioPirateGames: FC = () => {
    return (
        <>
            <div className="body-cartas">
                <div className="back-search">
                    <Carousel/>
                </div>
                <div className="back-cartas">
                    <div className="titulo-cartas">
                        <h3 className="titulo1">Juegos Agregados Recientemente</h3>
                    </div>
                    <div className="total-cartas">
                        <div className="carta">
                            <CaratulaJuego
                                imagen="https://img.asmedia.epimg.net/resizer/lqsy7mJHPWIbj45aTSL7gwZY4U8=/360x0/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/KJSGVNUE3ZJSFLZ5MUJVKHHILY.jpg"
                                nombre="Grand Theft Auto: San Andreas"
                                region="Ntfs-Pal" />
                        </div>
                        <div className="carta">
                            <CaratulaJuego
                                imagen="./img/Need for Speed Most Wanted.jpg"
                                nombre="Need for Speed Most Wanted"
                                region="Ntfs-Pal" />
                        </div>
                        <div className="carta">
                            <CaratulaJuego
                                imagen="./img/Bully Canis Canem Edit.jpg"
                                nombre="Bully Canis Canem Edit"
                                region="Ntfs-Pal" />
                        </div>
                        <div className="carta">
                            <CaratulaJuego
                                imagen="./img/DBZ Budokai Tenkaichi 3.jpg"
                                nombre="DBZ Budokai Tenkaichi 3"
                                region="Ntfs-Pal" />
                        </div>
                        <div className="carta">
                            <CaratulaJuego
                                imagen="./img/PES 2020 3.0 FINAL.jpg"
                                nombre="PES 2020 3.0 FINAL"
                                region="Ntfs-Pal" />
                        </div>
                        <div className="carta">
                            <CaratulaJuego
                                imagen="./img/Naruto Ultimate Ninja 3.jpg"
                                nombre="Naruto Ultimate Ninja 3"
                                region="Ntfs-Pal" />
                        </div>
                        <div className="carta">
                            <CaratulaJuego
                                imagen="https://img.asmedia.epimg.net/resizer/lqsy7mJHPWIbj45aTSL7gwZY4U8=/360x0/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/KJSGVNUE3ZJSFLZ5MUJVKHHILY.jpg"
                                nombre="Grand Theft Auto: San Andreas"
                                region="Ntfs-Pal" />
                        </div>
                        <div className="carta">
                            <CaratulaJuego
                                imagen="https://img.asmedia.epimg.net/resizer/lqsy7mJHPWIbj45aTSL7gwZY4U8=/360x0/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/KJSGVNUE3ZJSFLZ5MUJVKHHILY.jpg"
                                nombre="Grand Theft Auto: San Andreas"
                                region="Ntfs-Pal" />
                        </div>
                        <div className="carta">
                            <CaratulaJuego
                                imagen="https://img.asmedia.epimg.net/resizer/lqsy7mJHPWIbj45aTSL7gwZY4U8=/360x0/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/KJSGVNUE3ZJSFLZ5MUJVKHHILY.jpg"
                                nombre="Grand Theft Auto: San Andreas"
                                region="Ntfs-Pal" />
                        </div>
                        <div className="carta">
                            <CaratulaJuego
                                imagen="https://img.asmedia.epimg.net/resizer/lqsy7mJHPWIbj45aTSL7gwZY4U8=/360x0/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/KJSGVNUE3ZJSFLZ5MUJVKHHILY.jpg"
                                nombre="Grand Theft Auto: San Andreas"
                                region="Ntfs-Pal" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { InicioPirateGames }