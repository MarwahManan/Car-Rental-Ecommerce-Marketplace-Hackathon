'use client';
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Hero from '@/components/Hero';
import PickDropSection from '@/components/PickDropSection';
import FetchCarsPage from './fetchcars/page';

const Home = () => {

  return (
    <div className="bg-[#F6F7F9]">  
      
      <Hero />
      <PickDropSection />
      <FetchCarsPage />
    
    </div>
  );
};

export default Home;
