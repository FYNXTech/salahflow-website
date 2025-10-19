import { AlertCircle, CheckCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const ProblemSection = () => {
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal(0.2);
  
  return (
    <section className="bg-primary py-20 relative overflow-hidden">
      {/* Decorative crescent pattern */}
      <div className="absolute top-10 right-10 w-24 h-24 border-4 border-secondary/20 rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 border-4 border-secondary/20 rounded-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
            Tired of Checking Prayer Times Between Work Tasks?
          </h2>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
            You're in the middle of a project, emails piling up, and you realize you need to check when Dhuhr is – again. Opening new tabs or apps pulls you out of focus and adds stress to your day. As Muslims, we want to prioritize salah, but work can make it feel like a juggling act. 
            <span className="font-semibold text-accent-foreground"> SalahFlow gets it</span> – it's built for people like us, so you can <span className="font-semibold text-accent-foreground">stay productive and pray on time</span>, every time.
          </p>
          
          <div 
            ref={cardsRef}
            className={`grid md:grid-cols-2 gap-8 pt-8 transition-all duration-700 ${
              cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Before - Stressed */}
            <div className="bg-secondary/30 backdrop-blur-sm rounded-2xl p-8 space-y-4 border border-primary-foreground/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-destructive/50 hover:bg-secondary/40 cursor-pointer group">
              <div className="w-16 h-16 mx-auto bg-destructive/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <AlertCircle className="w-8 h-8 text-destructive-foreground group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-primary-foreground">Without SalahFlow</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>• Multiple tabs open checking prayer times</li>
                <li>• Constant interruptions to your workflow</li>
                <li>• Stress and worry about missing prayers</li>
                <li>• Lost focus and productivity</li>
              </ul>
            </div>
            
            {/* After - Calm */}
            <div className="bg-accent/20 backdrop-blur-sm rounded-2xl p-8 space-y-4 border border-accent shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-accent hover:bg-accent/30 cursor-pointer group">
              <div className="w-16 h-16 mx-auto bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-8 h-8 text-accent-foreground group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-primary-foreground">With SalahFlow</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>• Prayer times at a glance in Chrome</li>
                <li>• Custom notifications keep you on track</li>
                <li>• Peace of mind while you work</li>
                <li>• Stay focused and pray on time</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
