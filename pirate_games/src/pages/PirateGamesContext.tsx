import { createContext } from "react";

type PirateGamesContextType = {
   
}

export const PirateGamesContext = createContext<PirateGamesContextType>(
    {} as PirateGamesContextType
);

export const PirateGamesContextProvider = ({ children }: any) => {

    return (
        <PirateGamesContext.Provider value={{

        }}>
            {children}
        </PirateGamesContext.Provider>
    );
}