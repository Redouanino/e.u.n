import '../styles/globals.css';
import Navbar from "@/app/components/Ui/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
            <html lang="en">
            <body className="flex flex-col min-h-screen bg-base-100">
            <Navbar />
                <main>{children}</main>
            </body>
            </html>
    );
}
