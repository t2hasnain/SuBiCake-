
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/stores/useCartStore';
import { toast } from 'sonner';
import CheckoutModal from '@/components/CheckoutModal';

// This is a more comprehensive mock data set to avoid "product not found" issues
const mockProducts = [
  {
    id: 1,
    name: "Chocolate Chip Cookie",
    description: "Classic chocolate chip cookies made with premium ingredients. Each bite delivers a perfect balance of sweet chocolate chips and buttery cookie dough. Baked fresh daily in our ovens for that homemade taste.",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "biscuit" as const,
  },
  {
    id: 2,
    name: "Red Velvet Cake",
    description: "Delicious red velvet cake with cream cheese frosting. This iconic cake features a subtle cocoa flavor with a vibrant red color, topped with our signature cream cheese frosting that's rich and tangy.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1586788224331-947f68671cf1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "cake" as const,
  },
  {
    id: 3,
    name: "Butter Cookies",
    description: "Traditional butter cookies that melt in your mouth. Made with high-quality European butter for that rich flavor and distinctive texture that crumbles perfectly with each bite.",
    price: 3.49,
    image: "https://images.unsplash.com/photo-1590080875852-ba44f83ff10b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "biscuit" as const,
  },
  {
    id: 4,
    name: "Chocolate Cake",
    description: "Rich and moist chocolate cake with chocolate ganache. Our double chocolate cake is a chocolate lover's dream, featuring layers of decadent chocolate cake covered in smooth, silky chocolate ganache.",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "cake" as const,
  },
  {
    id: 5,
    name: "Oatmeal Raisin Cookies",
    description: "Chewy oatmeal cookies with plump raisins. These wholesome cookies combine hearty rolled oats with sweet raisins and a hint of cinnamon for a classic treat that's both nostalgic and satisfying.",
    price: 2.79,
    image: "https://images.unsplash.com/photo-1590080874088-eec64895b423?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "biscuit" as const,
  },
  {
    id: 6,
    name: "Vanilla Cheesecake",
    description: "Creamy vanilla cheesecake with a graham cracker crust. Our classic cheesecake features a velvety smooth filling made with premium cream cheese, real vanilla, and a perfectly balanced sweetness.",
    price: 26.99,
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "cake" as const,
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const addItem = useCartStore(state => state.addItem);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  
  const product = mockProducts.find(p => p.id === Number(id));
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-comic font-bold text-chocolate mb-4">Product not found</h2>
        <p className="text-chocolate/70 mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Button
          onClick={() => navigate('/')}
          className="bg-pink hover:bg-peach text-chocolate font-comic"
        >
          Back to Home
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product);
    toast.success('Added to cart!');
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full font-comic text-chocolate font-bold">
              ${product.price.toFixed(2)}
            </span>
          </div>
        </div>
        
        <div>
          <h1 className="text-4xl font-comic font-bold text-chocolate mb-4">{product.name}</h1>
          <p className="text-lg text-chocolate/70 mb-8">{product.description}</p>
          
          <div className="space-y-4">
            <Button
              onClick={handleAddToCart}
              className="w-full bg-pink hover:bg-peach text-chocolate font-comic btn-bounce"
              size="lg"
            >
              <ShoppingCart className="mr-2" />
              Add to Cart
            </Button>
            
            <Button
              onClick={() => setCheckoutOpen(true)}
              className="w-full bg-yellow hover:bg-yellow/80 text-chocolate font-comic btn-bounce"
              size="lg"
            >
              Order Now
            </Button>
            
            <Button
              onClick={() => navigate('/')}
              variant="outline"
              className="w-full border-chocolate/30 text-chocolate hover:bg-chocolate/10"
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
      
      <CheckoutModal open={checkoutOpen} setOpen={setCheckoutOpen} />
    </div>
  );
};

export default ProductDetails;
