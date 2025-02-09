import React from 'react';
import Link from 'next/link';

function Page() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="space-x-6">
                <Link href="/stundenplan/wirtschaftsp">
                    <button
                        className="px-12 py-5 bg-green-500 text-lg text-white rounded-lg hover:font-bold hover:outline hover:outline-2 hover:outline-gray-600 hover:outline-offset-2"
                    >
                        Wirtschaft
                    </button>
                </Link>
                <Link href="/stundenplan/mechatroniksp">
                    <button
                        className="px-12 py-5 bg-red-500 text-lg text-white rounded-lg hover:font-bold hover:outline hover:outline-2 hover:outline-gray-600 hover:outline-offset-2"
                    >
                        Mechatronik
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Page;
