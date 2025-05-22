
import { ArrowRight, FileText, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectsProps {
  className?: string;
}

const Projects: React.FC<ProjectsProps> = ({ className }) => {
  const projects = [
    {
      title: "DevOps Pipeline Automation",
      description: "Developed a fully automated CI/CD pipeline using Jenkins, Docker, and Kubernetes to streamline deployment.",
      technologies: ["Jenkins", "Docker", "Kubernetes", "AWS"],
      githubUrl: "https://github.com/example/devops-pipeline",
      demoUrl: "https://devops-demo.example.com",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Infrastructure as Code Framework",
      description: "Created a Terraform-based framework to provision and manage cloud resources with version control and testing.",
      technologies: ["Terraform", "AWS", "GitHub Actions", "Python"],
      githubUrl: "https://github.com/example/iac-framework",
      demoUrl: "",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    },
    {
      title: "Kubernetes Monitoring Solution",
      description: "Implemented a comprehensive monitoring system for Kubernetes clusters using Prometheus and Grafana.",
      technologies: ["Kubernetes", "Prometheus", "Grafana", "Helm"],
      githubUrl: "https://github.com/example/k8s-monitoring",
      demoUrl: "https://k8s-monitor.example.com",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Cloud Cost Optimization Tool",
      description: "Developed a tool to analyze and optimize cloud resource utilization and costs across multiple cloud providers.",
      technologies: ["Python", "AWS", "Azure", "React"],
      githubUrl: "https://github.com/example/cloud-cost-optimizer",
      demoUrl: "https://cost-optimizer.example.com",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
  ];

  return (
    <div className={cn("w-full", className)}>
      <h2 className="slide-heading">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={`project-${index}`} className="card hover:-translate-y-1">
            <div className="relative h-48 mb-4 rounded-md overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </div>
            </div>
            
            <p className="text-gray-700 mb-4 line-clamp-3">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span 
                  key={`tech-${index}-${techIndex}`} 
                  className="px-2 py-1 bg-portfolio-light text-portfolio-dark text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex space-x-3 mt-auto">
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center text-portfolio-primary hover:text-portfolio-dark transition-colors"
              >
                <Github size={16} className="mr-1" />
                <span>Code</span>
              </a>
              
              {project.demoUrl && (
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center text-portfolio-primary hover:text-portfolio-dark transition-colors"
                >
                  <FileText size={16} className="mr-1" />
                  <span>Demo</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
