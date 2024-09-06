"use client";

import AddTask from "../../components/Todo/AddTask";
import TodoList from "../../components/Todo/TodoList";
import '../../../styles/globals.css';
import React, {useEffect} from 'react';
import {Todo} from "@prisma/client";


export default function Home() {

    const fetchAllTodos = async () => {
        try {
            const res = await fetch('/api/todos', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json()
            setTasks(data)
        }catch (error) {
            console.error('Error fetching all todos')
        }
    }

    const [tasks, setTasks] = React.useState<Todo[] | null>(null);
    useEffect(() => {
        console.log('fetching all todos')

        fetchAllTodos()
    } , [])

    const handleRefetch = () => {
        fetchAllTodos()
    }

    return (
        <div className='min-h-full'>
            <main className='max-w-4xl mx-auto px-4 py-8'>
                <div className='text-center flex flex-col gap-4'>
                    <h1 className='text-2xl font-bold mt-32'>Todo Liste</h1>
                    <AddTask handleRefetch={handleRefetch}/>
                    <TodoList todos={tasks}/>
                </div>
            </main>
        </div>


    );
}