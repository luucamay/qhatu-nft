import Navbar from '@/components/Navbar';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      
      {/* About Header */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">About Qhatu NFT</h1>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
            Connecting the rich cultural heritage of the Andes with the innovative world of blockchain technology
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-base-content/70 mb-4">
                Qhatu NFT is dedicated to preserving and promoting the artistic traditions of the Andes mountains 
                through the power of blockchain technology. We believe that every piece of art tells a story, 
                and every story deserves to be shared with the world.
              </p>
              <p className="text-lg text-base-content/70">
                By creating digital collectibles from traditional Andean art, we&apos;re building a bridge between 
                ancient wisdom and modern innovation, ensuring that these cultural treasures are accessible 
                to collectors worldwide.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg p-8 text-center">
              <div className="text-8xl mb-4">🏔️</div>
              <h3 className="text-2xl font-bold mb-2">Andes Heritage</h3>
              <p className="text-base-content/70">Preserving cultural traditions through digital innovation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-16 px-4 bg-base-200">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our First Collaboration</h2>
            <p className="text-lg text-base-content/70">
              We&apos;re proud to partner with AgujaFilmica and their groundbreaking project &ldquo;Detrás de la Pantalla&rdquo;
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-xl">AgujaFilmica</h3>
                <p className="text-base-content/70">
                  A pioneering digital artist collective from the Andes, creating unique visual narratives 
                  that bridge traditional culture with contemporary digital expression.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View Artist Profile</button>
                </div>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-xl">Detrás de la Pantalla</h3>
                <p className="text-base-content/70">
                  &ldquo;Behind the Screen&rdquo; - A collection exploring the hidden stories and cultural depth 
                  that exist beyond the surface of digital media.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Explore Collection</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-base-content/70">
              The principles that guide our mission and shape our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-2">Cultural Preservation</h3>
              <p className="text-base-content/70">
                We&apos;re committed to preserving and celebrating the rich cultural heritage of the Andes mountains.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-4">🌐</div>
              <h3 className="text-xl font-bold mb-2">Global Accessibility</h3>
              <p className="text-base-content/70">
                Making Andean art accessible to collectors and enthusiasts around the world through blockchain technology.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-2">Artist Support</h3>
              <p className="text-base-content/70">
                Supporting artists from the Andes by providing them with new platforms and opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-base-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg text-base-content/70 mb-8">
            Have questions about our collection or want to collaborate? We&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-primary btn-lg">Contact Us</button>
            <button className="btn btn-outline btn-lg">Join Community</button>
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
