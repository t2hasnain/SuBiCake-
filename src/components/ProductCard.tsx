
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '@/stores/useCartStore';
import { toast } from 'sonner';

export interface ProductProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'biscuit' | 'cake';
}

interface ProductCardProps {
  product: ProductProps;
  className?: string;
  index?: number;
}

const ProductCard = ({ product, className, index = 0 }: ProductCardProps) => {
  const { name, description, price, image, category } = product;
  const navigate = useNavigate();
  const addItem = useCartStore(state => state.addItem);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product);
    toast.success('Added to cart!');
  };

  return (
    <div 
      onClick={() => navigate(`/product/${product.id}`)}
      className={cn(
        "relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer",
        "transform hover:-translate-y-2",
        category === 'biscuit' ? 'bg-yellow/30' : 'bg-pink/30',
        className
      )}
      style={{ 
        animationDelay: `${index * 0.1}s` 
      }}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
        />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full font-comic text-chocolate font-bold">
            ${price.toFixed(2)}
          </span>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-xl font-comic font-bold text-chocolate mb-2">{name}</h3>
          <p className="text-chocolate/70 font-poppins text-sm mb-4">{description}</p>
        </div>
        
        <div className="flex items-center justify-between mt-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/product/${product.id}`);
            }}
            className="font-comic border-chocolate/30 hover:bg-chocolate/10 transition-all duration-200"
          >
            Details
          </Button>
          
          <Button
            size="icon"
            onClick={handleAddToCart}
            className="bg-pink hover:bg-peach text-chocolate btn-bounce"
          >
            <ShoppingCart size={18} />
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className={cn(
        "absolute -bottom-4 -left-4 w-12 h-12 rounded-full opacity-50",
        category === 'biscuit' ? 'bg-yellow' : 'bg-pink'
      )}></div>
      <div className={cn(
        "absolute -top-4 -right-4 w-8 h-8 rounded-full opacity-50",
        category === 'biscuit' ? 'bg-peach' : 'bg-yellow'
      )}></div>
    </div>
  );
};

export default ProductCard;
