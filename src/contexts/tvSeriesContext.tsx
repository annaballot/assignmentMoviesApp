import React from "react";


interface TVSeriesContextInterface {

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