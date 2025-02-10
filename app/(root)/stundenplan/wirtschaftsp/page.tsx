"use client";

import React from 'react';
import '../../../../styles/globals.css';
import {cn} from "@/libs/utils";
import StundenplanTabelle from "@/app/(root)/stundenplan/components/stundenplanTabelle";

export default function StundenplanWirtschaft() {
    // Stundenplan-Daten: Erstes Array-Element = Uhrzeiten, danach folgen Wochentage
    const stundenplan = [
        ['Zeit', '8:00 - 8:45', '8:45 - 9:30', '9:45 - 10:30', '10:30 - 11:15', '11:30 - 12:15', '12:15 - 13:00', '13:30 - 14:15', '14:15 - 15:00', '15:00 - 15:45'],
        ['Montag', 'Chemie', 'Chemie', 'Physik', 'Physik', 'Deutsch', 'Deutsch', 'Tutor', '', ''],
        ['Dienstag', 'Spani./Franz.', 'Spani./Franz.', 'Englisch', 'Englisch', 'Geschichte', 'Geschichte', 'Deutsch', 'Deutsch', ''],
        ['Mittwoch', 'Mathe', 'Mathe', 'Powi', 'Powi', 'Sport', 'Sport', 'DV', 'DV', 'DV'],
        ['Donnerstag', 'Wirtschaft', 'Wirtschaft', 'ReWe', 'ReWe', 'Englisch', 'Englisch', 'Spani./Franz.', 'Spani./Franz.', ''],
        ['Freitag', 'Ethik/Reli', 'Ethik/Reli', 'Mathe', 'Mathe', 'Wirtschaft', 'Wirtschaft', 'Wirtschaft', '']
    ];

    // Transpose the stundenplan array
    const transposedStundenplan = stundenplan[0].map((_, colIndex) => stundenplan.map(row => row[colIndex]));

    return (
        <div className='min-h-full flex flex-col items-center'>
            <main className='max-w-5xl mx-auto px-4 py-8'>
                <div className='text-center flex flex-col gap-4'>
                    <h1 className='text-2xl font-bold mt-32'>
                        Stundenplan <span className='text-green-500'>Wirtschaft</span>
                    </h1>
                    <StundenplanTabelle stundenplan={transposedStundenplan}/>
                </div>
            </main>
        </div>
    );
}