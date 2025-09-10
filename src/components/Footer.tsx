import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-cream">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-gold mb-4">The Grandeur</h3>
            <p className="text-cream/80 mb-4">
              Experience unparalleled luxury in the heart of the city. Where elegance meets modern comfort.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-cream/60 hover:text-gold transition-luxury cursor-pointer" />
              <Instagram className="w-5 h-5 text-cream/60 hover:text-gold transition-luxury cursor-pointer" />
              <Twitter className="w-5 h-5 text-cream/60 hover:text-gold transition-luxury cursor-pointer" />
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4 text-gold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center text-cream/80">
                <Phone className="w-4 h-4 mr-3 text-gold" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-cream/80">
                <Mail className="w-4 h-4 mr-3 text-gold" />
                <span>reservations@thegrandeur.com</span>
              </div>
              <div className="flex items-center text-cream/80">
                <MapPin className="w-4 h-4 mr-3 text-gold" />
                <span>123 Luxury Avenue, Downtown</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/rooms" className="text-cream/80 hover:text-gold transition-luxury">Rooms & Suites</a></li>
              <li><a href="/amenities" className="text-cream/80 hover:text-gold transition-luxury">Amenities</a></li>
              <li><a href="/dining" className="text-cream/80 hover:text-gold transition-luxury">Dining</a></li>
              <li><a href="/spa" className="text-cream/80 hover:text-gold transition-luxury">Spa & Wellness</a></li>
              <li><a href="/events" className="text-cream/80 hover:text-gold transition-luxury">Events</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4 text-gold">Stay Connected</h4>
            <p className="text-cream/80 mb-4">Subscribe to receive exclusive offers and updates.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-navy-light border border-gold/30 rounded-l text-cream placeholder-cream/50 focus:outline-none focus:border-gold"
              />
              <button className="px-4 py-2 bg-gold hover:bg-gold-dark text-navy rounded-r transition-luxury">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-8 pt-8 text-center text-cream/60">
          <p>&copy; 2024 The Grandeur Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;