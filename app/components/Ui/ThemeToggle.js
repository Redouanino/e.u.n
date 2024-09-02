"use client";

import { useEffect, useState } from 'react';
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeToggle = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        setTheme(savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        console.log(`Switching to ${newTheme} theme`); // Log-Ausgabe hinzufügen
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
    };

    return (
        <button onClick={toggleTheme} className={`btn ${ theme === 'dark' && "btn-primary"}`}>
            {theme === 'light' ? <MdDarkMode className={"text-primary"} size={30} /> : <MdLightMode size={30} />}
        </button>
    );
};

export default ThemeToggle;
