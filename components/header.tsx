"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { MessageCircle, Phone, Send } from "lucide-react";

export function Header() {
  const [isQROpen, setIsQROpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              CBODY
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('therapists')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Therapists
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Reviews
            </button>
          </nav>

          {/* Social Icons & CTA */}
          <div className="flex items-center space-x-4">
            {/* Social Icons */}
            <div className="hidden sm:flex items-center space-x-2">
              <Dialog open={isQROpen} onOpenChange={setIsQROpen}>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="sm" className="p-2">
                    <MessageCircle className="h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <div className="text-center space-y-4">
                    <h3 className="text-lg font-semibold">Contact Us</h3>
                    <div className="space-y-3">
                      <a 
                        href="https://wa.me/66123456789" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 p-3 border rounded-lg hover:bg-muted transition-colors"
                      >
                        <MessageCircle className="h-5 w-5 text-green-500" />
                        <span>WhatsApp</span>
                      </a>
                      <a 
                        href="https://t.me/cbodyspa" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 p-3 border rounded-lg hover:bg-muted transition-colors"
                      >
                        <Send className="h-5 w-5 text-blue-500" />
                        <span>Telegram</span>
                      </a>
                      <a 
                        href="https://line.me/ti/p/cbodyspa" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 p-3 border rounded-lg hover:bg-muted transition-colors"
                      >
                        <Phone className="h-5 w-5 text-green-600" />
                        <span>Line</span>
                      </a>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* CTA Button */}
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
} 