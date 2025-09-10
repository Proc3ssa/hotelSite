import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Waves, Dumbbell, Utensils, Car, Wifi, Coffee, Shield, Clock } from "lucide-react";
import spaImage from "@/assets/spa-amenity.jpg";

const Amenities = () => {
  const amenities = [
    {
      icon: Waves,
      name: "Rooftop Infinity Pool",
      description: "Stunning city views while you swim in our heated infinity pool",
      features: ["Heated year-round", "Pool bar service", "Private cabanas", "Sunset views"],
      hours: "6:00 AM - 10:00 PM",
    },
    {
      icon: Dumbbell,
      name: "Fitness Center",
      description: "State-of-the-art equipment with personal training available",
      features: ["24/7 access", "Personal trainers", "Yoga studio", "Modern equipment"],
      hours: "24 Hours",
    },
    {
      icon: Utensils,
      name: "Fine Dining",
      description: "Michelin-starred restaurant featuring contemporary cuisine",
      features: ["Michelin starred", "Wine sommelier", "Private dining", "Chef's table"],
      hours: "6:00 PM - 11:00 PM",
    },
    {
      icon: Car,
      name: "Valet Parking",
      description: "Complimentary valet parking and luxury vehicle service",
      features: ["24/7 valet", "Secure garage", "Car detailing", "Airport transfers"],
      hours: "24 Hours",
    },
    {
      icon: Wifi,
      name: "High-Speed WiFi",
      description: "Complimentary high-speed internet throughout the property",
      features: ["Fiber optic", "Business center", "Conference rooms", "Print services"],
      hours: "24 Hours",
    },
    {
      icon: Coffee,
      name: "Room Service",
      description: "24-hour room service featuring gourmet selections",
      features: ["24/7 service", "Gourmet menu", "In-room dining", "Special diets"],
      hours: "24 Hours",
    },
    {
      icon: Shield,
      name: "Concierge Service",
      description: "Personal concierge to assist with all your needs",
      features: ["Restaurant reservations", "Event tickets", "Local tours", "Personal shopping"],
      hours: "24 Hours",
    },
    {
      icon: Clock,
      name: "Business Center",
      description: "Full-service business center with meeting facilities",
      features: ["Meeting rooms", "Presentation equipment", "Secretary service", "Event planning"],
      hours: "6:00 AM - 10:00 PM",
    },
  ];

  const spaServices = [
    { name: "Signature Massage", duration: "90 min", price: "$350" },
    { name: "Facial Treatment", duration: "60 min", price: "$200" },
    { name: "Body Wrap", duration: "75 min", price: "$275" },
    { name: "Couples Package", duration: "120 min", price: "$650" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 gradient-luxury">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-navy mb-6">
            World-Class Amenities
          </h1>
          <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
            Indulge in an array of premium facilities and services designed to exceed your every expectation. 
            From rejuvenating spa treatments to gourmet dining experiences.
          </p>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <Card key={index} className="p-6 hover:shadow-luxury transition-luxury group">
                <amenity.icon className="w-12 h-12 text-gold mb-4 group-hover:scale-110 transition-luxury" />
                <h3 className="text-xl font-serif font-bold text-navy mb-3">{amenity.name}</h3>
                <p className="text-charcoal/80 mb-4">{amenity.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-navy mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {amenity.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-charcoal/70">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-sm">
                  <span className="font-semibold text-navy">Hours: </span>
                  <span className="text-charcoal/80">{amenity.hours}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Spa Spotlight */}
      <section className="py-20 gradient-luxury">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-navy mb-6">
                The Grandeur Spa
              </h2>
              <p className="text-lg text-charcoal/80 mb-8">
                Our award-winning spa offers a sanctuary of tranquility in the heart of the city. 
                Experience holistic wellness through our signature treatments, designed to restore 
                balance and rejuvenate your spirit.
              </p>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl font-serif font-semibold text-navy mb-4">Featured Treatments</h3>
                  <div className="space-y-4">
                    {spaServices.map((service, index) => (
                      <div key={index} className="flex justify-between items-center p-4 bg-background rounded-lg">
                        <div>
                          <h4 className="font-semibold text-navy">{service.name}</h4>
                          <p className="text-charcoal/70">{service.duration}</p>
                        </div>
                        <span className="text-xl font-bold text-gold">{service.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <Button className="bg-navy hover:bg-navy-light text-cream">
                Book Spa Treatment
              </Button>
            </div>
            
            <div>
              <img 
                src={spaImage} 
                alt="Spa Interior"
                className="rounded-lg shadow-luxury w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dining Experience */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-navy mb-4">
              Culinary Excellence
            </h2>
            <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
              Savor exceptional cuisine at our award-winning restaurants
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-gold transition-luxury">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Utensils className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-serif font-bold text-navy mb-4">Le Grandeur</h3>
              <p className="text-charcoal/80 mb-6">
                Michelin-starred fine dining with contemporary European cuisine and an extensive wine collection.
              </p>
              <div className="text-sm text-charcoal/70 mb-4">
                Dinner: 6:00 PM - 11:00 PM
              </div>
              <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-cream">
                Make Reservation
              </Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-gold transition-luxury">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Coffee className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-serif font-bold text-navy mb-4">Sky Lounge</h3>
              <p className="text-charcoal/80 mb-6">
                Rooftop bar offering craft cocktails, light bites, and panoramic city views.
              </p>
              <div className="text-sm text-charcoal/70 mb-4">
                Daily: 4:00 PM - 1:00 AM
              </div>
              <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-cream">
                View Menu
              </Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-gold transition-luxury">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-serif font-bold text-navy mb-4">Café Royale</h3>
              <p className="text-charcoal/80 mb-6">
                All-day dining featuring international favorites, afternoon tea, and artisanal pastries.
              </p>
              <div className="text-sm text-charcoal/70 mb-4">
                Daily: 6:00 AM - 11:00 PM
              </div>
              <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-cream">
                View Menu
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif font-bold text-cream mb-6">
            Experience Luxury
          </h2>
          <p className="text-xl text-cream/90 mb-8 max-w-2xl mx-auto">
            Book your stay and enjoy access to all our world-class amenities and services.
          </p>
          <Button size="lg" className="bg-gold hover:bg-gold-dark text-navy font-semibold px-8 py-4 text-lg">
            Reserve Your Experience
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Amenities;