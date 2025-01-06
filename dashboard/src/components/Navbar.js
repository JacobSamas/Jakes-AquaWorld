'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    const handleLogin = () => {
        setTimeout(() => {
            setIsLoggedIn(true);
            alert('Logged in successfully!');
        }, 500);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        router.push('/login'); 
    };

    return (
        <div className="bg-gray-900 text-white p-4 flex items-center justify-between">
            <h1 className="text-xl font-bold">Aquarium Dashboard</h1>
            <div>
                {isLoggedIn ? (
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 hover:bg-red-700 text-white py-1 px-4 rounded"
                    >
                        Logout
                    </button>
                ) : (
                    <button
                        onClick={handleLogin}
                        className="bg-green-500 hover:bg-green-700 text-white py-1 px-4 rounded"
                    >
                        Login
                    </button>
                )}
            </div>
        </div>
    );
};

export default Navbar;
