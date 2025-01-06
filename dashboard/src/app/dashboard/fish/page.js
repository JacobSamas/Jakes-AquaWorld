'use client';

import { useState, useEffect } from 'react';
import FishModal from '@/components/FishModal';

const FishManagementPage = () => {
    const [fish, setFish] = useState([]);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingFish, setEditingFish] = useState(null);
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [fishToDelete, setFishToDelete] = useState(null);

    useEffect(() => {
        fetchFishData();
    }, []);

    const fetchFishData = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:5001/api/fish', {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (response.ok) {
                const data = await response.json();
                setFish(data.fish);
            } else {
                setError('Failed to fetch fish data');
            }
        } catch (err) {
            console.error('Error fetching fish data:', err);
            setError('Something went wrong.');
        }
    };

    const handleAddOrUpdate = async (data) => {
        setError('');
        setSuccess('');

        try {
            const token = localStorage.getItem('token');
            const url = editingFish
                ? `http://localhost:5001/api/fish/${editingFish.id}`
                : 'http://localhost:5001/api/fish';
            const method = editingFish ? 'PUT' : 'POST';

            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const updatedFish = await response.json();
                if (editingFish) {
                    setFish((prevFish) =>
                        prevFish.map((item) =>
                            item.id === editingFish.id ? updatedFish : item
                        )
                    );
                    setSuccess('Fish updated successfully!');
                } else {
                    setFish((prevFish) => [...prevFish, updatedFish]);
                    setSuccess('Fish added successfully!');
                }
                setIsModalOpen(false);
                setEditingFish(null);
            } else {
                setError('Failed to add/update fish');
            }
        } catch (err) {
            console.error('Error adding/updating fish:', err);
            setError('Something went wrong.');
        }
    };

    const handleDelete = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(
                `http://localhost:5001/api/fish/${fishToDelete}`,
                {
                    method: 'DELETE',
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            if (response.ok) {
                setFish((prevFish) =>
                    prevFish.filter((item) => item.id !== fishToDelete)
                );
                setSuccess('Fish deleted successfully!');
            } else {
                setError('Failed to delete fish');
            }
            setIsConfirmOpen(false);
        } catch (err) {
            console.error('Error deleting fish:', err);
            setError('Something went wrong.');
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-6">Manage Fish</h1>
            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mb-6"
            >
                Add Fish
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
                        <th className="border border-gray-300 p-2">Species</th>
                        <th className="border border-gray-300 p-2">Price</th>
                        <th className="border border-gray-300 p-2">Description</th>
                        <th className="border border-gray-300 p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {fish.map((item) => (
                        <tr key={item.id}>
                            <td className="border border-gray-300 p-2">{item.name}</td>
                            <td className="border border-gray-300 p-2">{item.species}</td>
                            <td className="border border-gray-300 p-2">${item.price}</td>
                            <td className="border border-gray-300 p-2">{item.description}</td>
                            <td className="border border-gray-300 p-2 flex gap-2">
                                <button
                                    onClick={() => {
                                        setEditingFish(item);
                                        setIsModalOpen(true);
                                    }}
                                    className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => {
                                        setFishToDelete(item.id);
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
                <FishModal
                    isOpen={isModalOpen}
                    onClose={() => {
                        setIsModalOpen(false);
                        setEditingFish(null);
                    }}
                    onSubmit={handleAddOrUpdate}
                    initialData={editingFish || {}}
                />
            )}
            {isConfirmOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg">
                        <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
                        <p className="mb-6">Are you sure you want to delete this fish?</p>
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

export default FishManagementPage;
