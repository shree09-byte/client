import React from 'react';

const SearchBar = ({ setKeyword, keyword }) => {
    return (
        <div className="mb-4">
            <input
                type="text"
                placeholder="Search news..."
                className="w-full p-2 border rounded"
                value={keyword}
                onChange={e => setKeyword(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;
