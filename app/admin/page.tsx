// app/admin/page.tsx
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../api/auth/[...nextauth]/route';  // Pfad zur Auth-Konfiguration

declare module 'next-auth' {
    interface Session {
        user: {
            id: string;
            role: string; // Hier erweitern wir den Typ um das role-Feld
        };
    }
}

const AdminPage = async () => {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== 'admin') {
        redirect('/login');
    }

    return <h1>Admin Dashboard</h1>;
};

export default AdminPage;
