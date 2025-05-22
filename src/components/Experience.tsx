
import { Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExperienceProps {
  className?: string;
}

const Experience: React.FC<ExperienceProps> = ({ className }) => {
  const experiences = [
    {
      role: "Senior DevOps Engineer",
      company: "TechSolutions Inc.",
      period: "Jan 2021 - Present",
      description: "Lead a team of 5 DevOps engineers to implement and maintain CI/CD pipelines. Reduced deployment time by 60% and improved system reliability by implementing infrastructure as code."
    },
    {
      role: "Cloud Infrastructure Architect",
      company: "CloudNative Systems",
      period: "Mar 2019 - Dec 2020",
      description: "Designed and implemented cloud-native architecture on AWS. Migrated legacy applications to containerized microservices, resulting in 40% cost reduction and improved scalability."
    },
    {
      role: "DevOps Specialist",
      company: "InfraWorks",
      period: "Jul 2017 - Feb 2019",
      description: "Implemented automation strategies for deployment and monitoring. Established GitOps workflow and introduced Kubernetes for container orchestration."
    }
  ];

  return (
    <div className={cn("w-full", className)}>
      <h2 className="slide-heading">Experience</h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-portfolio-light z-0"></div>
        
        {/* Experience items */}
        <div className="relative z-10">
          {experiences.map((exp, index) => (
            <div 
              key={`exp-${index}`} 
              className={cn(
                "flex flex-col md:flex-row mb-12 last:mb-0",
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              )}
            >
              {/* Timeline bullet */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-portfolio-primary bg-white" />
              
              {/* Content */}
              <div className={cn(
                "w-full md:w-1/2 md:px-12",
                index % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"
              )}>
                <div className={cn(
                  "card border-l-4 border-portfolio-primary",
                  index % 2 === 0 ? "md:border-r-4 md:border-l-0" : "md:border-l-4"
                )}>
                  <div className="flex items-center mb-3">
                    <Briefcase className="text-portfolio-primary mr-2" size={20} />
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                  </div>
                  <div className="mb-2">
                    <p className="text-portfolio-dark font-medium">{exp.company}</p>
                    <p className="text-sm text-gray-500">{exp.period}</p>
                  </div>
                  <p className="text-gray-700">
                    {exp.description}
                  </p>
                </div>
              </div>
              
              {/* Empty div for symmetrical layout */}
              <div className="hidden md:block w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
