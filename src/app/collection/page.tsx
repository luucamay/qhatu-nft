import Navbar from '@/components/Navbar';
import CollectionSection from '@/components/CollectionSection';

export default function CollectionPage() {
  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      
      {/* Collection Header */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">NFT Collection</h1>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
            Explore our complete collection of unique NFTs created by talented artists from the Andes mountains. 
            Each piece tells a story of culture, tradition, and innovation.
          </p>
        </div>
      </section>

      {/* Collection Content */}
      <CollectionSection />

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
