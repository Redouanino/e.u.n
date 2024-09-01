// app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions } from 'next-auth';

const authHandler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "admin" },
                password: { label: "Password", type: "password", placeholder: "admin" }
            },
            authorize: async (credentials) => {
                if (!credentials) {
                    return null;
                }

                // Beispielhafte einfache Authentifizierung
                if (credentials.username === 'admin' && credentials.password === 'admin') {
                    return { id: '1', name: 'Admin', role: 'admin' };
                }
                if (credentials.username === 'user' && credentials.password === 'user') {
                    return { id: '2', name: 'User', role: 'user' };
                }

                // Rückgabe von null, wenn Authentifizierung fehlschlägt
                return null;
            },
        }),
    ],
    pages: {
        signIn: '/login',
    },
    callbacks: {
        async session({ session, token }) {
            session.user = token;
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.role = user.role;
            }
            return token;
        },
    },
} as NextAuthOptions);

export { authHandler as GET, authHandler as POST };
