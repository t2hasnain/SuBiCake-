
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import FloatingElements from './FloatingElements';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const heroHeight = heroRef.current.offsetHeight;
        const parallaxValue = scrollY * 0.5;
        
        if (scrollY <= heroHeight) {
          heroRef.current.style.transform = `translateY(${parallaxValue}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cream overflow-hidden pt-16">
      <div ref={heroRef} className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl animate-bounce-slight text-chocolate mb-6">
            <span className="block">Sweet Dreams Are Made Of</span>
            <span className="text-pink">Super Biscuits</span>
            <span className="text-yellow mx-2">+</span>
            <span className="text-pink">Super Cakes</span>
          </h1>
          
          <p className="text-lg md:text-xl font-poppins text-chocolate/80 mb-8 max-w-2xl mx-auto">
            Handcrafted with love, our delicious treats bring joy to every bite. 
            Discover the most delightful biscuits and cakes that will make your taste buds dance!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-12">
            <Button 
              className="bg-pink hover:bg-peach text-chocolate font-comic font-bold text-lg py-6 px-8 btn-bounce"
            >
              Shop Biscuits
            </Button>
            <Button 
              className="bg-yellow hover:bg-yellow/80 text-chocolate font-comic font-bold text-lg py-6 px-8 btn-bounce"
            >
              Shop Cakes
            </Button>
          </div>
          
          <div className="flex justify-center items-center space-x-3 text-chocolate/60">
            <div className="w-10 h-10 rounded-full bg-pink animate-bounce-slight delay-100"></div>
            <div className="w-8 h-8 rounded-full bg-yellow animate-bounce-slight delay-200"></div>
            <div className="w-12 h-12 rounded-full bg-peach animate-bounce-slight delay-300"></div>
            <div className="w-8 h-8 rounded-full bg-mint animate-bounce-slight delay-400"></div>
          </div>
        </div>
      </div>
      
      {/* Animated floating background elements */}
      <FloatingElements type="hero" density="high" />
      
      {/* Decorative divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path 
            fill="#FFF" 
            fillOpacity="1" 
            d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,128C672,117,768,139,864,154.7C960,171,1056,181,1152,176C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
