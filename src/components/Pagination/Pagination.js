import React from "react";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./Pagination.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageInfo = Array.from({ length: totalPages }, (_, index) => index + 1);
  console.log(pageInfo);

  const handleLeftDouble = () => {
    onPageChange(1);
  };

  const handleLeftSingle = () => {
    onPageChange(currentPage - 1);
  };

  const handleRightSingle = () => {
    onPageChange(currentPage + 1);
  };

  const handleRightDouble = () => {
    onPageChange(totalPages);
  };

  return (
    <div className="pagination-container">
      <button
        className="btn"
        onClick={handleLeftDouble}
        disabled={currentPage === 1}
      >
        <KeyboardDoubleArrowLeftIcon />
      </button>
      <button
        className="btn"
        onClick={handleLeftSingle}
        disabled={currentPage === 1}
      >
        <KeyboardArrowLeftIcon />
      </button>
      {pageInfo.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={currentPage === p ? "active-btn" : "btn"}
        >
          {p}
        </button>
      ))}
      <button
        className="btn"
        onClick={handleRightSingle}
        disabled={currentPage === totalPages}
      >
        <KeyboardArrowRightIcon />
      </button>
      <button
        className="btn"
        onClick={handleRightDouble}
        disabled={currentPage === totalPages}
      >
        <KeyboardDoubleArrowRightIcon />
      </button>
    </div>
  );
};

export default Pagination;
