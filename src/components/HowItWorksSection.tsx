import { Download, MapPin, Bell, Laptop } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const steps = [
  {
    icon: Download,
    number: "1",
    title: "Install from Chrome Store",
    description: "One click adds SalahFlow to your browser – no account needed.",
  },
  {
    icon: MapPin,
    number: "2",
    title: "Set Your Location",
    description: "Enter your city or allow geolocation for accurate prayer times.",
  },
  {
    icon: Bell,
    number: "3",
    title: "Customize Your Reminders",
    description: "Pick notification times for each salah – takes less than a minute.",
  },
  {
    icon: Laptop,
    number: "4",
    title: "Stay in Flow",
    description: "Work confidently while SalahFlow tracks and reminds you.",
  },
];

const HowItWorksSection = () => {
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollReveal(0.2);
  
  return (
    <section className="gradient-section py-20 relative overflow-hidden">
      {/* Decorative wave pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-secondary/20" 
           style={{ clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0% 100%)" }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
              Start Praying on Time in Just Seconds
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              We know your time is valuable, so we made SalahFlow as simple as it gets. Here's how it works:
            </p>
          </div>
          
          <div 
            ref={stepsRef}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`relative transition-all duration-500 ${
                  stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-primary-foreground/20 -z-10"></div>
                )}
                
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 space-y-4 border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="relative">
                    <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto">
                      <step.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-secondary rounded-full flex items-center justify-center border-4 border-primary">
                      <span className="text-lg font-bold text-secondary-foreground">{step.number}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-primary-foreground text-center">
                    {step.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/80 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
