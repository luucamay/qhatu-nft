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
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
      <figure className="px-4 pt-4">
        <img
          src={metadata.imageURI || "https://via.placeholder.com/300x300?text=No+Image"}
          alt={metadata.name}
          className="rounded-xl w-full h-64 object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://via.placeholder.com/300x300?text=No+Image";
          }}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl font-bold">{metadata.name}</h2>
        <p className="text-base-content/70 text-sm line-clamp-2">{metadata.description}</p>
        
        <div className="flex flex-col gap-2 mt-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Creator:</span>
            <Address address={metadata.creator} />
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Token ID:</span>
            <span className="badge badge-primary">#{tokenId}</span>
          </div>
          
          {metadata.isForSale && (
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Price:</span>
              <span className="text-lg font-bold text-primary">
                {formatEther(metadata.price)} ETH
              </span>
            </div>
          )}
        </div>
        
        <div className="card-actions justify-end mt-4">
          {metadata.isForSale && !isOwner ? (
            <button
              className="btn btn-primary"
              onClick={handleBuy}
              disabled={!onBuy}
            >
              Buy for {formatEther(metadata.price)} ETH
            </button>
          ) : metadata.isForSale && isOwner ? (
            <span className="badge badge-warning">Your NFT</span>
          ) : (
            <span className="badge badge-secondary">Not for Sale</span>
          )}
        </div>
      </div>
    </div>
  );
};
