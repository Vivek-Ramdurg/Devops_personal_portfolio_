
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import anime from 'animejs';

interface SlideNavigationProps {
  slides: string[];
  currentSlide: number;
  onNavigate: (index: number) => void;
}

const SlideNavigation: React.FC<SlideNavigationProps> = ({
  slides,
  currentSlide,
  onNavigate,
}) => {
  const navigationRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      onNavigate(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      onNavigate(currentSlide - 1);
    }
  };

  useEffect(() => {
    // Animate dots when mounted
    if (navigationRef.current) {
      anime({
        targets: navigationRef.current.querySelectorAll('.nav-dot'),
        scale: [0, 1],
        opacity: [0, 1],
        delay: anime.stagger(100),
        easing: 'easeOutElastic(1, .8)',
        duration: 600
      });
    }
  }, []);

  useEffect(() => {
    // Animate the active dot
    if (navigationRef.current) {
      anime({
        targets: navigationRef.current.querySelectorAll('.nav-dot-active'),
        width: [12, 20],
        backgroundColor: ['#94a3b8', '#3b82f6'],
        easing: 'easeOutElastic(1, .5)',
        duration: 600
      });
    }
  }, [currentSlide]);

  useEffect(() => {
    // Animate controls when mounted
    if (controlsRef.current) {
      anime({
        targets: controlsRef.current,
        opacity: [0, 1],
        translateY: [20, 0],
        easing: 'easeOutQuad',
        duration: 800
      });
    }
  }, []);

  return (
    <>
      <div 
        ref={navigationRef}
        className="fixed right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center space-y-2"
      >
        {slides.map((_, index) => (
          <button
            key={`nav-${index}`}
            onClick={() => onNavigate(index)}
            className={cn(
              "nav-dot transition-all duration-300",
              index === currentSlide ? "nav-dot-active" : "nav-dot-inactive"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      <div 
        ref={controlsRef}
        className="fixed left-6 bottom-6 flex items-center space-x-4 z-20"
      >
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={cn(
            "p-2 rounded-full bg-portfolio-primary text-white transition-all duration-300 transform",
            currentSlide === 0 
              ? "opacity-50 cursor-not-allowed" 
              : "hover:bg-portfolio-dark hover:scale-110"
          )}
          aria-label="Previous slide"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className={cn(
            "p-2 rounded-full bg-portfolio-primary text-white transition-all duration-300 transform",
            currentSlide === slides.length - 1 
              ? "opacity-50 cursor-not-allowed" 
              : "hover:bg-portfolio-dark hover:scale-110"
          )}
          aria-label="Next slide"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </>
  );
};

export default SlideNavigation;
