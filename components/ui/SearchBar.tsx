"use client";

import React from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onSearch }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
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
    </form>
  );
};

export default SearchBar;