// app/login/page.tsx
'use client';
import { signIn } from 'next-auth/react';

const Login = () => {
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const username = (e.target as any).username.value;
        const password = (e.target as any).password.value;

        await signIn('credentials', { username, password });
    };

    return (
        <form onSubmit={handleLogin}>
            <label>
                Benutzername
                <input name="username" type="text" />
            </label>
            <label>
                Passwort
                <input name="password" type="password" />
            </label>
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
