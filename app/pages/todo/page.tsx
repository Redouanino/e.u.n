// app/page.js (oder .tsx)
import { getAllTodos } from "@/api";
import AddTask from "../../components/Todo/AddTask";
import TodoList from "../../components/Todo/TodoList";
import '../../globals.css';
import Navbar from "@/app/components/Ui/Navbar";
import React from 'react';

// Dynamisch importieren der ThemeToggle-Komponente mit { ssr: false }


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