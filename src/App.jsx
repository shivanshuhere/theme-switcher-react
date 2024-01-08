import { useState, useEffect } from "react";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeProvider } from "./context/Theme";

function App() {
    const [currTheme, setCurrTheme] = useState("light");
    const lightTheme = () => {
        setCurrTheme("light");
    };

    const darkTheme = () => {
        setCurrTheme("dark");
    };

    useEffect(() => {
        const html = document.querySelector("html");
        html.classList.remove("light", "dark");
        html.classList.add(currTheme);
    }, [currTheme]);

    return (
        <>
            <ThemeProvider value={{ currTheme, lightTheme, darkTheme }}>
                <div className="flex flex-wrap min-h-screen items-center">
                    <div className="w-full">
                        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                            <ThemeBtn />
                        </div>

                        <div className="w-full max-w-sm mx-auto">
                            <Card />
                        </div>
                    </div>
                </div>
            </ThemeProvider>
        </>
    );
}

export default App;
