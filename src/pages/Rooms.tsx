import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wifi, Coffee, Car, Utensils, Bath, Bed, Users, Square } from "lucide-react";

const Rooms = () => {
  const rooms = [
    {
      name: "Deluxe City View",
      price: "$450",
      image: "/api/placeholder/600/400",
      size: "450 sq ft",
      guests: "2 Guests",
      beds: "King Bed",
      features: ["City view", "Marble bathroom", "Work desk", "Mini bar"],
      amenities: [Wifi, Coffee, Bath, Utensils],
      popular: false,
    },
    {
      name: "Executive Suite",
      price: "$750",
      image: "/api/placeholder/600/400",
      size: "700 sq ft",
      guests: "3 Guests",
      beds: "King Bed + Sofa",
      features: ["Separate living area", "Premium city views", "Walk-in closet", "Butler service"],
      amenities: [Wifi, Coffee, Bath, Utensils, Car],
      popular: true,
    },
    {
      name: "Presidential Suite",
      price: "$1,200",
      image: "/api/placeholder/600/400",
      size: "1,200 sq ft",
      guests: "4 Guests",
      beds: "King Bed",
      features: ["Panoramic views", "Private balcony", "Marble soaking tub", "Personal butler"],
      amenities: [Wifi, Coffee, Bath, Utensils, Car],
      popular: false,
    },
    {
      name: "Royal Penthouse",
      price: "$2,500",
      image: "/api/placeholder/600/400",
      size: "2,000 sq ft",
      guests: "6 Guests",
      beds: "2 King Beds",
      features: ["Entire floor", "Private elevator", "Rooftop terrace", "Personal chef"],
      amenities: [Wifi, Coffee, Bath, Utensils, Car],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 gradient-luxury">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-navy mb-6">
            Rooms & Suites
          </h1>
          <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
            Each accommodation is meticulously designed to provide the ultimate in luxury and comfort, 
            featuring premium amenities and breathtaking views.
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {rooms.map((room, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-luxury transition-luxury">
                {room.popular && (
                  <div className="relative">
                    <Badge className="absolute top-4 left-4 z-10 bg-gold text-navy font-semibold">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <div className="aspect-video bg-muted relative">
                  <img 
                    src={room.image} 
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-serif font-bold text-navy">{room.name}</h3>
                    <div className="text-right">
                      <span className="text-3xl font-bold text-gold">{room.price}</span>
                      <span className="text-charcoal/60">/night</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 mb-6 text-charcoal/80">
                    <div className="flex items-center gap-2">
                      <Square className="w-4 h-4" />
                      <span>{room.size}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{room.guests}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bed className="w-4 h-4" />
                      <span>{room.beds}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-navy mb-3">Room Features</h4>
                    <ul className="space-y-2">
                      {room.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-charcoal/80">
                          <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-navy mb-3">Amenities</h4>
                    <div className="flex gap-4">
                      {room.amenities.map((Amenity, idx) => (
                        <div key={idx} className="flex items-center justify-center w-10 h-10 bg-gold/10 rounded-full">
                          <Amenity className="w-5 h-5 text-gold" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button className="flex-1 bg-navy hover:bg-navy-light text-cream">
                      Book Now
                    </Button>
                    <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-cream">
                      View Details
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-cream mb-4">
              Special Packages
            </h2>
            <p className="text-xl text-cream/90 max-w-2xl mx-auto">
              Enhance your stay with our curated experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <h3 className="text-xl font-serif font-bold text-navy mb-4">Romance Package</h3>
              <p className="text-charcoal/80 mb-6">
                Champagne, rose petals, couples massage, and private dining
              </p>
              <Button className="bg-gold hover:bg-gold-dark text-navy">
                From $200
              </Button>
            </Card>

            <Card className="p-8 text-center">
              <h3 className="text-xl font-serif font-bold text-navy mb-4">Business Package</h3>
              <p className="text-charcoal/80 mb-6">
                Meeting room access, express laundry, and executive lounge
              </p>
              <Button className="bg-gold hover:bg-gold-dark text-navy">
                From $150
              </Button>
            </Card>

            <Card className="p-8 text-center">
              <h3 className="text-xl font-serif font-bold text-navy mb-4">Wellness Retreat</h3>
              <p className="text-charcoal/80 mb-6">
                Spa treatments, yoga sessions, and healthy dining options
              </p>
              <Button className="bg-gold hover:bg-gold-dark text-navy">
                From $300
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;