
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductCarousel from '../components/ProductCarousel';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import { ProductProps } from '../components/ProductCard';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Mock data for biscuits
  const biscuits: ProductProps[] = [
    {
      id: 1,
      name: "Chocolate Chip Delight",
      description: "Classic chocolate chip biscuits with a gooey center and crispy edges.",
      price: 2.99,
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
      category: 'biscuit',
    },
    {
      id: 2,
      name: "Double Chocolate Dream",
      description: "Rich chocolate biscuits loaded with chocolate chunks for extra indulgence.",
      price: 3.49,
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35",
      category: 'biscuit',
    },
    {
      id: 3,
      name: "Vanilla Shortbread",
      description: "Buttery shortbread with a hint of vanilla and a sprinkle of sugar.",
      price: 2.75,
      image: "https://images.unsplash.com/photo-1590080874088-eec64895b423",
      category: 'biscuit',
    },
    {
      id: 4,
      name: "Peanut Butter Crunch",
      description: "Crunchy peanut butter biscuits with a sweet and salty flavor profile.",
      price: 3.25,
      image: "https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13",
      category: 'biscuit',
    },
    {
      id: 5,
      name: "Oatmeal Raisin",
      description: "Hearty oatmeal biscuits with juicy raisins and a hint of cinnamon.",
      price: 2.99,
      image: "https://images.unsplash.com/photo-1619021897626-ff958ab82268",
      category: 'biscuit',
    },
    {
      id: 6,
      name: "Lemon Sugar Cookie",
      description: "Light and zesty lemon cookies with a crisp sugar coating.",
      price: 3.15,
      image: "https://images.unsplash.com/photo-1558312657-b2dead03d494",
      category: 'biscuit',
    },
  ];
  
  // Mock data for cakes
  const cakes: ProductProps[] = [
    {
      id: 7,
      name: "Classic Red Velvet",
      description: "Rich red cake with a hint of cocoa and cream cheese frosting.",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1586788680434-30d324626f4c",
      category: 'cake',
    },
    {
      id: 8,
      name: "Triple Chocolate Layer",
      description: "Three layers of chocolate cake with ganache and chocolate buttercream.",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
      category: 'cake',
    },
    {
      id: 9,
      name: "Vanilla Bean Cheesecake",
      description: "Creamy vanilla cheesecake on a graham cracker crust.",
      price: 22.50,
      image: "https://images.unsplash.com/photo-1567171466295-4afa63d45416",
      category: 'cake',
    },
    {
      id: 10,
      name: "Carrot Cake Delight",
      description: "Moist carrot cake with walnuts and cream cheese frosting.",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187",
      category: 'cake',
    },
    {
      id: 11,
      name: "Lemon Meringue",
      description: "Tangy lemon cake with light meringue frosting and lemon curd.",
      price: 23.99,
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3",
      category: 'cake',
    },
    {
      id: 12,
      name: "Strawberry Shortcake",
      description: "Light vanilla cake with fresh strawberries and whipped cream.",
      price: 21.50,
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777",
      category: 'cake',
    },
  ];

  useEffect(() => {
    // Simulation of page loading
    setTimeout(() => {
      setIsLoaded(true);
    }, 200);
    
    // Add smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#') && href.length > 1) {
          e.preventDefault();
          const targetElement = document.querySelector(href);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };
    
    document.body.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.body.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      <main>
        <Hero />
        <ProductCarousel 
          id="biscuits"
          title="Biscuits" 
          subtitle="Handcrafted cookies that are perfectly sweet and delightfully crispy." 
          category="biscuit"
          products={biscuits}
        />
        <ProductCarousel 
          id="cakes"
          title="Cakes" 
          subtitle="Delicious cakes for celebrations or just because you deserve it." 
          category="cake"
          products={cakes}
        />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
