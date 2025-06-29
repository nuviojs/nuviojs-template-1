'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import TopNavbar from '@/components/TopNavbar';
import MainNavbar from '@/components/MainNavbar';

const heroImages = ['/h1.webp', '/t-shirt.webp', '/h3.jpg'];

export default function Home() {
<<<<<<< HEAD
  const products = [
    { id: 1, name: 'T-Shirt', price: 19.99, image: '/t-shirt.jpg' },
    { id: 2, name: 'Jeans', price: 49.99, image: '/jeans.jpg' },
  ]
=======
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
>>>>>>> 1b224e8b0e61c097ae0f6adf14154256cae2e559

  return (
    
    <main className="min-h-screen">
      <TopNavbar />
      <MainNavbar />
      <section className="relative min-h-screen w-screen flex  items-center justify-center text-white bg-blue-950 overflow-hidden">
<div className="relative w-200 h-200">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={heroImages[index]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              
                <Image
                  src={heroImages[index]}
                  alt={`Slide ${index}`}
                  fill
                  className="object-cover w-140 h-200"
                  priority
                  quality={100}
                />
             
            </motion.div>
          </AnimatePresence>
        </div>
 </div>
        
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Discover Modern Streetwear
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Premium T-Shirts. Designed for comfort. Built for confidence.
          </p>
          <Button asChild>
            <Link href="/shop">Shop Now</Link>
          </Button>
        </div>

      </section>
    </main>
  );
}
