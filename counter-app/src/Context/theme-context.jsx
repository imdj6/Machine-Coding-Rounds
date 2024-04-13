import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(true);
    const toggleTheme = () => {
        setTheme((prev) => !prev)
    }
    const thme = theme ? "dark" : "light"
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", thme)
    }, [theme])
    return (
        <ThemeContext.Provider value={{
            theme,
            toggleTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    )
}