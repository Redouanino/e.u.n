// app/page.js (oder .tsx)
import { getAllTodos } from "@/api";
import AddTask from "../../components/AddTask";
import TodoList from "../../components/TodoList";
import '../../globals.css';
import dynamic from 'next/dynamic';
import Navbar from "@/app/components/Navbar";
import React from 'react';

// Dynamisch importieren der ThemeToggle-Komponente mit { ssr: false }
const ThemeToggle = dynamic(() => import('../../components/ThemeToggle'), { ssr: false });

export default async function Home() {
    const tasks = await getAllTodos();

    return (
        <div className='min-h-full'>
            <Navbar/>
            <main className='max-w-4xl mx-auto px-4 py-8'>
                <div className='text-center flex flex-col gap-4'>
                    <h1 className='text-2xl font-bold mt-32'>Todo List App</h1>
                    <AddTask/>
                    <TodoList tasks={tasks}/>
                </div>
            </main>
        </div>


    );
}