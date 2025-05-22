
import { Book, Link } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PreviousPortfoliosProps {
  className?: string;
}

const PreviousPortfolios: React.FC<PreviousPortfoliosProps> = ({ className }) => {
  const portfolios = [
    {
      title: "Web Development Portfolio",
      description: "A showcase of my early work in web development and frontend design",
      url: "https://web-dev-portfolio.example.com",
      year: "2021"
    },
    {
      title: "UI/UX Design Projects",
      description: "Collection of my user interface and experience design projects",
      url: "https://uiux-portfolio.example.com",
      year: "2020"
    },
    {
      title: "Cloud Architecture Portfolio",
      description: "Case studies of cloud architecture solutions I've designed",
      url: "https://cloud-portfolio.example.com",
      year: "2022"
    }
  ];

  return (
    <div className={cn("w-full", className)}>
      <h2 className="slide-heading">Previous Portfolios</h2>
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          {portfolios.map((portfolio, index) => (
            <div 
              key={`portfolio-${index}`} 
              className="card flex flex-col md:flex-row items-center gap-4 hover:bg-portfolio-light/10"
            >
              <div className="flex-shrink-0 p-4 bg-portfolio-light rounded-full">
                <Book className="text-portfolio-dark" size={32} />
              </div>
              
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-portfolio-dark">{portfolio.title}</h3>
                <p className="text-gray-600 mb-2">{portfolio.description}</p>
                <div className="text-sm text-gray-500">Published in {portfolio.year}</div>
              </div>
              
              <div className="flex-shrink-0">
                <a 
                  href={portfolio.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center px-4 py-2 border border-portfolio-primary text-portfolio-primary rounded hover:bg-portfolio-primary hover:text-white transition-colors"
                >
                  <Link size={18} className="mr-2" />
                  <span>View</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreviousPortfolios;
