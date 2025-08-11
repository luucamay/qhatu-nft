// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Test.sol";
import "../contracts/QhatuNFT.sol";

contract QhatuNFTTest is Test {
    QhatuNFT public nftContract;
    address public user1 = address(0x1);
    address public user2 = address(0x2);
    address public owner = address(0x3);

    function setUp() public {
        vm.prank(owner);
        nftContract = new QhatuNFT();
    }

    function testMintNFT() public {
        vm.startPrank(user1);
        vm.deal(user1, 1 ether);

        uint256 tokenId = nftContract.mintNFT(
            "Test NFT",
            "A test NFT",
            "https://example.com/image.jpg",
            0.1 ether
        );

        assertEq(tokenId, 1);
        assertEq(nftContract.ownerOf(tokenId), user1);
        
        QhatuNFT.NFTMetadata memory metadata = nftContract.getTokenMetadata(tokenId);
        assertEq(metadata.name, "Test NFT");
        assertEq(metadata.description, "A test NFT");
        assertEq(metadata.imageURI, "https://example.com/image.jpg");
        assertEq(metadata.price, 0.1 ether);
        assertTrue(metadata.isForSale);
        assertEq(metadata.creator, user1);
        
        vm.stopPrank();
    }

    function testBuyNFT() public {
        // First mint an NFT
        vm.startPrank(user1);
        vm.deal(user1, 1 ether);
        
        uint256 tokenId = nftContract.mintNFT(
            "Test NFT",
            "A test NFT",
            "https://example.com/image.jpg",
            0.1 ether
        );
        vm.stopPrank();

        // Now buy the NFT
        vm.startPrank(user2);
        vm.deal(user2, 1 ether);
        
        uint256 user2BalanceBefore = user2.balance;
        
        nftContract.buyNFT{value: 0.1 ether}(tokenId);
        
        assertEq(nftContract.ownerOf(tokenId), user2);
        
        QhatuNFT.NFTMetadata memory metadata = nftContract.getTokenMetadata(tokenId);
        assertFalse(metadata.isForSale);
        
        vm.stopPrank();
    }

    function testPutForSale() public {
        vm.startPrank(user1);
        vm.deal(user1, 1 ether);
        
        uint256 tokenId = nftContract.mintNFT(
            "Test NFT",
            "A test NFT",
            "https://example.com/image.jpg",
            0.1 ether
        );
        
        // Change price
        nftContract.putForSale(tokenId, 0.2 ether);
        
        QhatuNFT.NFTMetadata memory metadata = nftContract.getTokenMetadata(tokenId);
        assertEq(metadata.price, 0.2 ether);
        assertTrue(metadata.isForSale);
        
        vm.stopPrank();
    }

    function testGetTotalSupply() public {
        assertEq(nftContract.getTotalSupply(), 0);
        
        vm.startPrank(user1);
        vm.deal(user1, 1 ether);
        
        nftContract.mintNFT(
            "Test NFT 1",
            "A test NFT",
            "https://example.com/image1.jpg",
            0.1 ether
        );
        
        nftContract.mintNFT(
            "Test NFT 2",
            "A test NFT",
            "https://example.com/image2.jpg",
            0.2 ether
        );
        
        vm.stopPrank();
        
        assertEq(nftContract.getTotalSupply(), 2);
    }

    function testGetTokensForSale() public {
        vm.startPrank(user1);
        vm.deal(user1, 1 ether);
        
        nftContract.mintNFT(
            "Test NFT 1",
            "A test NFT",
            "https://example.com/image1.jpg",
            0.1 ether
        );
        
        nftContract.mintNFT(
            "Test NFT 2",
            "A test NFT",
            "https://example.com/image2.jpg",
            0.2 ether
        );
        
        vm.stopPrank();
        
        uint256[] memory tokensForSale = nftContract.getTokensForSale();
        assertEq(tokensForSale.length, 2);
        assertEq(tokensForSale[0], 1);
        assertEq(tokensForSale[1], 2);
    }
}
