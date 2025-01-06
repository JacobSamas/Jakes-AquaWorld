'use client';

import { useState, useEffect } from 'react';
import UserModal from '@/components/UserModal';

const UserManagementPage = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState(null);
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:5001/api/users', {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (response.ok) {
                const data = await response.json();
                setUsers(data.users);
            } else {
                setError('Failed to fetch user data');
            }
        } catch (err) {
            console.error('Error fetching user data:', err);
            setError('Something went wrong.');
        }
    };

    const handleAddOrUpdate = async (data) => {
        setError('');
        setSuccess('');

        try {
            const token = localStorage.getItem('token');
            const url = editingUser
                ? `http://localhost:5001/api/users/${editingUser.id}`
                : 'http://localhost:5001/api/users';
            const method = editingUser ? 'PUT' : 'POST';

            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const updatedUser = await response.json();
                if (editingUser) {
                    setUsers((prevUsers) =>
                        prevUsers.map((item) =>
                            item.id === editingUser.id ? updatedUser : item
                        )
                    );
                    setSuccess('User updated successfully!');
                } else {
                    setUsers((prevUsers) => [...prevUsers, updatedUser]);
                    setSuccess('User added successfully!');
                }
                setIsModalOpen(false);
                setEditingUser(null);
            } else {
                setError('Failed to add/update user');
            }
        } catch (err) {
            console.error('Error adding/updating user:', err);
            setError('Something went wrong.');
        }
    };

    const handleDelete = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(
                `http://localhost:5001/api/users/${userToDelete}`,
                {
                    method: 'DELETE',
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            if (response.ok) {
                setUsers((prevUsers) =>
                    prevUsers.filter((item) => item.id !== userToDelete)
                );
                setSuccess('User deleted successfully!');
            } else {
                setError('Failed to delete user');
            }
            setIsConfirmOpen(false);
        } catch (err) {
            console.error('Error deleting user:', err);
            setError('Something went wrong.');
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-6">Manage Users</h1>
            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mb-6"
            >
                Add User
            </button>
            {error && (
                <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">
                    {error}
                </div>
            )}
            {success && (
                <div className="bg-green-100 text-green-700 p-2 mb-4 rounded">
                    {success}
                </div>
            )}
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2">Name</th>
                        <th className="border border-gray-300 p-2">Email</th>
                        <th className="border border-gray-300 p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((item) => (
                        <tr key={item.id}>
                            <td className="border border-gray-300 p-2">{item.name}</td>
                            <td className="border border-gray-300 p-2">{item.email}</td>
                            <td className="border border-gray-300 p-2 flex gap-2">
                                <button
                                    onClick={() => {
                                        setEditingUser(item);
                                        setIsModalOpen(true);
                                    }}
                                    className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => {
                                        setUserToDelete(item.id);
                                        setIsConfirmOpen(true);
                                    }}
                                    className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isModalOpen && (
                <UserModal
                    isOpen={isModalOpen}
                    onClose={() => {
                        setIsModalOpen(false);
                        setEditingUser(null);
                    }}
                    onSubmit={handleAddOrUpdate}
                    initialData={editingUser || {}}
                />
            )}
            {isConfirmOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg">
                        <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
                        <p className="mb-6">Are you sure you want to delete this user?</p>
                        <div className="flex justify-between">
                            <button
                                onClick={() => setIsConfirmOpen(false)}
                                className="bg-gray-400 hover:bg-gray-500 text-white py-1 px-4 rounded"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDelete}
                                className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserManagementPage;
