import "./CaratulaJuego.css";
import React from "react";

type CaratulaJuego = {
    imagen: string;
    nombre: string;
    region: string;
}

const CaratulaJuego = ({ imagen, nombre, region }: CaratulaJuego) => {
    return <>
        <div className="profile-after">
            <article className="profile">
                <div className="profile-image">
                    <img src={imagen} />
                </div>
                <h4 className="profile-username">{nombre}</h4>
                <small className="profile-user-handle">({region}) - ISO</small>
            </article>
        </div>
    </>
}

export { CaratulaJuego }