import { createContext, ReactNode, useState } from "react";

interface AppContextValue {
    bill: number;
    setBill: React.Dispatch<React.SetStateAction<number>>;
    tip: number;
    setTip: React.Dispatch<React.SetStateAction<number>>;
    numberOfPeople: number;
    setNumberOfPeople: React.Dispatch<React.SetStateAction<number>>;
    reset: () => void;
}

export const AppContext = createContext<AppContextValue>({} as AppContextValue);

export function AppProvider({ children }: { children: ReactNode }) {

    const [bill, setBill] = useState(0);
    const [tip, setTip] = useState(0);
    const [numberOfPeople, setNumberOfPeople] = useState(1);

    const reset = () => {
        setBill(0);
        setTip(0);
        setNumberOfPeople(1);
    }

    const store = {
        bill, setBill, tip, setTip, numberOfPeople, setNumberOfPeople, reset
    }
    
    return (
        <AppContext.Provider value={store}>
            {children}
        </AppContext.Provider>
    )
}