import React, { useState, useCallback } from "react";
import { BaseTVSeriesProps } from "../types/interfaces";

interface TVSeriesContextInterface {
    favourites: number[];
    mustWatch: number[];
    addToFavourites: ((movie: BaseTVSeriesProps) => void);
    removeFromFavourites: ((movie: BaseTVSeriesProps) => void);
    addReview: ((movie: BaseTVSeriesProps) => void); 
    addToMustWatch: ((movie: BaseTVSeriesProps) => void);
}
const initialContextState: TVSeriesContextInterface = {
};

export const TVSeriesContext = React.createContext<TVSeriesContextInterface>(initialContextState);

const TVSeriesContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {

 return (
        <TVSeriesContext.Provider
            value={{
               
                
            }}
        >
            {children}
        </TVSeriesContext.Provider>
    );
};

export default TVSeriesContextProvider;