'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import RoyalProductsSection from './RoyalProductsSection';
import AutobioSolutionsSection from './AutobioSolutionsSection';
import TurnkeyProjectsSlide from './TurnkeyProjectsSlide';
import AutobioAboutSection from './AutobioAboutSection';
import AutobioNewsSection from './AutobioNewsSection';
import AutobioFooter from '@/app/components/AutobioFooter';
import DirectionalNavButtons from './DirectionalNavButtons';
import HorizontalCarouselSlide from './HorizontalCarouselSlide';
import CompanySection from './CompanySection';

// Hero Section Component with 3 Sub-Slides
export const HeroSection: React.FC = () => {
  const router = useRouter();
  const [currentView, setCurrentView] = useState(0);

  // Three different hero sub-slides
  const heroSlides = [
    {
      id: 'innovation',
      branding: 'BIOTRA',
      title: ['BC-310'],
      titleColors: ['text-white'],
      description: 'Revolutionizing healthcare through cutting-edge biotechnology solutions that deliver precision, efficiency, and breakthrough results.',
      image: '/images/biotra-device.png',
      imageAlt: 'Biotra BC 310 - Advanced Diagnostic System',
      link: '/products/biochemistry?model=bc-310'
    },
    {
      id: 'precision',
      branding: 'BIOTRA',
      title: ['BC-15'],
      titleColors: ['text-white'],
      description: 'Delivering up to 150 tests per hour, the BC15 offers high-precision results and unmatched operational efficiency. Compact, intuitive, and highly reliable - it\'s the smart solution for modern clinical diagnostics.',
      image: '/images/bc-15.png',
      imageAlt: 'BC-15 - Precision Diagnostics',
      link: '/products/biochemistry?model=bc-15'
    },
    {
      id: 'future',
      branding: 'BIOTRA',
      title: ['BC-410'],
      titleColors: ['text-white'],
      description: 'Leading the transformation of medical diagnostics with innovative technologies, global expertise, and unwavering commitment to quality.',
      image: '/images/bc120-plus.png',
      imageAlt: 'BC410 - Future Technology',
      link: '/products/biochemistry?model=bc-410'
    }
  ];

  // Auto-transition every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentView((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer); // Cleanup on unmount
  }, [heroSlides.length]);

  const handlePrevious = () => {
    setCurrentView((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentView((prev) => Math.min(heroSlides.length - 1, prev + 1));
  };

  return (
    <section className="relative h-full flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/graphic-illustration-light-blue-wallpaper-template-website-cover-background-design_545033-2371.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="container mx-auto px-6 z-10">
        {/* Animated Sub-Slide Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="grid lg:grid-cols-2 gap-8 items-center px-8 lg:px-16"
          >
            {/* Left Content */}
            <div className="text-left">
              {/* BIOTRA Branding - Always Visible */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col items-start mb-4"
              >
                <h1
                  className="text-6xl lg:text-8xl font-aboreto font-extrabold mb-2"
                  style={{ color: '#FFFFFF', fontFamily: 'var(--font-aboreto), cursive', letterSpacing: '2px' }}
                >
                  BIOTRA
                </h1>
              </motion.div>

              {/* Main Title - BC Models with Aboreto Font */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-bold mb-6 leading-tight text-left"
              >
                <span 
                  className={`block font-aboreto`}
                  style={{
                    color: '#333333',
                    letterSpacing: '0.1em',
                    fontWeight: '900',
                    fontFamily: 'var(--font-aboreto), cursive',
                    fontSize: '14px'
                  }}
                >
                  {heroSlides[currentView].title[0]}
                </span>
                {heroSlides[currentView].title[1] && (
                  <span className={`block ${heroSlides[currentView].titleColors[1]}`}>
                    {heroSlides[currentView].title[1]}
                  </span>
                )}
                {heroSlides[currentView].title[2] && (
                  <span className={`block ${heroSlides[currentView].titleColors[2]}`}>
                    {heroSlides[currentView].title[2]}
                  </span>
                )}
              </motion.h2>

              {/* Description Text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base lg:text-lg text-gray-700 leading-relaxed mb-6 text-left max-w-xl"
              >
                {heroSlides[currentView].description}
              </motion.p>

              {/* Learn More Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push(heroSlides[currentView].link)}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                Learn More
              </motion.button>
            </div>
            {/* Right Content (Image) - Larger Size */}
            <div className="flex justify-center lg:justify-end items-center lg:pr-8">
              <Image
                src={heroSlides[currentView].image}
                alt={heroSlides[currentView].imageAlt}
                width={900}
                height={650}
                
                className="rounded-xl object-contain w-full max-w-[900px]"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 blur-3xl -z-10 scale-110"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Center - Page Indicator and Navigation */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-3">
        {/* Page Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-sm text-gray-400 font-semibold tracking-wider mb-1"
        >
          {currentView + 1} / {heroSlides.length}
        </motion.div>

        {/* Directional Navigation Buttons */}
        <DirectionalNavButtons
          onPrevious={handlePrevious}
          onNext={handleNext}
          disablePrevious={currentView === 0}
          disableNext={currentView === heroSlides.length - 1}
        />

        {/* Progress Dots */}
        <div className="flex space-x-2.5 mt-2">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentView(index)}
              className={`
                h-2 rounded-full transition-all duration-300
                ${index === currentView 
                  ? 'w-8 bg-teal-400 shadow-lg shadow-teal-500/50' 
                  : 'w-2 bg-gray-500 hover:bg-gray-400'
                }
              `}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Products Section Component - Royal Business Style
export const ProductsSection: React.FC = () => {
  return <RoyalProductsSection />;
};

// Turnkey Projects Section Component - Royal Business Style (Company Profile Clone)
export const TurnkeyProjectsSection: React.FC = () => {
  return <TurnkeyProjectsSlide />;
};

// Solutions Section Component - Autobio Style
export const SolutionsSection: React.FC = () => {
  return <AutobioSolutionsSection />;
};

// About Section Component - Autobio Style
export const AboutSection: React.FC = () => {
  return <AutobioAboutSection />;
};

// Horizontal Carousel Section - Royal Business Style
export const CarouselSection: React.FC = () => {
  return <HorizontalCarouselSlide />;
};

// Company Overview Section - Royal Business Style (Autobio-inspired)
export const CompanyOverviewSection: React.FC = () => {
  return <CompanySection />;
};

// News Section Component - Autobio Style
export const NewsSection: React.FC = () => {
  return <AutobioNewsSection />;
};

// Footer Section Component - Autobio Style
export const FooterSection: React.FC = () => {
  return <AutobioFooter />;
};