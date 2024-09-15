import React from 'react';

const Filters = ({ setCategory, setCountry }) => {
  const categories = [
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Business' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'health', label: 'Health' },
    { value: 'nation', label: 'Nation' },
    { value: 'science', label: 'Science' },
    { value: 'sports', label: 'Sports' },
    { value: 'technology', label: 'Technology' },
    { value: 'world', label: 'World' },
  ];

  const countries = [
      { value: 'Any', label: 'Any' }, // Default option for any country
      { value: 'au', label: 'Australia' },
      { value: 'br', label: 'Brazil' },   
      { value: 'cn', label: 'China' },
      { value: 'ca', label: 'Canada' },
      { value: 'eg', label: 'Egypt' },
      { value: 'fr', label: 'France' },
      { value: 'in', label: 'India' },
      { value: 'tw', label: 'Taiwan' },
      { value: 'de', label: 'Germany' },
      { value: 'gr', label: 'Greece' },
      { value: 'hk', label: 'Hong Kong' },
      { value: 'ie', label: 'Ireland' },
      { value: 'il', label: 'Israel' },
      { value: 'it', label: 'Italy' },
      { value: 'jp', label: 'Japan' },
      { value: 'nl', label: 'Netherlands' },
      { value: 'pe', label: 'Peru' },
      { value: 'pk', label: 'Pakistan' },
      { value: 'ph', label: 'Philippines' },
      { value: 'pt', label: 'Portugal' },
      { value: 'ro', label: 'Romania' },
      { value: 'ru', label: 'Russian Federation' },
      { value: 'sg', label: 'Singapore' },
      { value: 'es', label: 'Spain' },
      { value: 'ch', label: 'Switzerland' },
      { value: 'se', label: 'Sweden' },
      { value: 'ua', label: 'Ukraine' },
      { value: 'us', label: 'United States' },
      { value: 'gb', label: 'United Kingdom' },
    ];

  return (
    <div className="flex space-x-4 mb-4">
      {/* Category Filter */}
      <select 
        className="p-2 border rounded" 
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        {categories.map((category) => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </select>

      {/* Country Filter */}
      <select 
        className="p-2 border rounded" 
        onChange={(e) => setCountry(e.target.value)}
      >
        <option value="Any">Select Country</option>
        {countries.map((country) => (
          <option key={country.value} value={country.value}>
            {country.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
