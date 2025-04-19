
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ShoppingCart, Menu, X, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useCartStore } from '@/stores/useCartStore';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const cartItemCount = useCartStore(state => state.getTotalItems());

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCartClick = () => {
    navigate('/cart');
    setMobileMenuOpen(false); // Close menu when cart is clicked
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!mobileMenuOpen) return;
    
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (mobileMenuOpen && !target.closest('[data-mobile-menu]') && !target.closest('[data-menu-trigger]')) {
        setMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-4 md:px-8 py-3", 
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/"
          className="text-2xl md:text-3xl font-comic font-bold text-chocolate"
        >
          <span className="text-pink">Super</span> Biscuit <span className="text-yellow">+</span> <span className="text-pink">Super</span> Cake
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
          
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost"
              size="icon"
              className="relative animate-bounce-slight text-chocolate hover:text-pink"
              onClick={handleCartClick}
            >
              <ShoppingCart size={24} />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Button>
            
            <Button 
              className="bg-pink hover:bg-peach text-chocolate font-comic font-bold btn-bounce flex items-center gap-2"
              onClick={() => window.open('https://github.com/t2hasnain/SuBiCake-', '_blank')}
            >
              <Github size={16} />
              Open Source
            </Button>
          </div>
        </div>
        
        <button 
          data-menu-trigger
          className="md:hidden text-chocolate z-50"
          onClick={(e) => {
            e.stopPropagation();
            setMobileMenuOpen(!mobileMenuOpen);
          }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div 
          data-mobile-menu
          className="md:hidden bg-white fixed inset-0 top-16 pt-4 px-4 shadow-lg animate-fade-in-up z-40"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col space-y-4">
            <NavLinks mobile setMobileMenuOpen={() => setMobileMenuOpen(false)} />
            
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <Button 
                variant="ghost"
                size="sm"
                className="relative text-chocolate hover:text-pink"
                onClick={handleCartClick}
              >
                <ShoppingCart size={20} />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-pink text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Button>
              
              <Button 
                className="bg-pink hover:bg-peach text-chocolate font-comic font-bold btn-bounce flex items-center gap-2"
                size="sm"
                onClick={() => {
                  window.open('https://github.com/your-repo/super-biscuit-cake', '_blank');
                  setMobileMenuOpen(false);
                }}
              >
                <Github size={14} />
                Open Source
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

// Updated interface for NavLinks props
interface NavLinksProps {
  mobile?: boolean;
  setMobileMenuOpen?: () => void;
}

const NavLinks = ({ mobile = false, setMobileMenuOpen }: NavLinksProps) => {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];
  
  return (
    <div className={cn(
      "items-center",
      mobile ? "flex flex-col space-y-3" : "flex space-x-6"
    )}>
      {links.map(link => (
        <Link
          key={link.name}
          to={link.href}
          className={cn(
            "font-poppins font-medium transition-colors duration-200 hover:text-pink",
            mobile ? "text-chocolate block w-full text-center py-2" : "text-chocolate"
          )}
          onClick={setMobileMenuOpen}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
