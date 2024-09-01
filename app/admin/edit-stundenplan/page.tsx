// app/admin/edit-stundenplan/page.tsx
'use client';
import { useState, useEffect } from 'react';

interface EditStundenplanProps {
    params: { fach: string };
}

const EditStundenplan = ({ params }: EditStundenplanProps) => {
    const [kurse, setKurse] = useState<string[]>([]);

    useEffect(() => {
        const fetchStundenplan = async () => {
            const res = await fetch(`/api/stundenplan/${params.fach}`);
            const data = await res.json();
            setKurse(data.kurse || []);
        };

        fetchStundenplan();
    }, [params.fach]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const updatedKurse = formData.get('kurse')?.toString().split(',').map(s => s.trim()) || [];

        const res = await fetch(`/api/stundenplan/${params.fach}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ kurse: updatedKurse }),
        });

        const data = await res.json();
        if (res.ok) {
            alert('Stundenplan erfolgreich aktualisiert!');
        } else {
            alert('Fehler beim Aktualisieren des Stundenplans.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Stundenplan für {params.fach}</h1>
            <label>
                Kurse (durch Kommas getrennt):
                <input
                    type="text"
                    name="kurse"
                    value={kurse.join(', ')}
                    onChange={(e) => setKurse(e.target.value.split(',').map(s => s.trim()))}
                />
            </label>
            <button type="submit">Aktualisieren</button>
        </form>
    );
};

export default EditStundenplan;
