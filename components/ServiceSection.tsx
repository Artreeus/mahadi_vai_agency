import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      title: "UX/UI Design"
    },
    {
      id: 2,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
        </svg>
      ),
      title: "UX/UI Design"
    },
    {
      id: 3,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12" y2="18.01"></line>
        </svg>
      ),
      title: "Mobile App Development"
    },
    {
      id: 4,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      title: "Web Development"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-black relative">
      {/* Green line at top */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-lime-500"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-right mb-6">
          <div className="inline-flex items-center space-x-2">
            <svg className="w-4 h-4 text-lime-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,17V16H9V14H13V13H10A1,1 0 0,1 9,12V9A1,1 0 0,1 10,8H11V7H13V8H15V10H11V11H14A1,1 0 0,1 15,12V15A1,1 0 0,1 14,16H13V17H11Z" />
            </svg>
            <div className="text-lime-500 text-sm font-semibold">Our Services</div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-start">
          {/* Left side - Service cards */}
          <div className="md:w-1/2 mb-10 md:mb-0 grid grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`bg-lime-500 p-8 rounded-lg flex flex-col items-center justify-center text-center group
                  hover:bg-lime-600 transition-all duration-300 cursor-pointer relative overflow-hidden
                  ${index === 1 ? 'translate-y-10' : ''} 
                  ${index === 3 ? 'translate-y-10' : ''}`}
              >
                {/* Hover animation overlay */}
                <div className="absolute inset-0 bg-lime-600/0 group-hover:bg-lime-600/10 transition-colors duration-300"></div>
                
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 right-0 h-px bg-white"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-white"></div>
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-white"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-px bg-white"></div>
                </div>
                
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div className="text-white font-medium mt-4 group-hover:font-semibold transition-all duration-300">
                  {service.title}
                </div>
              </div>
            ))}
          </div>
          
          {/* Right side - Text content */}
          <div className="md:w-1/2 md:pl-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-lime-500">Empowering Your</span>
              <br />
              <span className="text-white">Business with</span>
              <br />
              <span className="text-white">Technology Solutions</span>
            </h2>
            
            <p className="text-gray-300 mb-8 text-lg">
              Start with an engaging introduction that captures the essence of your technological expertise and the transformative impact your services offer. For example, "Harnessing Innovation for Digital Excellence.
            </p>
            
            <Button className="bg-lime-500 hover:bg-lime-600 text-black font-medium text-base px-8 py-6 rounded-full h-auto transition-all duration-300 hover:shadow-lg hover:shadow-lime-500/20 transform hover:-translate-y-0.5">
              Start Consulting
            </Button>
          </div>
        </div>
      </div>
      
      {/* Green line at bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-lime-500"></div>
    </section>
  );
}