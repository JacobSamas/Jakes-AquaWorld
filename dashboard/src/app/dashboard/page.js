'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const DashboardPage = () => {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/login'); 
        }
    }, [router]);

    return (
        <div>
            <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
            <p className="mt-2 text-gray-600">Here you can manage your aquarium data.</p>
        </div>
    );
};

export default DashboardPage;
