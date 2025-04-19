
import React from 'react';
import { Award, Coffee, Heart, Leaf, Shield, Star, Truck } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-comic font-bold text-chocolate mb-8 text-center">
          About <span className="text-pink">Super</span> Biscuit <span className="text-yellow">+</span> <span className="text-pink">Super</span> Cake
        </h1>
        
        <div className="mb-12 relative">
          <div className="absolute -z-10 -top-10 -left-10 w-32 h-32 bg-yellow/50 rounded-full blur-xl"></div>
          <div className="absolute -z-10 -bottom-10 -right-10 w-24 h-24 bg-pink/50 rounded-full blur-xl"></div>
          
          <p className="text-lg text-chocolate mb-6">
            Welcome to Super Biscuit + Super Cake, where every treat is baked with love and sprinkled with joy! We started our journey in 2010 with a simple mission: to create delicious baked goods that bring smiles to people's faces.
          </p>
          
          <p className="text-lg text-chocolate">
            What began as a small family kitchen experiment has grown into a beloved bakery, serving thousands of happy customers. But despite our growth, we've stayed true to our roots—using only the finest ingredients and traditional recipes passed down through generations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-cream/50 p-8 rounded-2xl border border-yellow/20 shadow-sm">
            <h2 className="text-2xl font-comic font-bold text-chocolate mb-4 flex items-center">
              <Heart className="mr-2 text-pink" /> Our Values
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Shield className="mr-3 text-chocolate mt-1" size={20} />
                <span>Quality ingredients with no artificial preservatives</span>
              </li>
              <li className="flex items-start">
                <Leaf className="mr-3 text-chocolate mt-1" size={20} />
                <span>Sustainable practices and eco-friendly packaging</span>
              </li>
              <li className="flex items-start">
                <Coffee className="mr-3 text-chocolate mt-1" size={20} />
                <span>Handcrafted with attention to every detail</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-cream/50 p-8 rounded-2xl border border-pink/20 shadow-sm">
            <h2 className="text-2xl font-comic font-bold text-chocolate mb-4 flex items-center">
              <Award className="mr-2 text-pink" /> Our Commitment
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Star className="mr-3 text-chocolate mt-1" size={20} />
                <span>Freshly baked goods made daily</span>
              </li>
              <li className="flex items-start">
                <Truck className="mr-3 text-chocolate mt-1" size={20} />
                <span>Fast delivery to ensure freshness</span>
              </li>
              <li className="flex items-start">
                <Heart className="mr-3 text-chocolate mt-1" size={20} />
                <span>Community support through charitable donations</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-comic font-bold text-chocolate mb-4">Visit Us</h2>
          <p className="text-lg text-chocolate/80">
            123 Sweet Street, Bakery Town<br />
            Open Mon-Sat: 8am - 6pm<br />
            Phone: (123) 456-7890
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
