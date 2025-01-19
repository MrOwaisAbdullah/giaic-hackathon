"use client";

import React from "react";
import SearchBar from "@/components/ui/SearchBar";

interface FilterPanelProps {
  filters: {
    query: string;
    minPrice: number;
    maxPrice: number;
    sellers: string[];
    categories: string[];
    inStockOnly: boolean;
  };
  onFilterChange: (newFilters: Partial<{
    query: string;
    minPrice: number;
    maxPrice: number;
    sellers: string[];
    categories: string[];
    inStockOnly: boolean;
  }>) => void;
  sellers: { _id: string; name: string }[];
  categories: string[];
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  onFilterChange,
  sellers,
  categories,
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>

      <div className="mb-6">
        <SearchBar 
          value={filters.query} 
          onSearch={(query) => onFilterChange({ query })} 
        />
      </div>

      <div className="mb-6">
        <h4 className="font-medium mb-2">Categories</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.categories.includes(category)}
                onChange={() => {
                  const newCategories = filters.categories.includes(category)
                    ? filters.categories.filter(cat => cat !== category)
                    : [...filters.categories, category];
                  onFilterChange({ categories: newCategories });
                }}
                className="mr-2"
              />
              {category}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-medium mb-2">Price Range</h4>
        <div className="flex space-x-4">
          <input
            type="number"
            placeholder="Min"
            value={filters.minPrice || ""}
            onChange={(e) => onFilterChange({ minPrice: Number(e.target.value) })}
            className="w-1/2 p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Max"
            value={filters.maxPrice === Infinity ? "" : filters.maxPrice}
            onChange={(e) => onFilterChange({ maxPrice: Number(e.target.value) || Infinity })}
            className="w-1/2 p-2 border rounded"
          />
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-medium mb-2">Sellers</h4>
        <div className="space-y-2">
          {sellers.map((seller) => (
            <label key={seller._id} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.sellers.includes(seller._id)}
                onChange={() => {
                  const newSellers = filters.sellers.includes(seller._id)
                    ? filters.sellers.filter(id => id !== seller._id)
                    : [...filters.sellers, seller._id];
                  onFilterChange({ sellers: newSellers });
                }}
                className="mr-2"
              />
              {seller.name}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-2">Availability</h4>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={filters.inStockOnly}
            onChange={(e) => onFilterChange({ inStockOnly: e.target.checked })}
            className="mr-2"
          />
          In Stock Only
        </label>
      </div>
    </div>
  );
};

export default FilterPanel;