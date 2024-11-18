import React, {createContext, ReactNode, useContext, useState} from "react";

interface VisibilityContextType {
    isVisible: boolean;
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const VisibilityContext = createContext<VisibilityContextType|undefined>(undefined);

export const VisibilityProvider:React.FC<{children:ReactNode}> = ({children}) => {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <VisibilityContext.Provider value={{ isVisible, setIsVisible }}>
            {children}
        </VisibilityContext.Provider>
    )
}

export const useVisibility = ():VisibilityContextType => {
    const context  = useContext(VisibilityContext);
    if(!context){
        throw new Error("useVisibility must be used within a VisibilityProvider");
    }
    return context
}