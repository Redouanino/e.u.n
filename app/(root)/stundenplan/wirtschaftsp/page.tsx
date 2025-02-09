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
                        <tr className='bg-gray-200'>
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
                            <td className='border border-gray-800 px-4 py-2'>08:00-08:45</td>
                            <td className='border border-gray-800 px-4 py-2'>Chemie</td> {/* Montag */}
                            <td className='border border-gray-800 px-4 py-2'>Spani./Franz.</td> {/* Dienstag */}
                            <td className='border border-gray-800 px-4 py-2'>Mathe</td> {/* Mittwoch */}
                            <td className='border border-gray-800 px-4 py-2'>Wirtschaft</td>{/* donnerstag */}
                            <td className='border border-gray-800 px-4 py-2'>Ethik/Reli</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-800 px-4 py-2'>08:45-09:30</td>
                            <td className='border border-gray-800 px-4 py-2'>Chemie</td> {/* Montag */}
                            <td className='border border-gray-800 px-4 py-2'>Spani./Franz.</td> {/* Dienstag */}
                            <td className='border border-gray-800 px-4 py-2'>Mathe</td>{/* Mittwoch */}
                            <td className='border border-gray-800 px-4 py-2'>Wirtschaft</td>{/* donnerstag */}
                            <td className='border border-gray-800 px-4 py-2'>Ethik/Reli</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-800 px-4 py-2'>09:45-10:30</td>
                            <td className='border border-gray-800 px-4 py-2'>Physik</td> {/* Montag */}
                            <td className='border border-gray-800 px-4 py-2'>Englisch</td> {/* Dienstag */}
                            <td className='border border-gray-800 px-4 py-2'>Powi</td>{/* Mittwoch */}
                            <td className='border border-gray-800 px-4 py-2'>ReWe</td>{/* donnerstag */}
                            <td className='border border-gray-800 px-4 py-2'>Mathe</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-800 px-4 py-2'>10:30-11:15</td>
                            <td className='border border-gray-800 px-4 py-2'>Physik</td> {/* Montag */}
                            <td className='border border-gray-800 px-4 py-2'>Englisch</td> {/* Dienstag */}
                            <td className='border border-gray-800 px-4 py-2'>Powi</td>{/* Mittwoch */}
                            <td className='border border-gray-800 px-4 py-2'>ReWe</td>{/* donnerstag */}
                            <td className='border border-gray-800 px-4 py-2'>Mathe</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-800 px-4 py-2'>11:30-12:15</td>
                            <td className='border border-gray-800 px-4 py-2'>Deutsch</td> {/* Montag */}
                            <td className='border border-gray-800 px-4 py-2'>Geschichte</td> {/* Dienstag */}
                            <td className='border border-gray-800 px-4 py-2'>Sport</td>{/* Mittwoch */}
                            <td className='border border-gray-800 px-4 py-2'>Englisch</td>{/* donnerstag */}
                            <td className='border border-gray-800 px-4 py-2'>Wirtschaft</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-800 px-4 py-2'>12:15-13:00</td>
                            <td className='border border-gray-800 px-4 py-2'>Deutsch</td> {/* Montag */}
                            <td className='border border-gray-800 px-4 py-2'>Geschichte</td> {/* Dienstag */}
                            <td className='border border-gray-800 px-4 py-2'>Sport</td>{/* Mittwoch */}
                            <td className='border border-gray-800 px-4 py-2'>Englisch</td>{/* donnerstag */}
                            <td className='border border-gray-800 px-4 py-2'>Wirtschaft</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-800 px-4 py-2'>13:30-14:15</td>
                            <td className='border border-gray-800 px-4 py-2'>Tutor</td> {/* Montag */}
                            <td className='border border-gray-800 px-4 py-2'>Deutsch</td> {/* Dienstag */}
                            <td className='border border-gray-800 px-4 py-2'>DV</td>{/* Mittwoch */}
                            <td className='border border-gray-800 px-4 py-2'>Spani./Franz.</td>{/* donnerstag */}
                            <td className='border border-gray-800 px-4 py-2'>Wirtschaft</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-800 px-4 py-2'>14:15-15:00</td>
                            <td className='border border-gray-800 px-4 py-2'></td> {/* Montag */}
                            <td className='border border-gray-800 px-4 py-2'>Deutsch</td> {/* Dienstag */}
                            <td className='border border-gray-800 px-4 py-2'>DV</td>{/* Mittwoch */}
                            <td className='border border-gray-800 px-4 py-2'>Spani./Franz.</td>{/* donnerstag */}
                            <td className='border border-gray-800 px-4 py-2'></td>
                        </tr>
                        <tr>
                            <td className='border border-gray-800 px-4 py-2'>15:00-15:45</td>
                            <td className='border border-gray-800 px-4 py-2'></td> {/* Montag */}
                            <td className='border border-gray-800 px-4 py-2'></td> {/* Dienstag */}
                            <td className='border border-gray-800 px-4 py-2'>DV</td>{/* Mittwoch */}
                            <td className='border border-gray-800 px-4 py-2'></td>{/* donnerstag */}
                            <td className='border border-gray-800 px-4 py-2'></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}
