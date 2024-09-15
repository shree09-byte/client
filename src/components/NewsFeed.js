import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './Pagination';
import Filters from './Filters';
import SearchBar from './SearchBar';

const NewsFeed = () => {
    const [allArticles, setAllArticles] = useState([]); // Store all articles
    const [currentArticles, setCurrentArticles] = useState([]); // Store articles for the current page
    const [page, setPage] = useState(1); // Page number state
    const articlesPerPage = 5; // Number of articles per page

    const [keyword, setKeyword] = useState('');
    const [category, setCategory] = useState('');
    const [country, setCountry] = useState('Any');

    // Fetch articles from API (10 at once)
    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get('https://gnews.io/api/v4/top-headlines?category=health&apikey=5d6611cfd4e06d822620aee855b601c0', {
                    params: {
                        category: category || 'health',
                        country: country !== 'Any' ? country : '',
                        q: keyword || 'example',
                        max: 10, // Fetch all 10 articles at once
                        apikey: '5d6611cfd4e06d822620aee855b601c0'
                    }
                });
                setAllArticles(response.data.articles); // Store all the articles
            } catch (error) {
                console.error('Error fetching articles', error);
            }
        };
        fetchArticles();
    }, [keyword, category, country]); // Refetch when any of these dependencies change

    // Split articles for pagination based on the current page
    useEffect(() => {
        const startIndex = (page - 1) * articlesPerPage;
        const endIndex = startIndex + articlesPerPage;
        setCurrentArticles(allArticles.slice(startIndex, endIndex)); // Get 5 articles for the current page
    }, [page, allArticles]);

    return (
<div className="flex flex-col items-center p-6 min-h-screen bg-gray-50">
            <SearchBar setKeyword={setKeyword} keyword={keyword} />
            <Filters setCategory={setCategory} setCountry={setCountry} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-screen-lg">
                {currentArticles.map(article => (
                    <div className="card bg-white shadow-md rounded-lg overflow-hidden transition duration-300 transform hover:scale-105" key={article.url}>
                        <img className="w-full h-48 object-cover" src={article.image} alt={article.title} />
                        <div className="p-4">
                            <h2 className="text-lg font-bold mb-2">{article.title}</h2>
                            <p className="text-gray-700 mb-4">{article.description}</p>
                            <a 
                                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300" 
                                href={article.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Read more
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <Pagination
                page={page}
                setPage={setPage}
                totalPages={Math.ceil(allArticles.length / articlesPerPage)} // Calculate total pages
            />
        </div>
    );
};

export default NewsFeed;
