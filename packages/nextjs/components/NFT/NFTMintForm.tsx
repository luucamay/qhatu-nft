import React, { useState } from "react";
import { parseEther } from "viem";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth/useScaffoldWriteContract";
import { notification } from "~~/utils/scaffold-eth";

interface NFTMintFormProps {
  onMintSuccess?: () => void;
}

export const NFTMintForm: React.FC<NFTMintFormProps> = ({ onMintSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    imageURI: "",
    price: "",
  });

  const { writeContractAsync: writeQhatuNFTAsync } = useScaffoldWriteContract({
    contractName: "QhatuNFT",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.description || !formData.imageURI || !formData.price) {
      notification.error("Please fill in all fields");
      return;
    }

    try {
      const priceInWei = parseEther(formData.price);
      
      await writeQhatuNFTAsync({
        functionName: "mintNFT",
        args: [formData.name, formData.description, formData.imageURI, priceInWei],
      });

      notification.success("NFT minted successfully!");
      
      // Reset form
      setFormData({
        name: "",
        description: "",
        imageURI: "",
        price: "",
      });

      // Call success callback
      if (onMintSuccess) {
        onMintSuccess();
      }
    } catch (error) {
      console.error("Error minting NFT:", error);
      notification.error("Failed to mint NFT. Please try again.");
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl mb-6">Mint New NFT</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">NFT Name *</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter NFT name"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Description *</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Describe your NFT"
              className="textarea textarea-bordered w-full h-24"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Image URI *</span>
            </label>
            <input
              type="url"
              name="imageURI"
              value={formData.imageURI}
              onChange={handleInputChange}
              placeholder="https://example.com/image.jpg"
              className="input input-bordered w-full"
              required
            />
            <label className="label">
              <span className="label-text-alt">Provide a direct link to your image</span>
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Price (ETH) *</span>
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="0.01"
              step="0.001"
              min="0"
              className="input input-bordered w-full"
              required
            />
            <label className="label">
              <span className="label-text-alt">Set the price in ETH</span>
            </label>
          </div>

          <div className="card-actions justify-end pt-4">
            <button type="submit" className="btn btn-primary">
              Mint NFT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
