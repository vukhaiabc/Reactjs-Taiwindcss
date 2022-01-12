import { useEffect, useState } from 'react';

function useDarkMode(props) {
    const [isDarkMode, setIsDarkMode] = useState(()=> localStorage.getItem('theme') === 'dark');

    const toggleDarkMode = () =>{
        setIsDarkMode(!isDarkMode)
    }
    useEffect(()=>{
        const html = window.document.documentElement
        const prev = isDarkMode ? "light" : "dark"
        html.classList.remove(prev)
        const next = isDarkMode ? "dark" : "light"
        html.classList.add(next)
        localStorage.setItem("theme",next)

    },[isDarkMode])
    return [isDarkMode,toggleDarkMode]
}

export default useDarkMode;