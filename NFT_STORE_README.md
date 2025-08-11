# Qhatu NFT Store

A complete NFT marketplace built on Scaffold-ETH 2, allowing users to mint, buy, and sell NFTs on Ethereum.

## Features

- **NFT Minting**: Create new NFTs with custom metadata (name, description, image URI, price)
- **NFT Gallery**: Browse all available NFTs in a responsive grid layout
- **NFT Trading**: Buy and sell NFTs using ETH
- **Responsive Design**: Modern UI built with Tailwind CSS and DaisyUI
- **Smart Contract Integration**: Built on OpenZeppelin's ERC721 standard

## Smart Contract

The `QhatuNFT` contract (`packages/foundry/contracts/QhatuNFT.sol`) provides:

- ERC721 standard compliance
- NFT metadata storage
- Minting functionality
- Buy/sell mechanisms
- Price management
- Creator tracking

## Getting Started

### Prerequisites

- Node.js 18+ and Yarn
- Foundry (for smart contract development)

### Installation

1. Clone the repository and install dependencies:

```bash
yarn install
```

2. Start the local blockchain:

```bash
yarn chain
```

3. Deploy the smart contracts:

```bash
yarn deploy
```

4. Start the frontend:

```bash
yarn start
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Testing

Run the smart contract tests:

```bash
cd packages/foundry
forge test
```

## Usage

### Minting NFTs

1. Connect your wallet
2. Click "Mint NFT" button
3. Fill in the form:
   - **Name**: Your NFT's name
   - **Description**: Brief description of your NFT
   - **Image URI**: Direct link to your image (IPFS, HTTP, etc.)
   - **Price**: Price in ETH
4. Click "Mint NFT" to create your NFT

### Buying NFTs

1. Browse the NFT gallery
2. Click "Buy" on any NFT you want to purchase
3. Confirm the transaction in your wallet
4. The NFT will be transferred to your address

### Managing Your NFTs

- NFTs you own will show "Your NFT" badge
- Use the Debug Contracts page to interact with your NFTs directly
- You can put NFTs back up for sale with different prices

## Project Structure

```
packages/
├── foundry/
│   ├── contracts/
│   │   └── QhatuNFT.sol          # Main NFT contract
│   ├── script/
│   │   ├── DeployQhatuNFT.s.sol  # Deployment script
│   │   └── Deploy.s.sol          # Main deployment script
│   └── test/
│       └── QhatuNFT.t.sol        # Contract tests
└── nextjs/
    ├── app/
    │   ├── page.tsx              # Home page with NFT store
    │   └── nft-store/
    │       └── page.tsx          # Dedicated NFT store page
    └── components/
        └── NFT/
            ├── NFTCard.tsx       # Individual NFT display
            ├── NFTGrid.tsx       # NFT grid layout
            ├── NFTMintForm.tsx   # NFT creation form
            ├── NFTStore.tsx      # Main store component
            └── index.tsx         # Component exports
```

## Smart Contract Functions

### Public Functions

- `mintNFT(name, description, imageURI, price)`: Create a new NFT
- `buyNFT(tokenId)`: Purchase an NFT (payable)
- `getTokenMetadata(tokenId)`: Get NFT metadata
- `getTotalSupply()`: Get total number of NFTs
- `getTokensForSale()`: Get array of NFTs available for purchase

### Owner Functions

- `putForSale(tokenId, price)`: Update NFT price and availability

## Customization

### Adding New Features

1. Extend the smart contract in `packages/foundry/contracts/QhatuNFT.sol`
2. Update the deployment script if needed
3. Add new UI components in `packages/nextjs/components/NFT/`
4. Update the main store component to include new functionality

### Styling

The UI uses Tailwind CSS with DaisyUI components. Customize the appearance by:

- Modifying Tailwind classes in component files
- Updating DaisyUI theme in `packages/nextjs/styles/globals.css`
- Adding custom CSS classes as needed

### Network Configuration

Update `packages/nextjs/scaffold.config.ts` to deploy to different networks:

- Local development: `chains.foundry`
- Testnet: `chains.sepolia`
- Mainnet: `chains.mainnet`

## Troubleshooting

### Common Issues

1. **Contract not deployed**: Run `yarn deploy` after starting the local chain
2. **Images not loading**: Ensure image URIs are accessible and CORS-enabled
3. **Transaction failures**: Check wallet balance and gas settings
4. **Component errors**: Verify all dependencies are installed with `yarn install`

### Development Tips

- Use the Debug Contracts page to test smart contract functions
- Check browser console for detailed error messages
- Use Foundry's `forge test` for smart contract testing
- Monitor local blockchain logs for transaction details

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For issues and questions:

- Check the Scaffold-ETH 2 documentation
- Review smart contract tests
- Check browser console for errors
- Verify network configuration
