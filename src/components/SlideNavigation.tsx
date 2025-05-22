
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight } from 'lucide-react';

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

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center space-y-2">
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
      
      <div className="fixed left-6 bottom-6 flex items-center space-x-4 z-20">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={cn(
            "p-2 rounded-full bg-portfolio-primary text-white transition-all duration-300",
            currentSlide === 0 
              ? "opacity-50 cursor-not-allowed" 
              : "hover:bg-portfolio-dark"
          )}
          aria-label="Previous slide"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className={cn(
            "p-2 rounded-full bg-portfolio-primary text-white transition-all duration-300",
            currentSlide === slides.length - 1 
              ? "opacity-50 cursor-not-allowed" 
              : "hover:bg-portfolio-dark"
          )}
          aria-label="Next slide"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default SlideNavigation;
