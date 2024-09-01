// app/stundenplan/page.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Stundenplan = () => {
    const [fach, setFach] = useState<string | null>(null);
    const router = useRouter();

    const handleSelection = (selectedFach: string) => {
        setFach(selectedFach);
        router.push(`/stundenplan/${selectedFach}`);
    };

    return (
        <div>
            <h1>Wählen Sie Ihren Bereich</h1>
            <button onClick={() => handleSelection('wirtschaft')}>Wirtschaft</button>
            <button onClick={() => handleSelection('mechatronik')}>Mechatronik</button>
        </div>
    );
};

export default Stundenplan;
