'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function LogoBar() {
  const [showLogo, setShowLogo] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > lastScrollY) {
        setShowLogo(false);
      } else {
        setShowLogo(true);
      }

      lastScrollY = scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -200 }}
      animate={{ y: showLogo ? 0 : -200 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed top-9 left-0 w-full bg-white shadow-md flex justify-center items-center px-2.5 py-5 md:py-7 z-50"
    >
      <Image
        src="/img/logo.avif"
        alt="Logo"
        width={240}
        height={30}
        priority
        className="w-[190px] h-[23px] sm:w-[240px] sm:h-[30px]"
      />
    </motion.div>
  );
}
