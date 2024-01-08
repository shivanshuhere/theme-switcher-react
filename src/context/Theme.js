import { useContext, createContext } from "react";

const ThemeConext = createContext({
    currTheme: "light",
    darkTheme: () => {},
    lightTheme: () => {},
});

export const ThemeProvider = ThemeConext.Provider;

export default function useTheme() {
    return useContext(ThemeConext);
}
