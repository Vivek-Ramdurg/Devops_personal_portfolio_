
import { Award } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AchievementsProps {
  className?: string;
}

const Achievements: React.FC<AchievementsProps> = ({ className }) => {
  const achievements = [
    {
      title: "AWS Certified Solutions Architect Professional",
      organization: "Amazon Web Services",
      date: "2023",
      description: "Demonstrated expertise in designing distributed systems on AWS"
    },
    {
      title: "Certified Kubernetes Administrator",
      organization: "Cloud Native Computing Foundation",
      date: "2022",
      description: "Validated skills in deploying and managing Kubernetes clusters"
    },
    {
      title: "HashiCorp Certified Terraform Associate",
      organization: "HashiCorp",
      date: "2021",
      description: "Proven proficiency in infrastructure as code using Terraform"
    },
    {
      title: "DevOps Hackathon Winner",
      organization: "TechConnect Conference",
      date: "2022",
      description: "First place in a 48-hour hackathon focused on CI/CD pipeline optimization"
    },
    {
      title: "Distinguished Speaker",
      organization: "CloudNative Days",
      date: "2023",
      description: "Delivered keynote on 'The Future of Infrastructure Automation'"
    }
  ];

  return (
    <div className={cn("w-full", className)}>
      <h2 className="slide-heading">Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <div 
            key={`achievement-${index}`} 
            className="card flex flex-col hover:bg-portfolio-light/20"
          >
            <div className="flex justify-between items-start mb-4">
              <Award className="text-portfolio-primary" size={24} />
              <span className="text-sm font-medium bg-portfolio-light px-2 py-1 rounded text-portfolio-dark">
                {achievement.date}
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-portfolio-dark mb-1">
              {achievement.title}
            </h3>
            
            <p className="text-sm text-portfolio-primary font-medium mb-2">
              {achievement.organization}
            </p>
            
            <p className="text-gray-600 text-sm flex-grow">
              {achievement.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
