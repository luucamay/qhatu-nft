'use client';

import { useState } from 'react';

interface NFT {
  id: number;
  title: string;
  artist: string;
  price: string;
  image: string;
  description: string;
  category: string;
}

interface NFTCardProps {
  nft: NFT;
}

export default function NFTCard({ nft }: NFTCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="card bg-base-200 shadow-xl nft-card">
        <figure className="px-4 pt-4">
          <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-2">🎨</div>
              <p className="text-sm text-base-content/60">NFT Preview</p>
            </div>
          </div>
        </figure>
        <div className="card-body">
          <h3 className="card-title text-lg">{nft.title}</h3>
          <p className="text-sm text-base-content/70 mb-2">{nft.description}</p>
          <div className="flex items-center justify-between mb-3">
            <span className="badge badge-primary">{nft.category}</span>
            <span className="text-sm font-medium">{nft.price}</span>
          </div>
          <div className="card-actions justify-between items-center">
            <span className="text-sm text-base-content/60">by {nft.artist}</span>
            <button 
              className="btn btn-sm btn-primary"
              onClick={() => setIsModalOpen(true)}
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* NFT Detail Modal */}
      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box w-11/12 max-w-2xl">
            <h3 className="font-bold text-2xl mb-4">{nft.title}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="w-full h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🎨</div>
                  <p className="text-base-content/60">NFT Preview</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Description</h4>
                  <p className="text-base-content/70">{nft.description}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-2">Details</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-base-content/60">Artist:</span>
                      <span className="font-medium">{nft.artist}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-base-content/60">Category:</span>
                      <span className="badge badge-primary">{nft.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-base-content/60">Price:</span>
                      <span className="font-bold text-lg text-primary">{nft.price}</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <button className="btn btn-primary w-full mb-2">
                    Buy Now
                  </button>
                  <button className="btn btn-outline w-full">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            
            <div className="modal-action">
              <button 
                className="btn"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
