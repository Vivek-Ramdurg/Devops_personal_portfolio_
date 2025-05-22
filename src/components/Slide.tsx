
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

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
  return (
    <section 
      id={id}
      className={cn(
        "portfolio-slide transition-all duration-500",
        isActive ? "slide-active" : "slide-inactive",
        backgroundImage ? "bg-cover bg-center" : "bg-gradient-to-r from-gray-100 to-blue-50",
        className
      )}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {backgroundImage && (
        <div className="absolute inset-0 bg-black/30 z-0"></div>
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
                <div className="w-64 h-64 relative">
                  {/* Simple 3D-like cube using CSS */}
                  <div className="absolute inset-0 bg-portfolio-primary/20 rounded-lg transform rotate-3 translate-x-2 translate-y-2"></div>
                  <div className="absolute inset-0 bg-portfolio-secondary/30 rounded-lg transform -rotate-3 translate-x-1 translate-y-1"></div>
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
