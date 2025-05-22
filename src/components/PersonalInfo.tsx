
import { Github, Linkedin, Mail, MapPin, Phone, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PersonalInfoProps {
  className?: string;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ className }) => {
  const contactInfo = [
    { icon: <User className="text-portfolio-primary" size={24} />, label: "Full Name", value: "John Doe" },
    { icon: <Mail className="text-portfolio-primary" size={24} />, label: "Email", value: "john.doe@example.com" },
    { icon: <Phone className="text-portfolio-primary" size={24} />, label: "Phone", value: "+1 (234) 567-8901" },
    { icon: <Linkedin className="text-portfolio-primary" size={24} />, label: "LinkedIn", value: "linkedin.com/in/johndoe", isLink: true },
    { icon: <Github className="text-portfolio-primary" size={24} />, label: "GitHub", value: "github.com/johndoe", isLink: true },
    { icon: <MapPin className="text-portfolio-primary" size={24} />, label: "Address", value: "San Francisco, CA" },
  ];

  return (
    <div className={cn("w-full", className)}>
      <h2 className="slide-heading">Personal Information</h2>
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactInfo.map((item, index) => (
            <div key={`contact-${index}`} className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-portfolio-secondary transition-colors">
              <div className="mr-4">
                {item.icon}
              </div>
              <div>
                <p className="text-gray-500 text-sm">{item.label}</p>
                {item.isLink ? (
                  <a 
                    href={`https://${item.value}`} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="font-medium text-portfolio-primary hover:underline"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="font-medium">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
