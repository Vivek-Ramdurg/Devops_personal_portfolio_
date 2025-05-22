import React, { useState, useEffect } from 'react';
import Slide from './Slide';
import SlideNavigation from './SlideNavigation';
import AboutMe from './AboutMe';
import PersonalInfo from './PersonalInfo';
import Projects from './Projects';
import Achievements from './Achievements';
import Experience from './Experience';
import PreviousPortfolios from './PreviousPortfolios';
import { useIsMobile } from '@/hooks/use-mobile';

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [wheelTimer, setWheelTimer] = useState(false);
  const isMobile = useIsMobile();
  
  const slides = [
    { id: 'home', component: null },
    { id: 'about', component: <AboutMe className="animate-item" /> },
    { id: 'info', component: <PersonalInfo className="animate-item" /> },
    { id: 'projects', component: <Projects className="animate-item" /> },
    { id: 'achievements', component: <Achievements className="animate-item" /> },
    { id: 'experience', component: <Experience className="animate-item" /> },
    { id: 'portfolios', component: <PreviousPortfolios className="animate-item" /> },
  ];

  const handleNavigate = (index: number) => {
    setCurrentSlide(index);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        if (currentSlide < slides.length - 1) {
          setCurrentSlide(currentSlide + 1);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentSlide > 0) {
          setCurrentSlide(currentSlide - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide, slides.length]);

  // Handle wheel/scroll events
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Skip handling wheel events on mobile as it interferes with normal scrolling
      if (isMobile) return;
      
      // Add a small timeout to prevent rapid firing
      if (wheelTimer) return;
      
      setWheelTimer(true);
      setTimeout(() => setWheelTimer(false), 1000);
      
      if (e.deltaY > 0) {
        // Scrolling down
        if (currentSlide < slides.length - 1) {
          setCurrentSlide(currentSlide + 1);
        }
      } else if (e.deltaY < 0) {
        // Scrolling up
        if (currentSlide > 0) {
          setCurrentSlide(currentSlide - 1);
        }
      }
    };
    
    // Only add event listener if not on mobile
    if (!isMobile) {
      window.addEventListener('wheel', handleWheel, { passive: false });
    }
    
    return () => {
      if (!isMobile) {
        window.removeEventListener('wheel', handleWheel);
      }
    };
  }, [currentSlide, slides.length, isMobile, wheelTimer]);

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Home slide */}
      <Slide 
        id="home" 
        isActive={currentSlide === 0} 
        backgroundImage="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
        className="flex items-center justify-center text-center"
      >
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-item">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 animate-item">
            A DevOps Engineer & Cloud Architect passionate about building scalable, 
            reliable infrastructure and automating everything.
          </p>
          <button 
            onClick={() => setCurrentSlide(1)} 
            className="px-8 py-3 bg-white text-portfolio-dark font-medium rounded-full hover:bg-portfolio-light transition-all duration-300 animate-item"
          >
            Explore Portfolio
          </button>
        </div>
      </Slide>

      {/* Content slides */}
      {slides.slice(1).map((slide, index) => (
        <Slide 
          key={slide.id} 
          id={slide.id} 
          isActive={currentSlide === index + 1}
        >
          <div className={currentSlide === index + 1 ? 'opacity-100' : 'opacity-0'}>
            {slide.component}
          </div>
        </Slide>
      ))}

      {/* Navigation */}
      <SlideNavigation 
        slides={slides.map(slide => slide.id)} 
        currentSlide={currentSlide}
        onNavigate={handleNavigate} 
      />
    </div>
  );
};

export default Portfolio;
