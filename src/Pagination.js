import React from 'react';

function Pagination({ totalPosts, postsPerPage, setCurrentPage, currentPage }) {
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  return (
    <div className="pagination">
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          className={currentPage === i + 1 ? 'active' : ''}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;

