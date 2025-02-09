"use client";

import React, { useEffect, useState } from 'react';
import '../../../../styles/globals.css';

export default function Stundenplan() {
    return (
        <div className='min-h-full'>
            <main className='max-w-4xl mx-auto px-4 py-8'>
                <div className='text-center flex flex-col gap-4'>
                    <h1 className='text-2xl font-bold mt-32'>Stundenplan</h1>
                    <table className='w-full border-collapse border border-gray-800'>
                        <thead>
                        <tr className='bg-gray-800'>
                            <th className='border border-gray-800 px-4 py-2'>Zeit</th>
                            <th className='border border-gray-800 px-4 py-2'>Montag</th>
                            <th className='border border-gray-800 px-4 py-2'>Dienstag</th>
                            <th className='border border-gray-800 px-4 py-2'>Mittwoch</th>
                            <th className='border border-gray-800 px-4 py-2'>Donnerstag</th>
                            <th className='border border-gray-800 px-4 py-2'>Freitag</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className='border border-gray-800 px-4 py-2'>08:00-09:30</td>
                            <td className='border border-gray-800 px-4 py-2'>Chemie</td>
                            <td className='border border-gray-800 px-4 py-2'>Spani./Franz.</td>
                            <td className='border border-gray-800 px-4 py-2'>Mathe</td>
                            <td className='border border-gray-800 px-4 py-2'>Mechatronik</td>
                            <td className='border border-gray-800 px-4 py-2'>Ethik/Reli</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-800 px-4 py-2'>09:00-11:15</td>
                            <td className='border border-gray-800 px-4 py-2'>Physik</td>
                            <td className='border border-gray-800 px-4 py-2'>Englisch</td>
                            <td className='border border-gray-800 px-4 py-2'>Powi</td>
                            <td className='border border-gray-800 px-4 py-2'>Mechatronik</td>
                            <td className='border border-gray-800 px-4 py-2'>Mathe</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-800 px-4 py-2'>11:30-13:00</td>
                            <td className='border border-gray-800 px-4 py-2'>Deutsch</td>
                            <td className='border border-gray-800 px-4 py-2'>Geschichte</td>
                            <td className='border border-gray-800 px-4 py-2'>Sport</td>
                            <td className='border border-gray-800 px-4 py-2'>Englisch</td>
                            <td className='border border-gray-800 px-4 py-2'>Mechatronik</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-800 px-4 py-2'>13:30-15:00</td>
                            <td className='border border-gray-800 px-4 py-2'>Tutor</td>
                            <td className='border border-gray-800 px-4 py-2'>Deutsch</td>
                            <td className='border border-gray-800 px-4 py-2'>Mechatronik</td>
                            <td className='border border-gray-800 px-4 py-2'>Spani./Franz.</td>
                            <td className='border border-gray-800 px-4 py-2'>TEKO</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}
