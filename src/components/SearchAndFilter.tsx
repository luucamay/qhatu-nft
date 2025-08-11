'use client';

import { useState } from 'react';

interface SearchAndFilterProps {
  onSearch: (query: string) => void;
  onFilterChange: (category: string, priceRange: string) => void;
}

export default function SearchAndFilter({ onSearch, onFilterChange }: SearchAndFilterProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  const categories = ['all', 'Digital Art', 'Landscape', 'Spiritual', 'Abstract', 'Portrait'];
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-0.1', label: '0 - 0.1 ETH' },
    { value: '0.1-0.5', label: '0.1 - 0.5 ETH' },
    { value: '0.5-1', label: '0.5 - 1 ETH' },
    { value: '1+', label: '1+ ETH' }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onFilterChange(category, selectedPriceRange);
  };

  const handlePriceRangeChange = (priceRange: string) => {
    setSelectedPriceRange(priceRange);
    onFilterChange(selectedCategory, priceRange);
  };

  return (
    <div className="bg-base-200 p-6 rounded-lg mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search */}
        <div className="form-control">
          <form onSubmit={handleSearch}>
            <div className="input-group">
              <input
                type="text"
                placeholder="Search NFTs..."
                className="input input-bordered w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-primary" type="submit">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </div>
          </form>
        </div>

        {/* Category Filter */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Category</span>
          </label>
          <select
            className="select select-bordered w-full"
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Categories' : category}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range Filter */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Price Range</span>
          </label>
          <select
            className="select select-bordered w-full"
            value={selectedPriceRange}
            onChange={(e) => handlePriceRangeChange(e.target.value)}
          >
            {priceRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Active Filters Display */}
      <div className="flex flex-wrap gap-2 mt-4">
        {selectedCategory !== 'all' && (
          <span className="badge badge-primary badge-outline">
            Category: {selectedCategory}
            <button
              className="ml-2"
              onClick={() => handleCategoryChange('all')}
            >
              ×
            </button>
          </span>
        )}
        {selectedPriceRange !== 'all' && (
          <span className="badge badge-secondary badge-outline">
            Price: {priceRanges.find(r => r.value === selectedPriceRange)?.label}
            <button
              className="ml-2"
              onClick={() => handlePriceRangeChange('all')}
            >
              ×
            </button>
          </span>
        )}
        {(selectedCategory !== 'all' || selectedPriceRange !== 'all') && (
          <button
            className="btn btn-ghost btn-sm"
            onClick={() => {
              setSelectedCategory('all');
              setSelectedPriceRange('all');
              onFilterChange('all', 'all');
            }}
          >
            Clear All
          </button>
        )}
      </div>
    </div>
  );
}
