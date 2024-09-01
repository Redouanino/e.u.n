// app/page.js (oder .tsx)
import '../../globals.css';
import Navbar from "@/app/components/Navbar";
import React from 'react';


export default async function Home() {

    return (
        <div className='min-h-full'>
            <Navbar/>
            <main className='max-w-4xl mx-auto px-4 py-8'>
                <div className='text-center flex flex-col gap-4'>
                    <h1 className='text-2xl font-bold mt-32'>Stundenplaner</h1>
                </div>
            </main>
        </div>


    );
}