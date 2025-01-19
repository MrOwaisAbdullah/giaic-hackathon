// components/Pagination.tsx
"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber.toString());
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded-[4px] ${
          currentPage === 1
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-primary text-white hover:bg-primary-dark"
        }`}
      >
        Previous
      </button>

      <span className="text-lg font-semibold">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded-[4px] ${
          currentPage === totalPages
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-primary text-white hover:bg-primary-dark"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

