"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import ProductCard from "@/components/ui/ProductCard";
import FilterPanel from "@/components/ui/FilterPanel";
import Pagination from "@/components/ui/Pagination";
import { ProductCards } from "@/typing";

interface ProductsClientWrapperProps {
  categories: string[];
  products: ProductCards[];
  sellers: { _id: string; name: string }[];
}

const ProductsClientWrapper: React.FC<ProductsClientWrapperProps> = ({
  categories,
  products,
  sellers,
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Get initial values from URL
  const initialPage = Number(searchParams.get("page")) || 1;
  const pageSize = 6;

  // States
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [filteredProducts, setFilteredProducts] = useState<ProductCards[]>(products);
  const [filters, setFilters] = useState({
    query: searchParams.get("query") || "",
    minPrice: Number(searchParams.get("minPrice")) || 0,
    maxPrice: Number(searchParams.get("maxPrice")) || Infinity,
    sellers: searchParams.get("sellers")?.split(",").filter(Boolean) || [],
    categories: searchParams.get("categories")?.split(",").filter(Boolean) || [],
    inStockOnly: searchParams.get("inStockOnly") === "true",
  });

  // Update URL without causing a page reset
  const updateURL = useCallback((newFilters: typeof filters, page: number) => {
    const params = new URLSearchParams();
    
    if (newFilters.query) params.set("query", newFilters.query);
    if (newFilters.minPrice > 0) params.set("minPrice", newFilters.minPrice.toString());
    if (newFilters.maxPrice < Infinity) params.set("maxPrice", newFilters.maxPrice.toString());
    if (newFilters.sellers.length) params.set("sellers", newFilters.sellers.join(","));
    if (newFilters.categories.length) params.set("categories", newFilters.categories.join(","));
    if (newFilters.inStockOnly) params.set("inStockOnly", "true");
    
    params.set("page", page.toString());

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, [pathname, router]);

  // Apply filters
  const applyFilters = useCallback(() => {
    const filtered = products.filter((product) => {
      const matchesQuery = filters.query
        ? product.title.toLowerCase().includes(filters.query.toLowerCase())
        : true;
      const matchesPrice =
        product.price >= filters.minPrice && product.price <= filters.maxPrice;
      const matchesSellers =
        filters.sellers.length === 0 ||
        (product.seller && filters.sellers.includes(product.seller._id));
      const matchesCategories =
        filters.categories.length === 0 ||
        (product.category && filters.categories.includes(product.category.title));
      const matchesStock = !filters.inStockOnly || product.inventory > 0;

      return (
        matchesQuery &&
        matchesPrice &&
        matchesSellers &&
        matchesCategories &&
        matchesStock
      );
    });

    setFilteredProducts(filtered);
  }, [filters, products]);

  // Handle filter changes
  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  // Handle URL sync
  useEffect(() => {
    const page = Number(searchParams.get("page")) || 1;
    setCurrentPage(page);
  }, [searchParams]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Filter handlers
  const handleFilterChange = (newFilters: Partial<typeof filters>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    updateURL(updatedFilters, 1); // Reset to page 1 when filters change
  };

  return (
    <div className="grid grid-col-1 md:grid-col-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      <div className="col-span-1 mt-2">
        <FilterPanel
          filters={filters}
          onFilterChange={handleFilterChange}
          sellers={sellers}
          categories={categories}
        />
      </div>
      <div className="sm:col-start-2 lg:col-span-2 xl:col-span-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-2 gap-5">
          {currentProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
          />
        )}
      </div>
    </div>
  );
};

export default ProductsClientWrapper;