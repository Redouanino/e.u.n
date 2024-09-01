"use client";

import { useEffect, useState } from 'react';
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeToggle = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        // Lese das gespeicherte Thema aus localStorage oder benutze das Standardthema 'light'
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        setTheme(savedTheme);
    }, []);

    const toggleTheme = () => {
        // Wechsle zwischen 'light' und 'dark' Theme
        const newTheme = theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
    };

    return (
        <button onClick={toggleTheme} className="btn btn-primary">
            {/* Zeige das entsprechende Icon basierend auf dem aktuellen Theme */}
            {theme === 'light' ? (
                <MdDarkMode size={30} className="cursor-pointer" />
            ) : (
                <MdLightMode size={30} className="cursor-pointer" />
            )}
        </button>
    );
};

export default ThemeToggle;
