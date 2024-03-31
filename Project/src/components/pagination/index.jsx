import React from "react";
import styled from "styled-components";
import { primary, white } from "../../UI/colors";

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

const PaginationStyle = styled.div`
  display:flex ;
  align-items: center;
  justify-content: center;
  gap: 20px;
  /* border: 1px solid red; */
  padding: 10px 70px;
  text-align: center;
  font-size:1.3rem;
  button{
    transition: 0.2s all;
    background-color: #b5b5b521;
    padding: 10px;
    border-radius: 0.3rem;
    cursor: pointer;

    &:hover{
     background-color: ${primary};
     color: ${white};
    }
  }
  .active{
    background-color: ${primary};

    color: ${white};
  }
  `
