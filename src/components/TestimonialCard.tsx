
import React from 'react';
import { cn } from '@/lib/utils';
import { Star } from "lucide-react";

export interface TestimonialProps {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
  product?: string;
}

interface TestimonialCardProps {
  testimonial: TestimonialProps;
  className?: string;
  animationDelay?: number;
}

const TestimonialCard = ({ testimonial, className, animationDelay = 0 }: TestimonialCardProps) => {
  const { name, role, content, rating, avatar, product } = testimonial;
  
  return (
    <div 
      className={cn(
        "bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100",
        "flex flex-col h-full animate-fade-in-up",
        className
      )}
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-pink/20 flex items-center justify-center">
          {avatar ? (
            <img src={avatar} alt={name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-pink text-xl font-bold">{name.charAt(0)}</span>
          )}
        </div>
        
        <div>
          <h4 className="font-comic font-bold text-chocolate">{name}</h4>
          <p className="text-sm text-chocolate/60 font-poppins">{role}</p>
        </div>
      </div>
      
      {/* Rating stars */}
      <div className="flex mb-3">
        {[...Array(5)].map((_, index) => (
          <Star 
            key={index}
            size={16}
            className={cn(
              index < rating ? "text-yellow fill-yellow" : "text-gray-300"
            )}
          />
        ))}
        {product && (
          <span className="ml-2 text-xs font-poppins text-chocolate/60">for {product}</span>
        )}
      </div>
      
      <blockquote className="font-poppins text-chocolate/80 italic text-sm flex-grow">
        "{content}"
      </blockquote>
      
      {/* Decorative elements */}
      <div className="flex gap-2 mt-4">
        <div className="w-2 h-2 rounded-full bg-pink animate-bounce-slight"></div>
        <div className="w-2 h-2 rounded-full bg-yellow animate-bounce-slight" style={{ animationDelay: "0.2s" }}></div>
        <div className="w-2 h-2 rounded-full bg-peach animate-bounce-slight" style={{ animationDelay: "0.4s" }}></div>
      </div>
    </div>
  );
};

export default TestimonialCard;
