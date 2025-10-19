import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";
import logo from "@/assets/salah-flow-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero islamic-pattern overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-primary-foreground/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left space-y-6">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
                <img src={logo} alt="SalahFlow Logo" className="w-16 h-16" />
                <h2 className="text-3xl font-bold text-primary-foreground">SalahFlow</h2>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                Never Miss a Salah, Even on Your Busiest Workday
              </h1>
              
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
                <span className="font-semibold">Assalamu Alaikum, Muslim professional!</span> I know the struggle of juggling deadlines while checking prayer times across tabs. SalahFlow brings prayer reminders right to your Chrome browser – <span className="font-semibold text-accent-foreground">one click</span>, custom notifications, and <span className="font-semibold text-accent-foreground">peace of mind</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button 
                  size="lg" 
                  className="bg-secondary hover:bg-secondary-light text-secondary-foreground text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  Install SalahFlow Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            
            {/* Right Column - Countdown Timer */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-secondary/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-primary-foreground/10 max-w-md w-full">
                <div className="text-center space-y-6">
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-6 h-6 text-primary" />
                    <p className="text-primary-foreground/80 text-sm uppercase tracking-wide">Next Prayer</p>
                  </div>
                  
                  <h3 className="text-4xl font-bold text-primary">Maghrib</h3>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-secondary-light/30 rounded-xl p-4">
                      <div className="text-4xl font-bold text-primary-foreground">01</div>
                      <div className="text-xs text-primary-foreground/60 uppercase mt-1">Hours</div>
                    </div>
                    <div className="bg-secondary-light/30 rounded-xl p-4">
                      <div className="text-4xl font-bold text-primary-foreground">32</div>
                      <div className="text-xs text-primary-foreground/60 uppercase mt-1">Minutes</div>
                    </div>
                    <div className="bg-secondary-light/30 rounded-xl p-4">
                      <div className="text-4xl font-bold text-primary-foreground">45</div>
                      <div className="text-xs text-primary-foreground/60 uppercase mt-1">Seconds</div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-primary-foreground/10">
                    <p className="text-sm text-primary-foreground/70">
                      Stay focused on your work while SalahFlow keeps track
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
