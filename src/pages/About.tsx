import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Star, MapPin, Clock, Phone } from "lucide-react";

const About = () => {
  const achievements = [
    { icon: Award, title: "Michelin Star", description: "Fine dining excellence" },
    { icon: Star, title: "5-Star Rating", description: "Luxury hospitality" },
    { icon: Users, title: "50+ Years", description: "Heritage of service" },
    { icon: MapPin, title: "Prime Location", description: "City center address" },
  ];

  const team = [
    {
      name: "Marcus Beaumont",
      position: "General Manager",
      experience: "20+ years in luxury hospitality",
      image: "/api/placeholder/300/300",
    },
    {
      name: "Isabella Chen",
      position: "Executive Chef",
      experience: "Michelin-starred culinary expertise",
      image: "/api/placeholder/300/300",
    },
    {
      name: "Alexander Sterling",
      position: "Head Concierge",
      experience: "Master of personalized service",
      image: "/api/placeholder/300/300",
    },
  ];

  const timeline = [
    { year: "1970", event: "The Grandeur Hotel opens its doors" },
    { year: "1985", event: "Major renovation and expansion completed" },
    { year: "1998", event: "Awarded first Michelin star for dining" },
    { year: "2010", event: "Luxury spa and wellness center opens" },
    { year: "2020", event: "Comprehensive modernization project" },
    { year: "2024", event: "Celebrating 54 years of excellence" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 gradient-luxury">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-navy mb-6">
              Our Story
            </h1>
            <p className="text-xl text-charcoal/80 mb-8">
              For over five decades, The Grandeur has been synonymous with luxury, elegance, 
              and unparalleled service. Our commitment to excellence has made us a beacon 
              of hospitality in the heart of the city.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-gold transition-luxury">
                  <achievement.icon className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h3 className="font-bold text-navy mb-2">{achievement.title}</h3>
                  <p className="text-sm text-charcoal/70">{achievement.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-navy mb-6">
                A Legacy of Excellence
              </h2>
              <p className="text-lg text-charcoal/80 mb-6">
                Founded in 1970 by visionary hotelier Charles Grandeur, our hotel began as a 
                dream to create the most luxurious accommodation experience in the city. What 
                started as an ambitious project has evolved into an institution of hospitality.
              </p>
              <p className="text-lg text-charcoal/80 mb-8">
                Through decades of thoughtful expansion and meticulous attention to detail, 
                we have cultivated a reputation for excellence that attracts discerning 
                travelers from around the globe. Every corner of our property tells a story 
                of craftsmanship, luxury, and dedication to the art of hospitality.
              </p>
              <Button className="bg-navy hover:bg-navy-light text-cream">
                Explore Our Heritage
              </Button>
            </div>
            <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
              <span className="text-charcoal/50">Historic Hotel Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 gradient-luxury">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-navy mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
              Milestones that shaped The Grandeur into the luxury destination it is today
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {timeline.map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-gold transition-luxury">
                  <div className="flex items-center mb-4">
                    <Clock className="w-6 h-6 text-gold mr-3" />
                    <span className="text-2xl font-bold text-gold">{item.year}</span>
                  </div>
                  <p className="text-lg text-charcoal/80">{item.event}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-navy mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
              Dedicated professionals committed to creating extraordinary experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-luxury transition-luxury">
                <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-12 h-12 text-charcoal/40" />
                </div>
                <h3 className="text-xl font-serif font-bold text-navy mb-2">{member.name}</h3>
                <p className="text-gold font-semibold mb-3">{member.position}</p>
                <p className="text-charcoal/80">{member.experience}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold text-cream mb-6">
              Our Philosophy
            </h2>
            <p className="text-xl text-cream/90 mb-8">
              "Luxury is not about opulence, but about the thoughtful curation of experiences 
              that create lasting memories. Every guest who walks through our doors becomes 
              part of The Grandeur family."
            </p>
            <p className="text-lg text-cream/80 mb-8">
              We believe that true hospitality lies in anticipating needs before they are 
              expressed, creating moments of delight that surprise and inspire, and maintaining 
              the highest standards in every detail of our guests' experience.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-cream mb-2">Excellence</h3>
                <p className="text-cream/80">Uncompromising standards in everything we do</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-cream mb-2">Service</h3>
                <p className="text-cream/80">Personalized attention to every guest</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-cream mb-2">Heritage</h3>
                <p className="text-cream/80">Honoring tradition while embracing innovation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-navy mb-6">
                Visit Us
              </h2>
              <p className="text-lg text-charcoal/80 mb-8">
                Located in the prestigious downtown district, The Grandeur offers easy access 
                to the city's finest shopping, dining, and cultural attractions.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-gold mr-4" />
                  <div>
                    <p className="font-semibold text-navy">Address</p>
                    <p className="text-charcoal/80">123 Luxury Avenue, Downtown District</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-gold mr-4" />
                  <div>
                    <p className="font-semibold text-navy">Reservations</p>
                    <p className="text-charcoal/80">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
              <span className="text-charcoal/50">Hotel Location Map</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;