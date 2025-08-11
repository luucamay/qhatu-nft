'use client';

import { useState } from 'react';
import NFTCard from './NFTCard';
import SearchAndFilter from './SearchAndFilter';

// Mock NFT data - in a real app, this would come from an API or blockchain
const featuredNFTs = [
  {
    id: 1,
    title: "Detrás de la Pantalla #1",
    artist: "AgujaFilmica",
    price: "0.5 ETH",
    image: "/api/placeholder/400/400",
    description: "A unique piece from the Andes, capturing the essence of hidden stories behind the screen.",
    category: "Digital Art"
  },
  {
    id: 2,
    title: "Andes Sunset",
    artist: "AgujaFilmica",
    price: "0.3 ETH",
    image: "/api/placeholder/400/400",
    description: "Vibrant colors of the Andes mountains at sunset, a tribute to natural beauty.",
    category: "Landscape"
  },
  {
    id: 3,
    title: "Ancient Wisdom",
    artist: "AgujaFilmica",
    price: "0.8 ETH",
    image: "/api/placeholder/400/400",
    description: "Inspired by traditional Andean wisdom and spiritual practices.",
    category: "Spiritual"
  },
  {
    id: 4,
    title: "Mountain Echo",
    artist: "AgujaFilmica",
    price: "0.4 ETH",
    image: "/api/placeholder/400/400",
    description: "The echo of ancient mountains, resonating through digital art.",
    category: "Abstract"
  }
];

export default function FeaturedNFTsSection() {
  const [filteredNFTs, setFilteredNFTs] = useState(featuredNFTs);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    applyFilters(query, selectedCategory, selectedPriceRange);
  };

  const handleFilterChange = (category: string, priceRange: string) => {
    setSelectedCategory(category);
    setSelectedPriceRange(priceRange);
    applyFilters(searchQuery, category, priceRange);
  };

  const applyFilters = (query: string, category: string, priceRange: string) => {
    let filtered = featuredNFTs;

    // Apply search filter
    if (query) {
      filtered = filtered.filter(nft => 
        nft.title.toLowerCase().includes(query.toLowerCase()) ||
        nft.artist.toLowerCase().includes(query.toLowerCase()) ||
        nft.description.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Apply category filter
    if (category) {
      filtered = filtered.filter(nft => nft.category === category);
    }

    // Apply price range filter
    if (priceRange) {
      // Simple price filtering - in a real app, you'd parse ETH values properly
      switch (priceRange) {
        case 'low':
          filtered = filtered.filter(nft => parseFloat(nft.price) <= 0.5);
          break;
        case 'medium':
          filtered = filtered.filter(nft => parseFloat(nft.price) > 0.5 && parseFloat(nft.price) <= 1.0);
          break;
        case 'high':
          filtered = filtered.filter(nft => parseFloat(nft.price) > 1.0);
          break;
      }
    }

    setFilteredNFTs(filtered);
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Collectibles</h2>
          <p className="text-lg text-base-content/70">
            Curated selection of the finest NFTs from Andes artists
          </p>
        </div>

        <SearchAndFilter
          onSearch={handleSearch}
          onFilterChange={handleFilterChange}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredNFTs.map((nft) => (
            <NFTCard key={nft.id} nft={nft} />
          ))}
        </div>

        {filteredNFTs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-base-content/70">No NFTs found matching your criteria.</p>
            <button 
              className="btn btn-primary mt-4"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('');
                setSelectedPriceRange('');
                setFilteredNFTs(featuredNFTs);
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
