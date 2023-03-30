import usePagination from "../utilities/usePagination";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className="paginationContainer">
      {/* Left navigation arrow */}
      <li
        className={currentPage === 1 ? "disabled" : "paginationItem"}
        onClick={onPrevious}
        tabIndex="0"
        aria-label="previous page"
      >
        <BsArrowLeft />
      </li>
      {paginationRange.map((pageNumber) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === "...") {
          return (
            <li className="paginationItem dots" key={pageNumber + pageNumber}>
              ...
            </li>
          );
        } else if (pageNumber === lastPage) {
          return (
            <li
              className={
                pageNumber === currentPage ? "selected" : "paginationItem"
              }
              onClick={() => onPageChange(pageNumber)}
              key={pageNumber + pageNumber}
              tabIndex="0"
            >
              Last
            </li>
          );
        }
        // Render our Page Pills
        return (
          <li
            className={
              pageNumber === currentPage ? "selected" : "paginationItem"
            }
            onClick={() => onPageChange(pageNumber)}
            tabIndex="0"
          >
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <li
        className={currentPage === lastPage ? "disabled" : "paginationItem"}
        onClick={onNext}
        tabIndex="0"
        aria-label="next page"
      >
        <BsArrowRight />
      </li>
    </ul>
  );
};

export default Pagination;
