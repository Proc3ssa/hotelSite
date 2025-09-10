import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Wifi, Car, Coffee, Utensils, Waves, Dumbbell } from "lucide-react";
import heroImage from "@/assets/hero-hotel.jpg";
import luxurySuite from "@/assets/luxury-suite.jpg";
import spaAmenity from "@/assets/spa-amenity.jpg";

const Home = () => {
  const amenities = [
    { icon: Wifi, name: "Free WiFi", description: "High-speed internet throughout" },
    { icon: Car, name: "Valet Parking", description: "Complimentary parking service" },
    { icon: Coffee, name: "24/7 Room Service", description: "Around the clock dining" },
    { icon: Utensils, name: "Fine Dining", description: "Michelin-starred restaurant" },
    { icon: Waves, name: "Infinity Pool", description: "Rooftop pool with city views" },
    { icon: Dumbbell, name: "Fitness Center", description: "State-of-the-art equipment" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Absolutely stunning hotel with impeccable service. The attention to detail is extraordinary.",
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "A truly luxurious experience. The spa treatments were divine and the staff exceeded all expectations.",
    },
    {
      name: "Emma Rodriguez",
      rating: 5,
      text: "The most beautiful hotel I've ever stayed at. Every moment felt like pure luxury.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center gradient-hero">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-navy/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-cream max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 leading-tight">
            The Grandeur
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-cream/90 max-w-2xl mx-auto">
            Where luxury meets perfection. Experience unparalleled elegance in the heart of the city.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold hover:bg-gold-dark text-navy font-semibold px-8 py-4 text-lg">
              Book Your Stay
            </Button>
            <Button size="lg" variant="outline" className="border-cream text-cream hover:bg-cream hover:text-navy px-8 py-4 text-lg">
              Explore Rooms
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Amenities */}
      <section className="py-20 gradient-luxury">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">
              Unmatched Amenities
            </h2>
            <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
              Indulge in world-class facilities designed for your comfort and pleasure
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {amenities.map((amenity, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-gold transition-luxury cursor-pointer group">
                <amenity.icon className="w-12 h-12 text-gold mx-auto mb-4 group-hover:scale-110 transition-luxury" />
                <h3 className="font-semibold text-navy mb-2">{amenity.name}</h3>
                <p className="text-sm text-charcoal/70">{amenity.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">
              Luxury Accommodations
            </h2>
            <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
              Each room is a masterpiece of design and comfort
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={luxurySuite} 
                alt="Luxury Suite"
                className="rounded-lg shadow-luxury w-full"
              />
            </div>
            <div>
              <h3 className="text-3xl font-serif font-bold text-navy mb-4">Presidential Suite</h3>
              <p className="text-lg text-charcoal/80 mb-6">
                Our flagship accommodation featuring panoramic city views, marble bathrooms, 
                and personalized butler service. Experience the pinnacle of luxury living.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center text-charcoal/80">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                  1,200 sq ft of elegant living space
                </li>
                <li className="flex items-center text-charcoal/80">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                  Private balcony with city views
                </li>
                <li className="flex items-center text-charcoal/80">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                  Marble bathroom with soaking tub
                </li>
              </ul>
              <Button className="bg-navy hover:bg-navy-light text-cream">
                View All Rooms
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Spa Feature */}
      <section className="py-20 gradient-luxury">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-serif font-bold text-navy mb-4">World-Class Spa</h3>
              <p className="text-lg text-charcoal/80 mb-6">
                Rejuvenate your body and soul at our award-winning spa. From traditional 
                therapies to cutting-edge treatments, discover your path to wellness.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center text-charcoal/80">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                  12 treatment rooms with city views
                </li>
                <li className="flex items-center text-charcoal/80">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                  Infinity relaxation pool
                </li>
                <li className="flex items-center text-charcoal/80">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                  Signature holistic treatments
                </li>
              </ul>
              <Button className="bg-navy hover:bg-navy-light text-cream">
                Book Spa Treatment
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src={spaAmenity} 
                alt="Spa Amenity"
                className="rounded-lg shadow-luxury w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">
              Guest Experiences
            </h2>
            <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
              Discover what our distinguished guests say about their stay
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-gold transition-luxury">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-current" />
                  ))}
                </div>
                <p className="text-charcoal/80 mb-6 italic">"{testimonial.text}"</p>
                <h4 className="font-semibold text-navy">{testimonial.name}</h4>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-6">
            Begin Your Journey
          </h2>
          <p className="text-xl text-cream/90 mb-8 max-w-2xl mx-auto">
            Experience the extraordinary. Book your stay at The Grandeur and create memories that last a lifetime.
          </p>
          <Button size="lg" className="bg-gold hover:bg-gold-dark text-navy font-semibold px-8 py-4 text-lg">
            Reserve Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;