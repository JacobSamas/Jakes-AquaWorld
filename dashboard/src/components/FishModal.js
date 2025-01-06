'use client';

import { useState } from 'react';

const FishModal = ({ isOpen, onClose, onSubmit, initialData = {} }) => {
    const [formData, setFormData] = useState({
        name: initialData.name || '',
        species: initialData.species || '',
        price: initialData.price || '',
        description: initialData.description || '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-96">
                <h2 className="text-xl font-bold mb-4">
                    {initialData.id ? 'Edit Fish' : 'Add Fish'}
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="p-2 border border-gray-300 rounded w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="species" className="block text-sm font-medium">
                            Species
                        </label>
                        <input
                            type="text"
                            name="species"
                            id="species"
                            value={formData.species}
                            onChange={handleChange}
                            className="p-2 border border-gray-300 rounded w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="block text-sm font-medium">
                            Price
                        </label>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            value={formData.price}
                            onChange={handleChange}
                            className="p-2 border border-gray-300 rounded w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-medium">
                            Description
                        </label>
                        <textarea
                            name="description"
                            id="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="p-2 border border-gray-300 rounded w-full"
                        />
                    </div>
                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-400 hover:bg-gray-500 text-white py-1 px-4 rounded"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded"
                        >
                            {initialData.id ? 'Update' : 'Add'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FishModal;
