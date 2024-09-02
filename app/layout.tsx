import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import './globals.css';
import Navbar from "@/app/components/Ui/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="en">
            <body className="flex flex-col min-h-screen">
            <header className="fixed top-0 w-full z-10">
                <Navbar />
            </header>
            <div className="pt-32 flex-grow">
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <main>{children}</main>
            </div>
            </body>
            </html>
        </ClerkProvider>
    );
}
