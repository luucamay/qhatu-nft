import React, { useEffect, useState } from "react";
import { NFTGrid } from "./NFTGrid";
import { NFTMintForm } from "./NFTMintForm";
import { useAccount } from "wagmi";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { notification } from "~~/utils/scaffold-eth";

interface NFTMetadata {
  name: string;
  description: string;
  imageURI: string;
  price: bigint;
  isForSale: boolean;
  creator: string;
}

export const NFTStore: React.FC = () => {
  const { address: connectedAddress } = useAccount();
  const [nfts, setNfts] = useState<Array<{ tokenId: number; metadata: NFTMetadata }>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showMintForm, setShowMintForm] = useState(false);

  const { data: totalSupply } = useScaffoldReadContract({
    contractName: "QhatuNFT",
    functionName: "getTotalSupply",
  });

  const { data: tokensForSale } = useScaffoldReadContract({
    contractName: "QhatuNFT",
    functionName: "getTokensForSale",
  });

  const { writeContractAsync: writeQhatuNFTAsync } = useScaffoldWriteContract({
    contractName: "QhatuNFT",
  });

  // Individual NFT metadata hooks
  const nft1Metadata = useScaffoldReadContract({
    contractName: "QhatuNFT",
    functionName: "getTokenMetadata",
    args: [1n],
  });

  const nft2Metadata = useScaffoldReadContract({
    contractName: "QhatuNFT",
    functionName: "getTokenMetadata",
    args: [2n],
  });

  const nft3Metadata = useScaffoldReadContract({
    contractName: "QhatuNFT",
    functionName: "getTokenMetadata",
    args: [3n],
  });

  // Fetch NFT data
  const fetchNFTs = () => {
    if (!totalSupply || totalSupply === 0n) {
      setNfts([]);
      setIsLoading(false);
      return;
    }

    try {
      const allNFTs = [];
      if (nft1Metadata.data) allNFTs.push({ tokenId: 1, metadata: nft1Metadata.data as NFTMetadata });
      if (nft2Metadata.data) allNFTs.push({ tokenId: 2, metadata: nft2Metadata.data as NFTMetadata });
      if (nft3Metadata.data) allNFTs.push({ tokenId: 3, metadata: nft3Metadata.data as NFTMetadata });

      setNfts(allNFTs);
    } catch (error) {
      console.error("Error fetching NFTs:", error);
      notification.error("Failed to fetch NFTs");
    } finally {
      setIsLoading(false);
    }
  };

  // Buy NFT function
  const handleBuyNFT = async (tokenId: number, price: bigint) => {
    try {
      await writeQhatuNFTAsync({
        functionName: "buyNFT",
        args: [BigInt(tokenId)],
        value: price,
      });

      notification.success("NFT purchased successfully!");
      // Refresh NFT data
      setTimeout(fetchNFTs, 2000);
    } catch (error) {
      console.error("Error buying NFT:", error);
      notification.error("Failed to purchase NFT");
    }
  };

  // Handle mint success
  const handleMintSuccess = () => {
    setShowMintForm(false);
    // Refresh NFT data after a delay to allow for blockchain confirmation
    setTimeout(fetchNFTs, 3000);
  };

  // Fetch NFTs when metadata changes
  useEffect(() => {
    fetchNFTs();
  }, [nft1Metadata.data, nft2Metadata.data, nft3Metadata.data, totalSupply]);

  return (
    <div className="w-full overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-lg sm:text-xl lg:text-2xl text-base-content/70 leading-relaxed max-w-3xl mx-auto">
            Discover, collect, and trade unique digital assets
          </p>
        </div>

        {/* Mint Section */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Create New NFT</h2>
            <button
              className={`btn ${showMintForm ? "btn-secondary" : "btn-primary"} w-full sm:w-auto`}
              onClick={() => setShowMintForm(!showMintForm)}
            >
              {showMintForm ? "Cancel" : "Mint NFT"}
            </button>
          </div>

          {showMintForm && (
            <div className="max-w-2xl mx-auto">
              <NFTMintForm onMintSuccess={handleMintSuccess} />
            </div>
          )}
        </div>

        {/* NFT Gallery */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">NFT Gallery</h2>
            <div className="text-sm text-base-content/70 text-center sm:text-right">
              {nfts.length > 0 && `${nfts.length} NFT${nfts.length !== 1 ? "s" : ""} available`}
            </div>
          </div>

          <NFTGrid nfts={nfts} onBuyNFT={handleBuyNFT} currentUserAddress={connectedAddress} isLoading={isLoading} />
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 lg:mt-16">
          <div className="stat bg-base-100 shadow-lg rounded-lg p-4 sm:p-6">
            <div className="stat-title text-sm sm:text-base">Total NFTs</div>
            <div className="stat-value text-primary text-2xl sm:text-3xl lg:text-4xl">
              {totalSupply?.toString() || "0"}
            </div>
            <div className="stat-desc text-xs sm:text-sm">Minted on the blockchain</div>
          </div>

          <div className="stat bg-base-100 shadow-lg rounded-lg p-4 sm:p-6">
            <div className="stat-title text-sm sm:text-base">For Sale</div>
            <div className="stat-value text-secondary text-2xl sm:text-3xl lg:text-4xl">
              {tokensForSale ? tokensForSale.length : "0"}
            </div>
            <div className="stat-desc text-xs sm:text-sm">Available for purchase</div>
          </div>

          <div className="stat bg-base-100 shadow-lg rounded-lg p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
            <div className="stat-title text-sm sm:text-base">Connected</div>
            <div className="stat-value text-accent text-2xl sm:text-3xl lg:text-4xl">
              {connectedAddress ? "Yes" : "No"}
            </div>
            <div className="stat-desc text-xs sm:text-sm">Wallet connection status</div>
          </div>
        </div>
      </div>
    </div>
  );
};
