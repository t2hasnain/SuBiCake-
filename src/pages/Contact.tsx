
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare, Phone, MapPin } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast.success('Message sent! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-comic font-bold text-chocolate mb-12 text-center">
        Get in <span className="text-pink">Touch</span>
      </h1>
      
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="space-y-8 relative">
          <div className="absolute -z-10 -top-10 -left-10 w-32 h-32 bg-yellow/50 rounded-full blur-xl"></div>
          
          <div>
            <h2 className="text-2xl font-comic font-bold text-chocolate mb-4">We'd Love to Hear From You!</h2>
            <p className="text-lg text-chocolate/70">
              Have a question about our products? Want to place a special order? 
              Drop us a message and we'll get back to you faster than our cookies sell out!
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-pink/30 p-3 rounded-full mr-4">
                <Phone className="text-chocolate" size={20} />
              </div>
              <div>
                <h3 className="font-comic font-bold text-chocolate">Phone</h3>
                <p className="text-chocolate/70">(123) 456-7890</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-yellow/30 p-3 rounded-full mr-4">
                <Mail className="text-chocolate" size={20} />
              </div>
              <div>
                <h3 className="font-comic font-bold text-chocolate">Email</h3>
                <p className="text-chocolate/70">hello@superbiscuitcake.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-peach/50 p-3 rounded-full mr-4">
                <MapPin className="text-chocolate" size={20} />
              </div>
              <div>
                <h3 className="font-comic font-bold text-chocolate">Location</h3>
                <p className="text-chocolate/70">123 Sweet Street, Bakery Town</p>
                <p className="text-chocolate/70">Open Mon-Sat: 8am - 6pm</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-cream/50 p-8 rounded-2xl border border-yellow/20 shadow-lg">
          <h2 className="text-2xl font-comic font-bold text-chocolate mb-6 flex items-center">
            <MessageSquare className="mr-2 text-pink" /> Send Us a Message
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block font-comic font-bold text-chocolate">Name</label>
              <Input 
                id="name" 
                name="name" 
                placeholder="Your name" 
                value={formData.name}
                onChange={handleChange} 
                required
                className="border-chocolate/20 focus-visible:ring-pink"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="block font-comic font-bold text-chocolate">Email</label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                placeholder="Your email" 
                value={formData.email}
                onChange={handleChange} 
                required
                className="border-chocolate/20 focus-visible:ring-pink"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block font-comic font-bold text-chocolate">Message</label>
              <Textarea 
                id="message" 
                name="message" 
                placeholder="What would you like to tell us?" 
                value={formData.message}
                onChange={handleChange} 
                required
                className="h-32 border-chocolate/20 focus-visible:ring-pink"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-pink hover:bg-peach text-chocolate font-comic btn-bounce"
              size="lg"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
