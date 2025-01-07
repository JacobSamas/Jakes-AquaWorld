"use client";

import FishCard from "@/components/FishCard";
import { useEffect, useState } from "react";

const ShopPage = () => {
  const [fishList, setFishList] = useState([]);
  const [filteredFish, setFilteredFish] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchFish = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/fish");
        if (!response.ok) throw new Error("Failed to fetch fish data");
        const data = await response.json();
        setFishList(data.fish);
        setFilteredFish(data.fish);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching fish data:", err);
        setError("Unable to load fish. Please try again later.");
        setLoading(false);
      }
    };

    fetchFish();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const searchQuery = e.target.value.toLowerCase();
    const filtered = fishList.filter((fish) =>
      fish.name.toLowerCase().includes(searchQuery)
    );
    setFilteredFish(filtered);
    setCurrentPage(1); 
  };

  const handleSort = (order) => {
    setSortOrder(order);
    const sorted = [...filteredFish].sort((a, b) => {
      return order === "asc" ? a.price - b.price : b.price - a.price;
    });
    setFilteredFish(sorted);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFish = filteredFish.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredFish.length / itemsPerPage);

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-20 text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center text-aqua-dark mb-6">
        Shop Our Fish Collection
      </h1>

      {/* Search and Sort */}
      <div className="flex justify-between items-center mb-8">
        {/* Search */}
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search fish by name"
          className="w-full max-w-xs p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-aqua-dark focus:border-aqua-dark"
        />

        {/* Sort */}
        <div>
          <button
            onClick={() => handleSort("asc")}
            className={`mx-2 px-4 py-2 rounded-lg ${
              sortOrder === "asc" ? "bg-aqua-dark text-white" : "bg-gray-200"
            }`}
          >
            Price: Low to High
          </button>
          <button
            onClick={() => handleSort("desc")}
            className={`px-4 py-2 rounded-lg ${
              sortOrder === "desc" ? "bg-aqua-dark text-white" : "bg-gray-200"
            }`}
          >
            Price: High to Low
          </button>
        </div>
      </div>

      {/* Fish Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentFish.map((fish) => (
          <FishCard key={fish.id} fish={fish} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 rounded-lg ${
              currentPage === index + 1
                ? "bg-aqua-dark text-white"
                : "bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
