import React from 'react';
import styles from './Paginator.module.css';

const Paginator = ({
    currentPage,
  totalPages,
  onPageChange,
  reportsPerPage,
  setReportsPerPage,
}) => {
    const reportsPerPageOptions = [5, 6, 7, 8, 9, 10];
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage); // Call the callback to change the page
    }
  };
  const handleReportsPerPageChange = (e) => {
    setReportsPerPage(Number(e.target.value));
    onPageChange(1); // Reset to the first page when changing reports per page
  };

  return (
    <div className={styles.paginator}>
      {/* Previous button */}
      <button
          className={styles.paginatorPrevious}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        |&lt; Prev
      </button>

      {/* Display page numbers */}
      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        return (
          <button className={styles.paginatorPageNumber}
            key={page}
            onClick={() => handlePageChange(page)}
            style={{
              fontWeight: currentPage === page ? 'bold' : 'normal', // Highlight current page
            }}
          >
            {page}
          </button>
        );
      })}

      {/* Next button */}
      <button
          className={styles.paginatorNext}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next &gt;|
      </button>

        {/* Reports per page dropdown */}
      <label className={styles.paginatorRowSelection}>
        Rows per page:
        <select
            className={styles.paginatorRowSelectionBox}
            value={reportsPerPage}
            onChange={handleReportsPerPageChange}
        >
          {reportsPerPageOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Paginator;
