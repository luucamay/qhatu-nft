//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract QhatuNFT is ERC721, Ownable {
    uint256 private _tokenIds;
    
    // NFT metadata structure
    struct NFTMetadata {
        string name;
        string description;
        string imageURI;
        uint256 price;
        bool isForSale;
        address creator;
    }
    
    // Mapping from token ID to metadata
    mapping(uint256 => NFTMetadata) public tokenMetadata;
    
    // Events
    event NFTMinted(uint256 indexed tokenId, address indexed creator, string name);
    event NFTPutForSale(uint256 indexed tokenId, uint256 price);
    event NFTSold(uint256 indexed tokenId, address indexed seller, address indexed buyer, uint256 price);
    
    constructor() ERC721("QhatuNFT", "QHATU") Ownable(msg.sender) {}
    
    function mintNFT(
        string memory _name,
        string memory _description,
        string memory _imageURI,
        uint256 _price
    ) public returns (uint256) {
        _tokenIds++;
        uint256 newTokenId = _tokenIds;
        
        _mint(msg.sender, newTokenId);
        
        tokenMetadata[newTokenId] = NFTMetadata({
            name: _name,
            description: _description,
            imageURI: _imageURI,
            price: _price,
            isForSale: true,
            creator: msg.sender
        });
        
        emit NFTMinted(newTokenId, msg.sender, _name);
        return newTokenId;
    }
    
    function putForSale(uint256 _tokenId, uint256 _price) public {
        require(_tokenId > 0 && _tokenId <= _tokenIds, "Token does not exist");
        require(ownerOf(_tokenId) == msg.sender, "Not the token owner");
        
        tokenMetadata[_tokenId].price = _price;
        tokenMetadata[_tokenId].isForSale = true;
        
        emit NFTPutForSale(_tokenId, _price);
    }
    
    function buyNFT(uint256 _tokenId) public payable {
        require(_tokenId > 0 && _tokenId <= _tokenIds, "Token does not exist");
        require(tokenMetadata[_tokenId].isForSale, "Token is not for sale");
        require(msg.value >= tokenMetadata[_tokenId].price, "Insufficient payment");
        
        address seller = ownerOf(_tokenId);
        require(seller != msg.sender, "Cannot buy your own token");
        
        // Transfer the token
        _transfer(seller, msg.sender, _tokenId);
        
        // Transfer the payment
        (bool success,) = seller.call{value: msg.value}("");
        require(success, "Failed to transfer payment");
        
        // Update metadata
        tokenMetadata[_tokenId].isForSale = false;
        
        emit NFTSold(_tokenId, seller, msg.sender, msg.value);
    }
    
    function getTokenMetadata(uint256 _tokenId) public view returns (NFTMetadata memory) {
        require(_tokenId > 0 && _tokenId <= _tokenIds, "Token does not exist");
        return tokenMetadata[_tokenId];
    }
    
    function getTotalSupply() public view returns (uint256) {
        return _tokenIds;
    }
    
    function getTokensForSale() public view returns (uint256[] memory) {
        uint256 totalSupply = _tokenIds;
        uint256[] memory forSale = new uint256[](totalSupply);
        uint256 count = 0;
        
        for (uint256 i = 1; i <= totalSupply; i++) {
            if (tokenMetadata[i].isForSale) {
                forSale[count] = i;
                count++;
            }
        }
        
        // Resize array to actual count
        assembly {
            mstore(forSale, count)
        }
        
        return forSale;
    }
}
