import React from 'react';

const Pagination = ({ page, setPage, totalPages }) => {
    return (
        <div className="flex items-center justify-center space-x-4 mt-6">
            {/* Previous Button */}
            <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1} // Disable if on the first page
                className={`px-4 py-2 border rounded-lg transition-colors duration-200 ${page === 1
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
            >
                Previous
            </button>

            {/* Page Indicator */}
            <span className="text-lg font-semibold">
                Page {page} of {totalPages}
            </span>

            {/* Next Button */}
            <button
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages} // Disable if on the last page
                className={`px-4 py-2 border rounded-lg transition-colors duration-200 ${page === totalPages
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
