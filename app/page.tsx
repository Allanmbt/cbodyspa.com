"use client";

import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Clock, 
  Shield, 
  Users, 
  Globe, 
  Star, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Send,
  CheckCircle,
  ArrowRight,
  Heart,
  Sparkles,
  Timer
} from "lucide-react";

export default function Home() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />

      {/* Why Choose CBODY */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose CBODY?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the finest outcall massage service in Bangkok with our professional approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Quick Arrival</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We arrive at your hotel within 45-60 minutes of booking confirmation
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Hotel Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Discreet service welcomed by all major Bangkok hotels and accommodations
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Selected Therapists</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Professionally trained massage therapists with years of experience
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">English Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Full English communication support for international visitors
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About CBODY */}
      <section id="about" className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              About CBODY
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                CBODY is Bangkok&apos;s premier outcall massage service, specializing in bringing authentic Thai wellness 
                directly to your hotel room. We understand that after a long day exploring the vibrant streets of Bangkok 
                or attending business meetings, you deserve to unwind in the comfort and privacy of your own space.
              </p>
              
              <p>
                Our team consists of carefully selected, professionally trained therapists who are not only skilled in 
                traditional Thai massage techniques but also fluent in English. We cater specifically to tourists and 
                expatriates, ensuring clear communication and a service that meets international standards of professionalism 
                and discretion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Therapists */}
      <section id="therapists" className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Meet Our Therapists
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals ready to provide you with exceptional massage therapy
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Maya", tags: "Elegant · Oil Massage · Sukhumvit", time: "9 AM - 11 PM", avatar: "👩‍💼" },
              { name: "Nim", tags: "Traditional · Thai Massage · Silom", time: "10 AM - 12 AM", avatar: "👩‍⚕️" },
              { name: "Ploy", tags: "Gentle · Aromatherapy · Siam", time: "8 AM - 10 PM", avatar: "👩‍🦰" },
              { name: "Fon", tags: "Deep Tissue · Sports · Asoke", time: "9 AM - 11 PM", avatar: "👩‍💼" },
              { name: "Nong", tags: "Relaxing · Foot Massage · Phrom Phong", time: "11 AM - 1 AM", avatar: "👩‍⚕️" },
              { name: "Beau", tags: "Combination · Full Body · Thonglor", time: "8 AM - 12 AM", avatar: "👩‍🦰" }
            ].map((therapist, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="text-6xl mb-4">{therapist.avatar}</div>
                  <CardTitle className="text-xl">{therapist.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {therapist.tags}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mb-4">
                    <Timer className="h-4 w-4" />
                    <span>{therapist.time}</span>
                  </div>
                  <Button 
                    onClick={scrollToContact}
                    variant="outline" 
                    className="w-full"
                  >
                    Book {therapist.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of professional massage treatments designed to restore your body and mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Traditional Thai Massage",
                price: "THB 800 - 1,200",
                description: "Authentic Thai massage using traditional techniques to improve flexibility and circulation",
                icon: <Heart className="h-8 w-8 text-primary" />
              },
              {
                title: "Oil Massage",
                price: "THB 900 - 1,400",
                description: "Relaxing full-body massage with premium aromatherapy oils for deep relaxation",
                icon: <Sparkles className="h-8 w-8 text-primary" />
              },
              {
                title: "Combination Therapy",
                price: "THB 1,100 - 1,600",
                description: "Perfect blend of Thai massage and oil massage for the ultimate wellness experience",
                icon: <Users className="h-8 w-8 text-primary" />
              },
              {
                title: "Foot Massage",
                price: "THB 700 - 1,000",
                description: "Therapeutic foot and leg massage to relieve tension and improve circulation",
                icon: <MapPin className="h-8 w-8 text-primary" />
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary">
                    {service.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button onClick={scrollToContact} className="w-full">
                    Book This Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground">
              * Final prices confirmed at booking time. All prices include therapist travel and setup.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about our outcall massage service in Bangkok
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="booking">
                <AccordionTrigger className="text-left">
                  How do I book an outcall massage session?
                </AccordionTrigger>
                <AccordionContent>
                  Simply contact us via WhatsApp, Telegram, or Line with your preferred time, location, and service type. 
                  We&apos;ll confirm availability and provide you with the therapist details and exact arrival time.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="arrival">
                <AccordionTrigger className="text-left">
                  How long does it take for the therapist to arrive?
                </AccordionTrigger>
                <AccordionContent>
                  Our therapists typically arrive within 45-60 minutes of booking confirmation, depending on your location 
                  in Bangkok and current traffic conditions. We always provide accurate arrival estimates.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="payment">
                <AccordionTrigger className="text-left">
                  What payment methods do you accept?
                </AccordionTrigger>
                <AccordionContent>
                  We accept cash payment in Thai Baht upon service completion. Some therapists also accept digital payments 
                  through local Thai apps - please ask when booking if you prefer this option.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="cancellation">
                <AccordionTrigger className="text-left">
                  What is your cancellation policy?
                </AccordionTrigger>
                <AccordionContent>
                  You can cancel or reschedule your appointment up to 30 minutes before the confirmed arrival time without 
                  any charges. Last-minute cancellations may incur a small service fee.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="privacy">
                <AccordionTrigger className="text-left">
                  How do you ensure privacy and discretion?
                </AccordionTrigger>
                <AccordionContent>
                  All our therapists are trained in professional conduct and discretion. We work with major Bangkok hotels 
                  who trust our service. Your privacy and comfort are our top priorities.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="language">
                <AccordionTrigger className="text-left">
                  Do your therapists speak English?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, all our therapists have basic to intermediate English skills. Our booking team is fully bilingual 
                  and available to assist with any communication needs during your session.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="equipment">
                <AccordionTrigger className="text-left">
                  What equipment do therapists bring?
                </AccordionTrigger>
                <AccordionContent>
                  Our therapists come fully equipped with professional massage oils, towels, and a portable massage mat. 
                  You don&apos;t need to prepare anything - just ensure you have adequate space in your room.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="duration">
                <AccordionTrigger className="text-left">
                  How long do massage sessions last?
                </AccordionTrigger>
                <AccordionContent>
                  Standard sessions are 60 minutes, but we also offer 90-minute and 120-minute sessions. 
                  The duration includes setup time, so you get the full massage experience you&apos;ve paid for.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section id="reviews" className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real experiences from satisfied customers who chose CBODY for their Bangkok massage needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "James M.",
                location: "UK Tourist",
                rating: 5,
                review: "Absolutely fantastic service! Maya arrived right on time to my hotel in Sukhumvit. Professional, relaxing, and exactly what I needed after a long flight."
              },
              {
                name: "Sarah L.",
                location: "Business Traveler",
                rating: 5,
                review: "Perfect for busy schedules. Booked through WhatsApp and Nim was at my hotel within an hour. Great English communication and very professional service."
              },
              {
                name: "Michael R.",
                location: "Expat in Bangkok",
                rating: 5,
                review: "I&apos;ve used CBODY multiple times now. Consistently excellent service, fair pricing, and the therapists are genuinely skilled. Highly recommend!"
              }
            ].map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <CardDescription>{review.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">&quot;{review.review}&quot;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Book */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              How to Book Your Session
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple three-step process to get your professional massage delivered to your hotel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Choose & Contact",
                description: "Select your preferred time, location, and massage type. Contact us via WhatsApp, Telegram, or Line.",
                icon: <MessageCircle className="h-8 w-8 text-primary" />
              },
              {
                step: "2",
                title: "Confirm Details",
                description: "We&apos;ll confirm your booking, provide therapist details, and give you an accurate arrival time.",
                icon: <CheckCircle className="h-8 w-8 text-primary" />
              },
              {
                step: "3",
                title: "Enjoy Your Session",
                description: "Your therapist arrives with all equipment. Relax and enjoy your professional massage experience.",
                icon: <Heart className="h-8 w-8 text-primary" />
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Book Your Massage?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Contact us now to schedule your professional outcall massage session in Bangkok
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  platform: "WhatsApp",
                  icon: <MessageCircle className="h-8 w-8" />,
                  link: "https://wa.me/66123456789",
                  description: "Quick responses, easy booking",
                  color: "text-green-600"
                },
                {
                  platform: "Telegram",
                  icon: <Send className="h-8 w-8" />,
                  link: "https://t.me/cbodyspa",
                  description: "Secure messaging, instant confirmation",
                  color: "text-blue-600"
                },
                {
                  platform: "Line",
                  icon: <Phone className="h-8 w-8" />,
                  link: "https://line.me/ti/p/cbodyspa",
                  description: "Popular in Thailand, local support",
                  color: "text-green-500"
                }
              ].map((contact, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className={`mx-auto mb-4 ${contact.color}`}>
                      {contact.icon}
                    </div>
                    <CardTitle className="text-xl">{contact.platform}</CardTitle>
                    <CardDescription>{contact.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      asChild 
                      className="w-full bg-primary hover:bg-primary/90"
                    >
                      <a 
                        href={contact.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center"
                      >
                        Contact via {contact.platform}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Email Backup */}
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Prefer email? Contact us at:{" "}
                <a 
                  href="mailto:info@cbodyspa.com" 
                  className="text-primary hover:underline font-medium"
                >
                  info@cbodyspa.com
                </a>
              </p>
              
              {/* Final CTA */}
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cbody-gradient"
              >
                Book Your Massage Session Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
