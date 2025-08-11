# Qhatu NFT

A modern NFT store for collectibles created by artists from the Andes mountains, built with Next.js and DaisyUI.

## 🎨 About

Qhatu NFT is a platform that connects the rich cultural heritage of the Andes with the innovative world of blockchain technology. Our first collaboration is with AgujaFilmica and their project "Detrás de la pantalla" (Behind the Screen).

## ✨ Features

- **Modern UI/UX**: Built with DaisyUI components for a beautiful, responsive design
- **Theme Support**: Multiple themes including custom "Qhatu" theme, light, and dark modes
- **NFT Gallery**: Browse and explore unique digital collectibles
- **Search & Filter**: Advanced search and filtering capabilities
- **Artist Showcase**: Dedicated sections highlighting Andes artists
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Wallet Integration**: Ready for blockchain wallet connections

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS + DaisyUI
- **Language**: TypeScript
- **UI Components**: Custom components with DaisyUI integration
- **State Management**: React hooks for local state
- **Routing**: Next.js file-based routing

## 🏗️ Project Structure

```
qhatu-nft/
├── src/
│   ├── app/
│   │   ├── collection/     # NFT collection page
│   │   ├── about/         # About page
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Home page
│   │   └── globals.css    # Global styles
│   └── components/
│       ├── Navbar.tsx     # Navigation component
│       ├── NFTCard.tsx    # NFT card component
│       ├── SearchAndFilter.tsx # Search and filter component
│       └── ThemeToggle.tsx # Theme switcher
├── tailwind.config.js     # Tailwind + DaisyUI configuration
└── package.json
```

## 🎯 Key Components

### Home Page (`/`)

- Hero section with Andes-inspired design
- Featured NFT showcase
- Artist highlights
- Call-to-action sections

### Collection Page (`/collection`)

- Complete NFT gallery
- Advanced search and filtering
- Responsive grid layout
- Load more functionality

### About Page (`/about`)

- Mission and values
- Collaboration details
- Cultural preservation focus

### Components

- **Navbar**: Fixed navigation with theme toggle and wallet connection
- **NFTCard**: Interactive NFT cards with modal details
- **SearchAndFilter**: Advanced search and category/price filtering
- **ThemeToggle**: Multi-theme support (Qhatu, Light, Dark)

## 🎨 Themes

The application includes three beautiful themes:

- **Qhatu**: Custom theme with Andes-inspired colors
- **Light**: Clean, bright interface
- **Dark**: Modern dark mode

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd qhatu-nft
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Tailwind CSS + DaisyUI

The project uses Tailwind CSS v4 with DaisyUI plugin. Configuration is in `tailwind.config.js`.

### Custom Theme

The custom "Qhatu" theme includes Andes-inspired colors:

- Primary: Blue tones
- Secondary: Purple accents
- Accent: Warm orange
- Neutral: Balanced grays

## 📱 Responsive Design

The application is fully responsive with:

- Mobile-first approach
- Responsive grid layouts
- Adaptive navigation
- Touch-friendly interactions

## 🔮 Future Enhancements

- **Blockchain Integration**: Ethereum/Polygon smart contracts
- **Wallet Connection**: MetaMask, WalletConnect integration
- **NFT Minting**: Artist upload and minting capabilities
- **Marketplace Features**: Bidding, auctions, secondary sales
- **Community Features**: User profiles, favorites, social sharing
- **Analytics**: Sales tracking and market insights

## 🤝 Contributing

We welcome contributions! Please feel free to submit issues and pull requests.

## 📄 License

This project is licensed under the MIT License.

## 🌟 Acknowledgments

- **AgujaFilmica**: Our first collaborating artist collective
- **Andes Community**: For preserving and sharing cultural heritage
- **Next.js Team**: For the amazing framework
- **DaisyUI Team**: For beautiful UI components

---

**Qhatu NFT** - Connecting Andes artists with the world through blockchain technology 🏔️✨
