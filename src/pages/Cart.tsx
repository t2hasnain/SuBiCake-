
import React, { useState } from 'react';
import { useCartStore } from '@/stores/useCartStore';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import CheckoutModal from '@/components/CheckoutModal';

const Cart = () => {
  const { items, removeItem, updateQuantity, getTotalPrice } = useCartStore();
  const navigate = useNavigate();
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <ShoppingCart className="mx-auto h-16 w-16 text-chocolate/50 mb-4" />
        <h2 className="text-2xl font-comic font-bold text-chocolate mb-4">Your cart is empty</h2>
        <Button
          onClick={() => navigate('/')}
          className="bg-pink hover:bg-peach text-chocolate font-comic"
        >
          Continue Shopping
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-comic font-bold text-chocolate mb-8">Shopping Cart</h1>
      
      <div className="grid gap-6">
        {items.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-grow">
                  <h3 className="text-xl font-comic font-bold text-chocolate">{item.name}</h3>
                  <p className="text-chocolate/70">${item.price.toFixed(2)}</p>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="h-8 w-8"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="h-8 w-8"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="text-right min-w-[100px]">
                  <div className="font-bold">${(item.price * item.quantity).toFixed(2)}</div>
                  <Button
                    variant="ghost"
                    onClick={() => removeItem(item.id)}
                    className="text-chocolate/70 hover:text-pink"
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-8 flex justify-end gap-4">
        <div className="text-2xl font-comic font-bold text-chocolate">
          Total: ${getTotalPrice().toFixed(2)}
        </div>
        <Button
          className="bg-pink hover:bg-peach text-chocolate font-comic btn-bounce"
          size="lg"
          onClick={() => setCheckoutOpen(true)}
        >
          Checkout
        </Button>
      </div>
      
      <CheckoutModal open={checkoutOpen} setOpen={setCheckoutOpen} />
    </div>
  );
};

export default Cart;
