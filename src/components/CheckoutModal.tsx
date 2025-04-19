
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCartStore } from '@/stores/useCartStore';
import { Check } from 'lucide-react';

interface CheckoutModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const CheckoutModal = ({ open, setOpen }: CheckoutModalProps) => {
  const { items, getTotalPrice } = useCartStore();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    phone: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Order submitted:', { items, formData, total: getTotalPrice() });
    setIsSubmitted(true);
  };

  const closeAndReset = () => {
    setOpen(false);
    setIsSubmitted(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md md:max-w-lg bg-cream">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-comic font-bold text-chocolate">
                Complete Your Order
              </DialogTitle>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-comic text-chocolate">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="border-chocolate/20"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-comic text-chocolate">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="border-chocolate/20"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="address" className="font-comic text-chocolate">Address</Label>
                <Input
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="border-chocolate/20"
                />
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city" className="font-comic text-chocolate">City</Label>
                  <Input
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="border-chocolate/20"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="zip" className="font-comic text-chocolate">Zip Code</Label>
                  <Input
                    id="zip"
                    name="zip"
                    required
                    value={formData.zip}
                    onChange={handleChange}
                    className="border-chocolate/20"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-comic text-chocolate">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-chocolate/20"
                  />
                </div>
              </div>
              
              <div className="pt-4 border-t border-chocolate/10">
                <div className="flex justify-between text-lg font-comic font-bold text-chocolate">
                  <span>Total:</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
              </div>
              
              <DialogFooter>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setOpen(false)}
                  className="border-chocolate/30 text-chocolate"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  className="bg-pink hover:bg-peach text-chocolate font-comic btn-bounce"
                >
                  Place Order
                </Button>
              </DialogFooter>
            </form>
          </>
        ) : (
          <div className="py-8 text-center">
            <div className="mx-auto w-16 h-16 bg-pink/30 rounded-full flex items-center justify-center mb-6">
              <Check size={32} className="text-chocolate" />
            </div>
            <h2 className="text-2xl font-comic font-bold text-chocolate mb-4">
              Thank You for Your Order!
            </h2>
            <p className="text-chocolate/70 mb-6">
              We've received your order and will contact you soon with the delivery details.
              A confirmation has been sent to your email.
            </p>
            <Button 
              className="bg-pink hover:bg-peach text-chocolate font-comic btn-bounce"
              onClick={closeAndReset}
            >
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutModal;
