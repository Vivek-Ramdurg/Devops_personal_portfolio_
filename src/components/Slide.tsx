
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
        isActive ? "slide-active animate-fade-in" : "slide-inactive",
        backgroundImage ? "bg-cover bg-center" : "",
        className
      )}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {backgroundImage && (
        <div className="absolute inset-0 bg-black/50 z-0"></div>
      )}
      <div className={cn(
        "relative z-10 w-full max-w-7xl mx-auto", 
        backgroundImage ? "text-white" : "",
        isActive ? "animate-slide-in" : ""
      )}>
        {children}
      </div>
    </section>
  );
};

export default Slide;
