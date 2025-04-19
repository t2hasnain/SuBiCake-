
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white relative overflow-hidden pt-16 pb-6">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path 
            fill="#FFF9E6" 
            fillOpacity="1" 
            d="M0,128L48,149.3C96,171,192,213,288,224C384,235,480,213,576,176C672,139,768,85,864,80C960,75,1056,117,1152,144C1248,171,1344,181,1392,186.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
          </path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* Brand and About */}
          <div className="md:col-span-1 lg:col-span-1">
            <h3 className="text-2xl font-comic font-bold text-chocolate mb-4">
              <span className="text-pink">Super</span> Biscuit <span className="text-yellow">+</span> <span className="text-pink">Super</span> Cake
            </h3>
            <p className="text-chocolate/70 mb-6 font-poppins text-sm">
              Handcrafted treats that bring sweetness to your special moments. Made with love since 2015.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Mail size={18} />} />
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1 lg:col-span-1">
            <h4 className="font-comic font-bold text-lg text-chocolate mb-4">Quick Links</h4>
            <ul className="space-y-3 font-poppins">
              <FooterLink href="#">Home</FooterLink>
              <FooterLink href="#biscuits">Our Biscuits</FooterLink>
              <FooterLink href="#cakes">Our Cakes</FooterLink>
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div className="md:col-span-1 lg:col-span-1">
            <h4 className="font-comic font-bold text-lg text-chocolate mb-4">Customer Service</h4>
            <ul className="space-y-3 font-poppins">
              <FooterLink href="#">Shipping Policy</FooterLink>
              <FooterLink href="#">Return Policy</FooterLink>
              <FooterLink href="#">FAQ</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="md:col-span-3 lg:col-span-1">
            <h4 className="font-comic font-bold text-lg text-chocolate mb-4">Get Sweet Updates</h4>
            <p className="text-chocolate/70 mb-4 font-poppins text-sm">
              Subscribe for new products, exclusive offers, and sweet surprises!
            </p>
            <div className="flex flex-col space-y-3">
              <Input 
                placeholder="Your email" 
                className="bg-cream/50 border-none focus:ring-pink focus-visible:ring-pink" 
              />
              <Button className="bg-pink hover:bg-peach text-chocolate font-comic font-bold w-full btn-bounce">
                Subscribe
              </Button>
            </div>
            {/* Decorative cookie */}
            <div className="relative h-16 mt-4">
              <div className="absolute right-0 bottom-0 w-12 h-12 rounded-full bg-yellow animate-bounce-slight">
                <div className="absolute inset-2 rounded-full bg-yellow/70"></div>
                <div className="absolute top-2 left-3 w-2 h-2 rounded-full bg-chocolate/30"></div>
                <div className="absolute top-6 right-3 w-2 h-2 rounded-full bg-chocolate/30"></div>
              </div>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-100 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center font-poppins text-sm text-chocolate/60">
          <p>© {new Date().getFullYear()} Super Biscuit + Super Cake. All rights reserved.</p>
          <p className="mt-3 md:mt-0">Made with love and sprinkles! 🍪 🧁</p>
        </div>
      </div>
      
      {/* Decorative bottom elements */}
      <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-yellow/20 animate-float-alt"></div>
      <div className="absolute -bottom-10 left-1/3 w-16 h-16 rounded-full bg-pink/20 animate-float"></div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <li>
      <a 
        href={href} 
        className="text-chocolate/70 hover:text-pink transition-colors duration-200 text-sm"
      >
        {children}
      </a>
    </li>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <a 
      href="#" 
      className="w-8 h-8 rounded-full bg-cream flex items-center justify-center hover:bg-pink/20 transition-colors duration-200 animate-wiggle hover:animate-none text-chocolate"
    >
      {icon}
    </a>
  );
};

export default Footer;
