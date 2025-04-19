
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import ProductCard, { ProductProps } from './ProductCard';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FloatingElements from './FloatingElements';

interface ProductCarouselProps {
  title: string;
  subtitle: string;
  category: 'biscuit' | 'cake';
  products: ProductProps[];
  id?: string;
}

const ProductCarousel = ({ title, subtitle, category, products, id }: ProductCarouselProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isTouching, setIsTouching] = useState(false);
  const [touchStart, setTouchStart] = useState(0);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setScrollPosition(scrollLeft);
    
    // Show/hide arrows based on scroll position
    setShowLeftArrow(scrollLeft > 10);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
      
      // Check if there's enough content to scroll
      setShowRightArrow(scrollContainer.scrollWidth > scrollContainer.clientWidth);
    }
    
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, [products]);
  
  const scrollLeft = () => {
    if (!scrollContainerRef.current) return;
    
    scrollContainerRef.current.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  };
  
  const scrollRight = () => {
    if (!scrollContainerRef.current) return;
    
    scrollContainerRef.current.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  };
  
  // Touch handlers for better mobile experience
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsTouching(true);
    setTouchStart(e.touches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isTouching || !scrollContainerRef.current) return;
    
    const touchDelta = touchStart - e.touches[0].clientX;
    if (Math.abs(touchDelta) > 5) {
      // Prevent default to stop page scrolling while swiping carousel
      e.preventDefault();
      scrollContainerRef.current.scrollLeft += touchDelta / 2;
    }
  };
  
  const handleTouchEnd = () => {
    setIsTouching(false);
  };

  const colorClass = category === 'biscuit' ? 'text-yellow' : 'text-pink';

  return (
    <section id={id} className="section-padding relative bg-white overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-comic font-bold text-chocolate mb-3">
            <span className={colorClass}>Super</span> {title}
          </h2>
          <p className="text-lg font-poppins text-chocolate/70">{subtitle}</p>
        </div>
        
        <div className="relative">
          {showLeftArrow && (
            <Button
              onClick={scrollLeft}
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full shadow-md border-none hover:bg-white hidden md:flex"
            >
              <ChevronLeft className="text-chocolate" size={24} />
            </Button>
          )}
          
          {showRightArrow && (
            <Button
              onClick={scrollRight}
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full shadow-md border-none hover:bg-white hidden md:flex"
            >
              <ChevronRight className="text-chocolate" size={24} />
            </Button>
          )}
          
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory gap-6 will-change-scroll"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch' // Enable momentum scrolling on iOS
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {products.map((product, index) => (
              <div 
                key={product.id} 
                className="min-w-[280px] md:min-w-[300px] w-[280px] md:w-[300px] snap-start animate-scale-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={product} index={index} />
              </div>
            ))}
          </div>
          
          {/* Progress bar */}
          {products.length > 0 && (
            <div className="w-full bg-gray-100 rounded-full h-1.5 mt-4">
              <div 
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  category === 'biscuit' ? 'bg-yellow' : 'bg-pink'
                )}
                style={{ 
                  width: scrollContainerRef.current ? 
                    `${(scrollPosition / (scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth)) * 100}%` : 
                    '0%',
                  willChange: 'width' 
                }}
              ></div>
            </div>
          )}
        </div>
        
        <div className="text-center mt-10">
          <Button 
            className={cn(
              "font-comic font-bold btn-bounce text-chocolate px-8 py-6",
              category === 'biscuit' ? 'bg-yellow hover:bg-yellow/80' : 'bg-pink hover:bg-peach'
            )}
          >
            View All {title}
          </Button>
        </div>
      </div>
      
      <FloatingElements type="section" density="low" />
    </section>
  );
};

export default ProductCarousel;
