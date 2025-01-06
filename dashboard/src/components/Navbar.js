'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        } else {
            router.push('/login'); 
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem('token'); 
        setIsLoggedIn(false);
        router.push('/login'); 
    };

    return (
        <div className="bg-gray-900 text-white p-4 flex items-center justify-between">
            <h1 className="text-xl font-bold">Aquarium Dashboard</h1>
            <div>
                {isLoggedIn && (
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 hover:bg-red-700 text-white py-1 px-4 rounded"
                    >
                        Logout
                    </button>
                )}
            </div>
        </div>
    );
};

export default Navbar;
