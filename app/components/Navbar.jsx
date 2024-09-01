"use client";

import Image from "next/image";
import EUN from '../Images/EUN.png';
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";
import { useState } from "react";
import '../globals.css';
import ThemeToggle from './ThemeToggle';  // Importiere die ThemeToggle-Komponente

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className="fixed w-full h-24 shadow-xl bg-[var(--navbar-bg)] text-[var(--navbar-text)]">
            <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                <Link href="/">
                    <Image
                        src={EUN}
                        alt="Logo"
                        width="140"
                        height="75"
                        className="cursor-pointer"
                        priority
                    />
                </Link>
                <div className="flex items-center space-x-4"> {/* Flexbox für die Navbar-Elemente */}
                    <div className="hidden sm:flex items-center space-x-4"> {/* Horizontale Anordnung für größere Bildschirme */}
                        <ul className="flex items-center space-x-4">
                            <Link href="/pages/todo">
                                <li className="ml-10 uppercase hover:border-b text-xl">To Do Liste</li>
                            </Link>
                            <Link href="/pages/stundenplan">
                                <li className="ml-10 uppercase hover:border-b text-xl">Stundenplan</li>
                            </Link>
                        </ul>
                        <ThemeToggle /> {/* Füge den ThemeToggle Button hier hinzu */}
                    </div>
                    <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            <div className={`fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] dark:bg-gray-900 p-10 ease-in-out duration-500 transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex w-full items-center justify-between">
                    <div onClick={handleNav} className="cursor-pointer">
                        <AiOutlineClose size={25} />
                    </div>
                </div>
                <div className="flex flex-col py-4">
                    <ul className="flex flex-col">
                        <Link href="/pages/todo">
                            <li onClick={handleNav} className="py-4 cursor-pointer">To Do List</li>
                        </Link>
                    </ul>
                </div>
                <div className="flex flex-row justify-around pt-10 items-center">
                    <AiOutlineInstagram size={30} className="cursor-pointer" />
                    <AiOutlineTwitter size={30} className="cursor-pointer"/>
                    <AiOutlineGithub size={30} className="cursor-pointer"/>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
