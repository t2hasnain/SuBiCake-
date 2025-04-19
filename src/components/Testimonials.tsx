
import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import TestimonialCard, { TestimonialProps } from './TestimonialCard';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const testimonials: TestimonialProps[] = [
    {
      id: 1,
      name: "Emily Johnson",
      role: "Cake Enthusiast",
      content: "The chocolate chip biscuits are out of this world! So buttery and the perfect amount of chocolate. My kids ask for them every day!",
      rating: 5,
      product: "Chocolate Chip Biscuits"
    },
    {
      id: 2,
      name: "Michael Smith",
      role: "Coffee Shop Owner",
      content: "We've been serving Super Biscuit + Super Cake products in our coffee shop for months, and our customers absolutely love them!",
      rating: 5,
      product: "Assorted Selection"
    },
    {
      id: 3,
      name: "Sarah Williams",
      role: "Food Blogger",
      content: "The red velvet cake is simply divine. The texture is perfect and the cream cheese frosting is to die for. Highly recommend!",
      rating: 5,
      product: "Red Velvet Cake"
    },
    {
      id: 4,
      name: "David Chen",
      role: "Birthday Party Planner",
      content: "I ordered a custom cake for my daughter's birthday and it was beyond my expectations. Everyone loved it!",
      rating: 5,
      product: "Custom Birthday Cake"
    },
    {
      id: 5,
      name: "Jessica Miller",
      role: "Regular Customer",
      content: "Their shortbread biscuits remind me of my grandmother's recipe. Absolutely delicious with tea in the afternoon!",
      rating: 4,
      product: "Shortbread Selection"
    },
    {
      id: 6,
      name: "Robert Taylor",
      role: "Office Manager",
      content: "We get their treat boxes for our office meetings and they're always a hit. Great selection and fantastic quality.",
      rating: 5,
      product: "Office Treat Box"
    }
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [pagesCount, setPagesCount] = useState(1);
  
  // Calculate number of visible items based on screen width
  const getVisibleItems = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };
  
  useEffect(() => {
    const calculatePages = () => {
      const visibleItems = getVisibleItems();
      const pages = Math.ceil(testimonials.length / visibleItems);
      setPagesCount(pages);
    };
    
    calculatePages();
    window.addEventListener('resize', calculatePages);
    
    return () => {
      window.removeEventListener('resize', calculatePages);
    };
  }, [testimonials.length]);
  
  const nextPage = () => {
    if (currentPage < pagesCount - 1) {
      setCurrentPage(current => current + 1);
    } else {
      // Loop back to first page
      setCurrentPage(0);
    }
  };
  
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(current => current - 1);
    } else {
      // Loop to last page
      setCurrentPage(pagesCount - 1);
    }
  };
  
  // Scroll to the correct position when page changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      const visibleItems = getVisibleItems();
      const itemWidth = scrollContainerRef.current.scrollWidth / testimonials.length;
      const scrollTo = itemWidth * visibleItems * currentPage;
      
      scrollContainerRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  }, [currentPage, testimonials.length]);

  return (
    <section id="testimonials" className="section-padding bg-cream relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-comic font-bold text-chocolate mb-3">
            <span className="text-pink">Sweet</span> Words from <span className="text-yellow">Happy</span> Customers
          </h2>
          <p className="text-lg font-poppins text-chocolate/70">
            Our treats make people smile! Here's what our customers have to say about our super biscuits and cakes.
          </p>
        </div>
        
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="grid grid-flow-col auto-cols-[90%] sm:auto-cols-[45%] lg:auto-cols-[30%] gap-5 overflow-x-auto snap-x snap-mandatory pb-8 hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="snap-start">
                <TestimonialCard 
                  testimonial={testimonial} 
                  animationDelay={index * 0.1}
                />
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <Button
              onClick={prevPage}
              variant="outline"
              size="icon"
              className="rounded-full border-chocolate/20 hover:bg-chocolate/10"
              disabled={pagesCount <= 1}
            >
              <ChevronLeft className="text-chocolate" size={20} />
            </Button>
            
            <div className="flex items-center gap-2">
              {[...Array(pagesCount)].map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all",
                    index === currentPage ? "bg-chocolate scale-125" : "bg-chocolate/30"
                  )}
                  onClick={() => setCurrentPage(index)}
                ></button>
              ))}
            </div>
            
            <Button
              onClick={nextPage}
              variant="outline"
              size="icon"
              className="rounded-full border-chocolate/20 hover:bg-chocolate/10"
              disabled={pagesCount <= 1}
            >
              <ChevronRight className="text-chocolate" size={20} />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-pink opacity-20"></div>
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-yellow opacity-20"></div>
      <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-peach opacity-20"></div>
    </section>
  );
};

export default Testimonials;
