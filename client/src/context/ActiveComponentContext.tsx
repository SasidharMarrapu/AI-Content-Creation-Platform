import { createContext, useState } from "react";
import { ComponentType } from "../constants/nav_items";

export const ActiveComponentContext = createContext();

export function ActiveComponentProvider({children}){
    const [activeComponent, setActiveComponent] = useState<ComponentType>("Home");
    return(
        <ActiveComponentContext.Provider value={{ activeComponent, setActiveComponent }}>
            {children}
        </ActiveComponentContext.Provider>
    )
}

export default ActiveComponentContext;