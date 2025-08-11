import React from "react";
import { Address } from "~/components/scaffold-eth";
import { parseEther, formatEther } from "viem";

interface NFTMetadata {
  name: string;
  description: string;
  imageURI: string;
  price: bigint;
  isForSale: boolean;
  creator: string;
}

interface NFTCardProps {
  tokenId: number;
  metadata: NFTMetadata;
  onBuy?: (tokenId: number, price: bigint) => void;
  isOwner?: boolean;
}

export const NFTCard: React.FC<NFTCardProps> = ({ tokenId, metadata, onBuy, isOwner }) => {
  const handleBuy = () => {
    if (onBuy && metadata.isForSale) {
      onBuy(tokenId, metadata.price);
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
      <figure className="px-3 sm:px-4 pt-3 sm:pt-4">
        <img
          src={metadata.imageURI || "https://via.placeholder.com/300x300?text=No+Image"}
          alt={metadata.name}
          className="rounded-xl w-full h-48 sm:h-56 lg:h-64 object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://via.placeholder.com/300x300?text=No+Image";
          }}
        />
      </figure>
      <div className="card-body p-3 sm:p-4 flex flex-col h-full">
        <h2 className="card-title text-lg sm:text-xl font-bold line-clamp-1">{metadata.name}</h2>
        <p className="text-base-content/70 text-xs sm:text-sm line-clamp-2 flex-grow">{metadata.description}</p>
        
        <div className="flex flex-col gap-2 mt-3 sm:mt-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
            <span className="text-xs sm:text-sm font-medium">Creator:</span>
            <div className="text-xs sm:text-sm">
              <Address address={metadata.creator} />
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
            <span className="text-xs sm:text-sm font-medium">Token ID:</span>
            <span className="badge badge-primary badge-sm sm:badge-md">#{tokenId}</span>
          </div>
          
          {metadata.isForSale && (
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
              <span className="text-xs sm:text-sm font-medium">Price:</span>
              <span className="text-base sm:text-lg font-bold text-primary">
                {formatEther(metadata.price)} ETH
              </span>
            </div>
          )}
        </div>
        
        <div className="card-actions justify-end mt-3 sm:mt-4 pt-2">
          {metadata.isForSale && !isOwner ? (
            <button
              className="btn btn-primary btn-sm sm:btn-md w-full sm:w-auto"
              onClick={handleBuy}
              disabled={!onBuy}
            >
              <span className="hidden sm:inline">Buy for {formatEther(metadata.price)} ETH</span>
              <span className="sm:hidden">Buy NFT</span>
            </button>
          ) : metadata.isForSale && isOwner ? (
            <span className="badge badge-warning badge-sm sm:badge-md w-full sm:w-auto text-center">Your NFT</span>
          ) : (
            <span className="badge badge-secondary badge-sm sm:badge-md w-full sm:w-auto text-center">Not for Sale</span>
          )}
        </div>
      </div>
    </div>
  );
};
