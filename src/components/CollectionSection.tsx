'use client';

import { useState } from 'react';
import NFTCard from './NFTCard';
import SearchAndFilter from './SearchAndFilter';

// Extended NFT data for the collection page
const allNFTs = [
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
  },
  {
    id: 5,
    title: "Cusco Dreams",
    artist: "AgujaFilmica",
    price: "0.6 ETH",
    image: "/api/placeholder/400/400",
    description: "Dreamlike visions of the ancient Inca capital, Cusco.",
    category: "Digital Art"
  },
  {
    id: 6,
    title: "Sacred Valley",
    artist: "AgujaFilmica",
    price: "0.7 ETH",
    image: "/api/placeholder/400/400",
    description: "The mystical Sacred Valley of the Incas in all its glory.",
    category: "Landscape"
  },
  {
    id: 7,
    title: "Chakana Cross",
    artist: "AgujaFilmica",
    price: "0.9 ETH",
    image: "/api/placeholder/400/400",
    description: "The sacred Andean cross, symbol of balance and harmony.",
    category: "Spiritual"
  },
  {
    id: 8,
    title: "Alpaca Spirit",
    artist: "AgujaFilmica",
    price: "0.2 ETH",
    image: "/api/placeholder/400/400",
    description: "The gentle spirit of the Andean alpaca, guardian of the mountains.",
    category: "Portrait"
  }
];

export default function CollectionSection() {
  const [filteredNFTs, setFilteredNFTs] = useState(allNFTs);
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
    let filtered = allNFTs;

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
    <section className="px-4 pb-16">
      <div className="container mx-auto">
        <SearchAndFilter 
          onSearch={handleSearch}
          onFilterChange={handleFilterChange}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                setFilteredNFTs(allNFTs);
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
        
        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="btn btn-primary btn-lg">
            Load More NFTs
          </button>
        </div>
      </div>
    </section>
  );
}
