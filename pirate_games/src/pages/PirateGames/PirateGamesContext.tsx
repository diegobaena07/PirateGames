import { createContext, useState } from "react";

type PirateGamesContextType = {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PirateGamesContext = createContext<PirateGamesContextType>(
    {} as PirateGamesContextType
);

export const PirateGamesProvider = ({ children }: any) => {

    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <PirateGamesContext.Provider value={{
            showModal,
            setShowModal
        }}>
            {children}
        </PirateGamesContext.Provider>
    );
}