import { useEffect, useState } from "react"

const useDarkMode = (): [boolean, () => void] => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedMode = localStorage.getItem('theme');
        if(storedMode) {
            setIsDarkMode(storedMode === 'dark' );
            document.documentElement.classList.toggle('dark', storedMode === 'dark');
        } else {
            const systemPref = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setIsDarkMode(systemPref);
            document.documentElement.classList.toggle('dark', systemPref);
        }
    }, [])

    function toggleDark(): void{
        setIsDarkMode( prevMode => {
            const newMode = !prevMode;
            document.documentElement.classList.toggle('dark', newMode);
            localStorage.setItem('theme', (newMode ? 'dark' : 'light'))
            return newMode;
        });
    };

    return [isDarkMode, toggleDark];
}

export default useDarkMode