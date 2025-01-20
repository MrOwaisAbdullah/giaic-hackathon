"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";
import { z } from "zod";

// Zod schema for search query
const searchQuerySchema = z
  .string()
  .min(1, "Search query cannot be empty")
  .max(50, "Search query cannot exceed 50 characters")
  .regex(/^[a-zA-Z0-9\s]*$/, "Search query can only contain letters, numbers, and spaces");

interface SearchBarProps {
  value: string;
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onSearch }) => {
  const [error, setError] = useState<string | null>(null); // Store validation error

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Validate the search query using Zod
      searchQuerySchema.parse(value);
      setError(null); // Clear any previous error
      onSearch(value); // Trigger the search
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        setError(error.errors[0].message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => {
          onSearch(e.target.value); // Update the search query
          setError(null); // Clear error when the user types
        }}
        placeholder="Search products..."
        className="w-full p-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <button
        type="submit"
        aria-label="Search"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary"
      >
        <Search size={20} />
      </button>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </form>
  );
};

export default SearchBar;