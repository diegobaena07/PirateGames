import { FC, useContext } from "react";
import { PirateGamesContext } from "../../PirateGamesContext";

const Contactanos: FC = () =>{

    const { setShowModal } = useContext(PirateGamesContext)

    return (
        <>
            <div className="container" style={{background: "red"}}>
                <h1>
                    HOLA
                </h1>
                <button onClick={() => setShowModal(false)}>CERRAR</button>
            </div>
        </>
    )
}

export{Contactanos}