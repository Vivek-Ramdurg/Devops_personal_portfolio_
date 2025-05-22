
import { cn } from '@/lib/utils';

interface AboutMeProps {
  className?: string;
}

const AboutMe: React.FC<AboutMeProps> = ({ className }) => {
  return (
    <div className={cn("w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center", className)}>
      <div className="flex flex-col space-y-6">
        <h2 className="slide-heading text-left">About Me</h2>
        <p className="text-lg leading-relaxed">
          I am a DevOps enthusiast with skills in CI/CD, automation, and cloud platforms. My passion 
          is streamlining development processes and building robust, scalable infrastructure.
        </p>
        <p className="text-lg leading-relaxed">
          With a background in software engineering and a keen interest in cloud technologies, 
          I enjoy solving complex problems and optimizing workflows. I believe in continuous learning 
          and staying updated with the latest industry trends.
        </p>
        <div className="flex flex-wrap gap-3 pt-4">
          <span className="px-4 py-2 bg-portfolio-light text-portfolio-dark rounded-full">DevOps</span>
          <span className="px-4 py-2 bg-portfolio-light text-portfolio-dark rounded-full">CI/CD</span>
          <span className="px-4 py-2 bg-portfolio-light text-portfolio-dark rounded-full">AWS</span>
          <span className="px-4 py-2 bg-portfolio-light text-portfolio-dark rounded-full">Kubernetes</span>
          <span className="px-4 py-2 bg-portfolio-light text-portfolio-dark rounded-full">Docker</span>
          <span className="px-4 py-2 bg-portfolio-light text-portfolio-dark rounded-full">Infrastructure as Code</span>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-portfolio-light">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
