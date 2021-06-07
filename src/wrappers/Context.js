import { createContext, useState } from 'react';

export const AppContextState = createContext();

export function AppContext({ children }) {
    const [user, setUser] = useState();

    return (
        <AppContextState.Provider value={{ user, setUser }}>
            {children}
        </AppContextState.Provider>
    );
}
