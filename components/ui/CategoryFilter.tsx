"use client";

import React from "react";

interface CategoryFilterProps {
  categories: string[];
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  onCategoryChange,
}) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Filters</h3>

      {/* Category Filter */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Category</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center">
              <input
                type="checkbox"
                value={category}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="mr-2"
              />
              {category}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;