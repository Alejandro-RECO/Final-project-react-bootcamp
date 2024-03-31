import React from "react";
import { PaginationStyle } from "./style";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  if (pageNumbers <= 1) return null;

  return (
    <PaginationStyle>
      {pageNumbers.map((page) => (
        <button
          key={page}
          className={page === currentPage ? "active" : ""}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </PaginationStyle>
  );
};

export default Pagination;


