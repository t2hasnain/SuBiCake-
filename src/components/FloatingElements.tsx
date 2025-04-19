
import React from 'react';
import { cn } from '@/lib/utils';

// Define types for our floating elements
type FloatingElement = {
  id: number;
  type: 'biscuit' | 'cake' | 'sprinkle' | 'crumb' | 'steam';
  size: 'sm' | 'md' | 'lg';
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  animation: string;
  color: string;
  rotation?: string;
};

interface FloatingElementsProps {
  type: 'hero' | 'section';
  density?: 'low' | 'medium' | 'high';
  className?: string;
}

const FloatingElements: React.FC<FloatingElementsProps> = ({ 
  type = 'section',
  density = 'medium',
  className
}) => {
  // Generate number of elements based on density
  const getCount = () => {
    switch(density) {
      case 'low': return 5;
      case 'medium': return 10;
      case 'high': return 15;
      default: return 10;
    }
  };

  const count = getCount();
  
  // Generate random elements
  const generateElements = (): FloatingElement[] => {
    const elements: FloatingElement[] = [];
    const colors = ['bg-pink', 'bg-yellow', 'bg-peach', 'bg-mint'];
    const types = ['biscuit', 'cake', 'sprinkle', 'crumb', 'steam'] as const;
    const sizes = ['sm', 'md', 'lg'] as const;
    const animations = [
      'animate-float', 
      'animate-float-alt', 
      'animate-spin-slow',
      'animate-wiggle'
    ];
    
    for (let i = 0; i < count; i++) {
      const randomType = types[Math.floor(Math.random() * types.length)];
      const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
      
      elements.push({
        id: i,
        type: randomType,
        size: randomSize,
        position: {
          top: `${Math.random() * 80}%`,
          left: `${Math.random() * 80}%`
        },
        animation: randomAnimation,
        color: randomColor,
        rotation: `rotate-${Math.floor(Math.random() * 12) * 30}`
      });
    }
    
    return elements;
  };

  const elements = generateElements();
  
  // Shape elements based on their type
  const renderElement = (element: FloatingElement) => {
    const sizeClasses = {
      sm: 'w-3 h-3',
      md: 'w-5 h-5',
      lg: 'w-8 h-8',
    };
    
    const baseClasses = cn(
      'absolute opacity-60 z-0',
      element.animation,
      element.color,
      element.rotation
    );
    
    switch(element.type) {
      case 'biscuit':
        return (
          <div 
            className={cn(
              baseClasses,
              sizeClasses[element.size],
              'rounded-full'
            )}
            style={{
              top: element.position.top,
              left: element.position.left,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        );
      case 'cake':
        return (
          <div 
            className={cn(
              baseClasses,
              sizeClasses[element.size],
              'rounded-lg'
            )}
            style={{
              top: element.position.top,
              left: element.position.left,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        );
      case 'sprinkle':
        return (
          <div 
            className={cn(
              baseClasses,
              'w-1 h-3 rounded-full'
            )}
            style={{
              top: element.position.top,
              left: element.position.left,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        );
      case 'crumb':
        return (
          <div 
            className={cn(
              baseClasses,
              'w-2 h-2 rounded-full'
            )}
            style={{
              top: element.position.top,
              left: element.position.left,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        );
      case 'steam':
        return (
          <div 
            className={cn(
              baseClasses,
              'w-4 h-4 rounded-full bg-white bg-opacity-50'
            )}
            style={{
              top: element.position.top,
              left: element.position.left,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={cn('absolute inset-0 overflow-hidden z-0', className)}>
      {elements.map(element => renderElement(element))}
    </div>
  );
};

export default FloatingElements;
