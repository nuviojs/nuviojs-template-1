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


  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);


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

    <div className="container  px-2 py-3">
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <Head>
        <title>Shop-UP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="text-center py-8">
        <h1 className="text-4xl font-bold">Welcome to Our Shop-up Store</h1>
        <p className="text-lg text-gray-600">Discover the latest fashion trends!</p>
      </header>

      <main className="py-8 flex-1 w-full max-w-6xl">
        <h2 className="text-2xl font-semibold text-center mb-6">Featured Products</h2>
        <Card>Testing main branch</Card>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <CardHeader className="p-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"

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
