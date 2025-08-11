import Link from 'next/link';
import Navbar from '@/components/Navbar';
import FeaturedNFTsSection from '@/components/FeaturedNFTsSection';

const artists = [
  {
    name: "AgujaFilmica",
    description: "Pioneering digital artist from the Andes, creating unique collectibles that bridge traditional culture with modern technology.",
    avatar: "/api/placeholder/150/150",
    specialties: ["Digital Art", "Cultural Heritage", "Blockchain Art"]
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero min-h-screen gradient-bg hero-pattern pt-16">
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Qhatu NFT</h1>
            <p className="mb-5 text-xl">
              Discover unique NFT collectibles created by artists from the Andes mountains. 
              Each piece tells a story of culture, tradition, and innovation.
            </p>
            <button className="btn btn-primary">
              <Link href="/collection">Explore Collection</Link>
            </button>
          </div>
        </div>
      </section>

      {/* Featured NFTs Section */}
      <FeaturedNFTsSection />

      {/* Artists Section */}
      <section className="py-16 px-4 bg-base-200">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Meet Our Artists</h2>
            <p className="text-lg text-base-content/70">
              Talented creators from the Andes bringing their unique vision to the digital world
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artists.map((artist, index) => (
              <div key={index} className="card bg-base-100 shadow-xl">
                <div className="card-body text-center">
                  <div className="avatar mb-4">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <div className="w-full h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                        <div className="text-2xl">👨‍🎨</div>
                      </div>
                    </div>
                  </div>
                  <h3 className="card-title text-xl justify-center">{artist.name}</h3>
                  <p className="text-base-content/70 mb-4">{artist.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {artist.specialties.map((specialty, idx) => (
                      <span key={idx} className="badge badge-outline">{specialty}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Collecting?</h2>
            <p className="text-lg text-base-content/70 mb-8">
              Join the Qhatu NFT community and discover unique digital art from the Andes. 
              Each piece is a bridge between traditional culture and modern technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/collection" className="btn btn-primary btn-lg">Browse Collection</Link>
              <button className="btn btn-outline btn-lg">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer footer-center p-10 bg-base-300 text-base-content">
        <div>
          <h3 className="text-xl font-bold">Qhatu NFT</h3>
          <p className="text-sm">
            Connecting Andes artists with the world through blockchain technology
          </p>
          <p className="text-xs mt-2">
            © 2024 Qhatu NFT. All rights reserved.
          </p>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a className="link link-hover">About</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
