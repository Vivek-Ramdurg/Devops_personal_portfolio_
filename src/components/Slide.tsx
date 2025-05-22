
import React, { ReactNode, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import * as animeJs from 'animejs';

// Get the default export from anime.js
const anime = animeJs.default || animeJs;

interface SlideProps {
  id: string;
  isActive: boolean;
  children: ReactNode;
  className?: string;
  backgroundImage?: string;
}

const Slide: React.FC<SlideProps> = ({ 
  id, 
  isActive, 
  children, 
  className,
  backgroundImage
}) => {
  const slideRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    if (isActive && slideRef.current) {
      // Reset opacity to ensure animation works properly
      anime.set(slideRef.current.querySelectorAll('.animate-item'), {
        opacity: 0,
        translateY: 20
      });

      // Animate slide content
      anime({
        targets: slideRef.current.querySelectorAll('.animate-item'),
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(150),
        easing: 'easeOutQuad',
        duration: 800
      });
      
      // Animate 3D cube for non-background image slides
      if (!backgroundImage && slideRef.current.querySelector('.cube-wrapper')) {
        anime({
          targets: slideRef.current.querySelector('.cube-wrapper'),
          rotateY: [0, 360],
          duration: 2000,
          easing: 'easeInOutSine',
          loop: 1
        });
      }
    }
  }, [isActive, backgroundImage]);

  return (
    <section 
      ref={slideRef}
      id={id}
      className={cn(
        "portfolio-slide transition-all duration-500",
        isActive ? "slide-active" : "slide-inactive",
        backgroundImage ? "bg-cover bg-center" : "bg-gradient-to-r from-blue-50 to-slate-100",
        className
      )}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {backgroundImage && (
        <div className="absolute inset-0 bg-black/20 z-0"></div>
      )}
      <div className={cn(
        "relative z-10 w-full max-w-7xl mx-auto", 
        backgroundImage ? "text-white" : "",
      )}>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-3/4">
            {children}
          </div>
          {!backgroundImage && (
            <div className="md:w-1/4 hidden md:block">
              <div className="h-full flex items-center justify-center">
                <div className="w-64 h-64 relative cube-wrapper">
                  {/* 3D cube using CSS with improved styling */}
                  <div className="absolute inset-0 bg-blue-100/40 rounded-lg transform rotate-3 translate-x-2 translate-y-2"></div>
                  <div className="absolute inset-0 bg-teal-100/50 rounded-lg transform -rotate-3 translate-x-1 translate-y-1"></div>
                  <div className="absolute inset-0 bg-white shadow-lg rounded-lg flex items-center justify-center">
                    <div className="text-portfolio-primary text-4xl font-bold">
                      3D
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Slide;
