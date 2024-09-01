"use client";

import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";
import ThemeToggle from './ThemeToggle';
import '../../globals.css';
import EUNLight from '../../Images/EUN-light.png';
import EUNDark from '../../Images/EUN-dark.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [theme, setTheme] = useState('light'); // Zustand für das Theme

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    useEffect(() => {
        // Überwacht Änderungen am Theme
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }



    const logoSrc = theme === 'light' ? EUNLight : EUNDark; // Bestimme das Logo-Bild basierend auf dem Theme

    return (
        <>
            <nav
                className="fixed inset-x-0 top-0 w-full max-w-[95%] h-24 shadow-xl bg-[var(--navbar-bg)] text-[var(--navbar-text)] rounded-b-[24px] mx-auto z-10">
                <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                    {/*----------------------------------- Logo -----------------------------------*/}
                    <Link href="../../">
                        <Image
                            src={logoSrc}
                            alt="Logo"
                            width="140"
                            height="75"
                            className="cursor-pointer"
                            priority
                        />
                    </Link>

                    {/*----------------------------------- Desktop View -----------------------------------*/}
                    <div className="hidden sm:flex items-center space-x-4">
                        <ul className="flex items-center space-x-4">
                            <Link href="/pages/todo">
                                <li className="ml-10 uppercase hover:border-b text-xl">To Do Liste</li>
                            </Link>
                            <Link href="../../pages/stundenplan">
                                <li className="ml-10 uppercase hover:border-b text-xl">Stundenplan</li>
                            </Link>
                        </ul>
                        <ThemeToggle/> {/* ThemeToggle Button */}
                    </div>

                    {/*----------------------------------- Mobile Menu Button -----------------------------------*/}
                    <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
                        <AiOutlineMenu size={25}/>
                    </div>
                </div>
            </nav>

            {/*----------------------------------- Mobile Overlay -----------------------------------*/}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-20"
                    onClick={handleNav}
                />
            )}

            {/*----------------------------------- Mobile View -----------------------------------*/}
            <div
                className={`fixed left-0 top-0 w-[75%] sm:hidden h-screen p-6 ease-in-out duration-500 transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} z-30 bg-[#ecf0f3] dark:bg-gray-900`} // Hintergrundfarbe für Light und Dark Mode
            >
                <div className="flex w-full items-center justify-between">
                    <div onClick={handleNav} className="cursor-pointer">
                        <AiOutlineClose size={25}/>
                    </div>
                </div>
                <div className="flex flex-col py-4">
                    <ul className="flex flex-col">
                        <Link href="/pages/todo">
                            <li onClick={handleNav} className="py-4 cursor-pointer">To Do Liste</li>
                        </Link>
                        <Link href="/pages/stundenplan">
                            <li onClick={handleNav} className="py-4 cursor-pointer">Stundenplan</li>
                        </Link>
                    </ul>
                    <ThemeToggle/>
                </div>
                <div className="flex flex-row justify-around pt-10 items-center">
                    <AiOutlineInstagram size={30} className="cursor-pointer"/>
                    <AiOutlineTwitter size={30} className="cursor-pointer"/>
                    <AiOutlineGithub size={30} className="cursor-pointer"/>
                </div>
            </div>
        </>
    );
}

export default Navbar;