import React, { useState } from 'react';
import Paginator from './Paginator'; // Adjust the import path accordingly

const PaginatedContent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Example total number of pages

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage); // Update the current page state
  };

  return (
    <div>
      <h1>Page {currentPage}</h1>
      {/* Display some content based on the current page */}

      {/* Add the Paginator */}
      <Paginator
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PaginatedContent;
