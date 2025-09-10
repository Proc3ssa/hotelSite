import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Car, Plane } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Reservation Request Sent",
      description: "We'll contact you within 24 hours to confirm your booking.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      inquiry: "",
      checkIn: "",
      checkOut: "",
      guests: "",
      message: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Reservations",
      details: ["+1 (555) 123-4567", "Available 24/7"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["reservations@thegrandeur.com", "info@thegrandeur.com"],
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Luxury Avenue", "Downtown District"],
    },
    {
      icon: Clock,
      title: "Front Desk",
      details: ["24 Hours Daily", "Concierge Available"],
    },
  ];

  const services = [
    {
      icon: Car,
      title: "Transportation",
      description: "Luxury vehicle service and airport transfers available",
      contact: "transportation@thegrandeur.com",
    },
    {
      icon: Plane,
      title: "Travel Concierge",
      description: "Flight bookings, itinerary planning, and local tours",
      contact: "concierge@thegrandeur.com",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 gradient-luxury">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-navy mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
            Ready to experience luxury? Our dedicated team is here to assist you with reservations, 
            special requests, and creating the perfect stay tailored to your preferences.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-luxury transition-luxury">
                <info.icon className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-serif font-bold text-navy mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-charcoal/80">{detail}</p>
                ))}
              </Card>
            ))}
          </div>

          {/* Reservation Form */}
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <h2 className="text-3xl font-serif font-bold text-navy mb-6">Make a Reservation</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <Label htmlFor="inquiry">Inquiry Type</Label>
                    <Select value={formData.inquiry} onValueChange={(value) => handleInputChange("inquiry", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="reservation">Room Reservation</SelectItem>
                        <SelectItem value="event">Event Planning</SelectItem>
                        <SelectItem value="spa">Spa Services</SelectItem>
                        <SelectItem value="dining">Dining Reservations</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="checkIn">Check-in Date</Label>
                    <Input
                      id="checkIn"
                      type="date"
                      value={formData.checkIn}
                      onChange={(e) => handleInputChange("checkIn", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="checkOut">Check-out Date</Label>
                    <Input
                      id="checkOut"
                      type="date"
                      value={formData.checkOut}
                      onChange={(e) => handleInputChange("checkOut", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="guests">Guests</Label>
                    <Select value={formData.guests} onValueChange={(value) => handleInputChange("guests", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="# of guests" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Guest</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="3">3 Guests</SelectItem>
                        <SelectItem value="4">4 Guests</SelectItem>
                        <SelectItem value="5+">5+ Guests</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Special Requests</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Any special requests or additional information..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full bg-gold hover:bg-gold-dark text-navy font-semibold py-3">
                  Send Reservation Request
                </Button>
              </form>
            </Card>

            {/* Map and Additional Services */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="p-8">
                <h3 className="text-2xl font-serif font-bold text-navy mb-4">Our Location</h3>
                <div className="bg-muted rounded-lg aspect-video flex items-center justify-center mb-4">
                  <span className="text-charcoal/50">Interactive Map</span>
                </div>
                <p className="text-charcoal/80 mb-4">
                  Perfectly situated in the heart of downtown, just minutes from major attractions, 
                  shopping districts, and business centers.
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-charcoal/70">
                    <strong>Distance to Airport:</strong> 25 minutes
                  </p>
                  <p className="text-sm text-charcoal/70">
                    <strong>Distance to Convention Center:</strong> 5 minutes
                  </p>
                  <p className="text-sm text-charcoal/70">
                    <strong>Distance to Financial District:</strong> 10 minutes
                  </p>
                </div>
              </Card>

              {/* Additional Services */}
              <Card className="p-8">
                <h3 className="text-2xl font-serif font-bold text-navy mb-6">Additional Services</h3>
                <div className="space-y-6">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <service.icon className="w-8 h-8 text-gold mt-1" />
                      <div>
                        <h4 className="font-semibold text-navy mb-2">{service.title}</h4>
                        <p className="text-charcoal/80 mb-2">{service.description}</p>
                        <p className="text-sm text-gold">{service.contact}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-bold text-cream mb-4">
            24/7 Guest Services
          </h2>
          <p className="text-xl text-cream/90 mb-6">
            Our dedicated team is available around the clock for any urgent needs or assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold hover:bg-gold-dark text-navy font-semibold">
              Call Now: +1 (555) 123-4567
            </Button>
            <Button size="lg" variant="outline" className="border-cream text-cream hover:bg-cream hover:text-navy">
              Live Chat Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;