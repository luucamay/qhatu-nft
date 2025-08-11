import React from "react";
import { NFTCard } from "./NFTCard";
import { parseEther } from "viem";

interface NFTMetadata {
  name: string;
  description: string;
  imageURI: string;
  price: bigint;
  isForSale: boolean;
  creator: string;
}

interface NFTGridProps {
  nfts: Array<{
    tokenId: number;
    metadata: NFTMetadata;
  }>;
  onBuyNFT?: (tokenId: number, price: bigint) => void;
  currentUserAddress?: string;
  isLoading?: boolean;
}

export const NFTGrid: React.FC<NFTGridProps> = ({ 
  nfts, 
  onBuyNFT, 
  currentUserAddress, 
  isLoading = false 
}) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="card bg-base-100 shadow-xl animate-pulse">
            <div className="px-3 sm:px-4 pt-3 sm:pt-4">
              <div className="w-full h-48 sm:h-56 lg:h-64 bg-base-300 rounded-xl"></div>
            </div>
            <div className="card-body p-3 sm:p-4">
              <div className="h-5 sm:h-6 bg-base-300 rounded mb-2"></div>
              <div className="h-4 bg-base-300 rounded mb-3 sm:mb-4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-base-300 rounded"></div>
                <div className="h-4 bg-base-300 rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (nfts.length === 0) {
    return (
      <div className="text-center py-8 sm:py-12 lg:py-16">
        <div className="text-4xl sm:text-6xl mb-4">🖼️</div>
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">No NFTs Found</h3>
        <p className="text-base-content/70 text-sm sm:text-base px-4">
          There are no NFTs available for sale at the moment.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6">
      {nfts.map(({ tokenId, metadata }) => (
        <NFTCard
          key={tokenId}
          tokenId={tokenId}
          metadata={metadata}
          onBuy={onBuyNFT}
          isOwner={currentUserAddress === metadata.creator}
        />
      ))}
    </div>
  );
};
