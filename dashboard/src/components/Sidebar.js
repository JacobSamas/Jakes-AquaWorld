'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HomeIcon, UserGroupIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline'; // Correct v2 import

const Sidebar = () => {
    const pathname = usePathname();

    const menuItems = [
        { name: 'Overview', href: '/dashboard', icon: HomeIcon },
        { name: 'Manage Fish', href: '/dashboard/fish', icon: ClipboardDocumentListIcon },
        { name: 'Manage Users', href: '/dashboard/users', icon: UserGroupIcon },
    ];

    return (
        <div className="bg-gray-900 text-white w-64 h-screen p-6 shadow-md">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-100">Dashboard</h2>
            <nav>
                <ul className="space-y-4">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;

                        return (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={`flex items-center gap-4 p-3 rounded-lg ${
                                        isActive
                                            ? 'bg-gray-700 text-white'
                                            : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                                    } transition duration-200`}
                                >
                                    <item.icon className="h-6 w-6" />
                                    <span className="text-lg">{item.name}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
