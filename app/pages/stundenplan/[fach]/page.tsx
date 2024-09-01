// app/stundenplan/[fach]/page.tsx
import { useRouter } from 'next/navigation';

interface StundenplanProps {
    params: {
        fach: string;
    };
}

const StundenplanFach = ({ params }: StundenplanProps) => {
    const { fach } = params;

    // Beispiel-Stundenpläne
    const stundenplaene: Record<string, string[]> = {
        wirtschaft: ['Mathe', 'Wirtschaft', 'Deutsch'],
        mechatronik: ['Mechanik', 'Elektrotechnik', 'Informatik'],
    };

    return (
        <div>
            <h1>Stundenplan für {fach}</h1>
            <ul>
                {stundenplaene[fach]?.map((fach, index) => (
                    <li key={index}>{fach}</li>
                ))}
            </ul>
        </div>
    );
};

export default StundenplanFach;
